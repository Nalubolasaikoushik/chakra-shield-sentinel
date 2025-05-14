
import { getCollection } from '../utils/dbConnection.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Collection name
const REPORTS_COLLECTION = 'reports';

// Create a new suspicious profile report
export async function createReport(reportData) {
  try {
    const reportsCollection = await getCollection(REPORTS_COLLECTION);
    
    // Add creation timestamp
    const report = {
      ...reportData,
      status: 'pending', // pending, reviewed, dismissed
      createdAt: new Date()
    };
    
    const result = await reportsCollection.insertOne(report);
    
    // Send email notification
    await sendReportNotification(report);
    
    return { ...report, _id: result.insertedId };
  } catch (error) {
    console.error('Error creating report:', error);
    throw error;
  }
}

// Get all reports with optional filtering
export async function getReports({ 
  page = 1, 
  limit = 10,
  status = null,
  platform = null
}) {
  try {
    // Build query filter
    const filter = {};
    
    if (status) {
      filter.status = status;
    }
    
    if (platform) {
      filter.platform = platform;
    }
    
    // Get collection
    const reportsCollection = await getCollection(REPORTS_COLLECTION);
    
    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Execute query
    const reports = await reportsCollection
      .find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();
    
    // Get total count for pagination
    const totalCount = await reportsCollection.countDocuments(filter);
    
    // Calculate total pages
    const totalPages = Math.ceil(totalCount / limit);
    
    return {
      data: reports,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    };
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }
}

// Send email notification to admin
async function sendReportNotification(report) {
  try {
    // Skip email in development if no email config
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('Email notification skipped: No email configuration found');
      return;
    }
    
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    
    // Admin email destination
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: `New Suspicious Profile Report: ${report.username} on ${report.platform}`,
      html: `
        <h2>New Suspicious Profile Report</h2>
        <p><strong>Username:</strong> ${report.username}</p>
        <p><strong>Platform:</strong> ${report.platform}</p>
        <p><strong>Reason:</strong> ${report.reason}</p>
        ${report.screenshotUrl ? `<p><strong>Screenshot:</strong> <a href="${report.screenshotUrl}">View Screenshot</a></p>` : ''}
        <p><strong>Submitted:</strong> ${new Date(report.createdAt).toLocaleString()}</p>
        <p>Please review this report in the admin dashboard.</p>
      `
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`Email notification sent to ${adminEmail}`);
  } catch (error) {
    console.error('Error sending email notification:', error);
    // Don't throw - email failure shouldn't break the report submission
  }
}
