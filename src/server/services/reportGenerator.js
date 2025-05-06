
import PDFDocument from 'pdfkit';

/**
 * Generates a PDF report from profile analysis data
 * @param {Object} analysisData - Complete profile analysis data
 * @returns {Promise<Buffer>} PDF document as buffer
 */
export async function generateReport(analysisData) {
  return new Promise((resolve, reject) => {
    try {
      // Create a PDF document
      const doc = new PDFDocument({
        size: 'A4',
        margin: 50,
        info: {
          Title: `ChakraShield - ${analysisData.username} Analysis Report`,
          Author: 'ChakraShield Security',
          Subject: 'Social Media Analysis Report',
          Keywords: 'social media, analysis, security, authentication'
        }
      });

      // Collect PDF data into a buffer
      const buffers = [];
      doc.on('data', buffer => buffers.push(buffer));
      doc.on('end', () => {
        console.log("PDF generation complete, buffer size:", Buffer.concat(buffers).length);
        resolve(Buffer.concat(buffers));
      });
      doc.on('error', err => {
        console.error("PDF generation error:", err);
        reject(err);
      });

      // Start building the report
      generateReportContent(doc, analysisData);

      // Finalize the PDF document
      doc.end();
    } catch (error) {
      console.error('Error generating PDF:', error);
      reject(error);
    }
  });
}

/**
 * Generates the content for the PDF report
 * @param {PDFKit.PDFDocument} doc - PDFKit document
 * @param {Object} data - Analysis data
 */
function generateReportContent(doc, data) {
  const { username, platform, analysisDate, profileMetadata, scores, alertLevel, patterns } = data;
  
  // Add header with ChakraShield branding
  doc.fontSize(20)
     .text('CHAKRASHIELD SECURITY', { align: 'center' })
     .moveDown(0.5);
  
  doc.fontSize(16)
     .text('SOCIAL MEDIA ACCOUNT ANALYSIS REPORT', { align: 'center' })
     .moveDown(0.5);
    
  doc.fontSize(10)
     .text(`REPORT GENERATED: ${new Date(analysisDate).toLocaleString()}`, { align: 'center' })
     .text(`REPORT ID: CSR-${Date.now().toString().substring(5)}`, { align: 'center' })
     .moveDown(1.5);
  
  // Basic information section
  addSectionTitle(doc, 'BASIC INFORMATION');
  
  doc.fontSize(11)
     .text(`Username: ${username}`, { continued: true })
     .text(`Platform: ${platform}`, { align: 'right' })
     .moveDown(0.5);
  
  // Add alert level with colored box
  doc.fontSize(12)
     .text('Alert Level: ', { continued: true });
  
  const alertColors = {
    low: '#3b82f6',    // blue
    medium: '#f59e0b', // amber
    high: '#ef4444'    // red
  };
  
  doc.fillColor(alertColors[alertLevel] || '#000000')
     .text(alertLevel.toUpperCase())
     .fillColor('#000000')
     .moveDown(1.5);
  
  // Profile metadata section
  if (profileMetadata) {
    addSectionTitle(doc, 'PROFILE METADATA');
    
    doc.fontSize(11);
    for (const [key, value] of Object.entries(profileMetadata)) {
      if (value !== undefined && value !== null) {
        if (key === 'creationDate' && value) {
          doc.text(`${formatKey(key)}: ${new Date(value).toLocaleDateString()}`);
        } else {
          doc.text(`${formatKey(key)}: ${value}`);
        }
      }
    }
    doc.moveDown(1.5);
  }
  
  // Analysis scores section
  if (scores) {
    addSectionTitle(doc, 'ANALYSIS SCORES');
    
    doc.fontSize(11);
    for (const [key, value] of Object.entries(scores)) {
      if (value !== undefined && value !== null) {
        const score = parseInt(value);
        const scoreText = `${formatKey(key)}: ${score}/100`;
        
        doc.text(scoreText);
        
        // Add a simple score bar
        const barWidth = 200;
        const filledWidth = (score / 100) * barWidth;
        
        doc.rect(doc.x + 150, doc.y - 12, barWidth, 10)
           .stroke();
        
        let barColor = '#3b82f6'; // blue for low scores
        if (score > 70) {
          barColor = '#ef4444'; // red for high scores
        } else if (score > 30) {
          barColor = '#f59e0b'; // amber for medium scores
        }
        
        doc.rect(doc.x + 150, doc.y - 12, filledWidth, 10)
           .fill(barColor);
      }
    }
    doc.moveDown(1.5);
  }
  
  // Identified patterns section
  addSectionTitle(doc, 'IDENTIFIED SUSPICIOUS PATTERNS');
  
  if (patterns && patterns.length > 0) {
    patterns.forEach((pattern, index) => {
      doc.fontSize(11)
         .text(`Pattern ${index + 1}: ${pattern.type.toUpperCase()}`, { underline: true })
         .fontSize(10)
         .text(`Description: ${pattern.description}`)
         .text(`Confidence Score: ${pattern.score}/100`)
         .text(`Analysis Insight: ${pattern.insights}`)
         .moveDown(0.5);
    });
  } else {
    doc.fontSize(11)
       .text('No suspicious patterns detected.')
       .moveDown(0.5);
  }
  
  // Footer with branding
  doc.fontSize(8)
     .text('CHAKRASHIELD CONFIDENTIAL', { align: 'center' })
     .moveDown(0.5)
     .text('This report is generated automatically by ChakraShield Security analysis system. ' +
           'The findings in this report are based on pattern analysis and statistical models.', 
           { align: 'center' });
  
  // Add page numbers
  const pageCount = doc.bufferedPageRange().count;
  for (let i = 0; i < pageCount; i++) {
    doc.switchToPage(i);
    doc.fontSize(8)
       .text(`Page ${i + 1} of ${pageCount}`, 
              doc.page.width - 100, 
              doc.page.height - 50,
              { align: 'right' });
  }
}

/**
 * Adds a section title to the document
 * @param {PDFKit.PDFDocument} doc - PDFKit document
 * @param {string} title - Section title
 */
function addSectionTitle(doc, title) {
  doc.fontSize(12)
     .fillColor('#1e3a8a')
     .text(title)
     .moveDown(0.5)
     .fillColor('#000000');
}

/**
 * Formats a key string for display
 * @param {string} key - The key to format
 * @returns {string} Formatted key
 */
function formatKey(key) {
  // Convert camelCase to Title Case with spaces
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase());
}
