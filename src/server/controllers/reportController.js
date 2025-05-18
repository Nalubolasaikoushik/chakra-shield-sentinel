
import { createReport, getReports } from '../services/reportService.js';
import { generateReport } from '../services/reportGenerator.js';

export const createReportController = async (req, res) => {
  try {
    const { username, platform, reason, screenshotUrl } = req.body;
    
    // Validate required fields
    if (!username || !platform || !reason) {
      return res.status(400).json({ 
        error: 'Username, platform, and reason are required fields' 
      });
    }
    
    // Validate platform
    const allowedPlatforms = ['twitter', 'instagram', 'facebook', 'linkedin'];
    if (!allowedPlatforms.includes(platform.toLowerCase())) {
      return res.status(400).json({ 
        error: 'Invalid platform. Supported platforms: Twitter, Instagram, Facebook, LinkedIn' 
      });
    }
    
    // Create the report
    const report = await createReport({
      username,
      platform: platform.toLowerCase(),
      reason,
      screenshotUrl: screenshotUrl || null
    });
    
    return res.status(201).json({
      success: true,
      message: 'Suspicious profile report submitted successfully',
      reportId: report._id
    });
  } catch (error) {
    console.error('Error submitting report:', error);
    return res.status(500).json({ 
      error: 'Failed to submit report',
      message: error.message 
    });
  }
};

export const getReportsController = async (req, res) => {
  try {
    // Extract query parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { status, platform } = req.query;
    
    // Get reports with filters and pagination
    const reportsResult = await getReports({ 
      page, 
      limit, 
      status, 
      platform
    });
    
    return res.json({
      success: true,
      ...reportsResult
    });
  } catch (error) {
    console.error('Error fetching reports:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch reports',
      message: error.message 
    });
  }
};

export const generatePdfReportController = async (req, res) => {
  try {
    const analysisData = req.body;
    
    if (!analysisData || !analysisData.username || !analysisData.platform) {
      console.error('Invalid analysis data received:', analysisData);
      return res.status(400).json({ 
        error: 'Invalid analysis data. Required fields are missing.' 
      });
    }
    
    console.log('Received request to generate report for:', analysisData.username);
    
    // Generate the PDF report
    const pdfBuffer = await generateReport(analysisData);
    
    if (!pdfBuffer || pdfBuffer.length === 0) {
      console.error('Generated PDF buffer is empty');
      return res.status(500).json({
        error: 'Failed to generate PDF content'
      });
    }
    
    console.log('Generated PDF buffer size:', pdfBuffer.length);
    
    // Set response headers for PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 
      `attachment; filename="report-${analysisData.username}-${analysisData.platform}-${Date.now()}.pdf"`);
    res.setHeader('Content-Length', pdfBuffer.length);
    res.setHeader('Cache-Control', 'no-cache');
    
    // Send the PDF file
    return res.end(pdfBuffer);
  } catch (error) {
    console.error('Error generating report:', error);
    return res.status(500).json({ 
      error: 'Failed to generate report',
      message: error.message 
    });
  }
};
