interface AnalyzeProfileRequest {
  username: string;
  platform: string;
}

interface ProfileMetadata {
  displayName: string;
  followers: number;
  following: number;
  creationDate: string;
  bio: string;
  location: string;
  [key: string]: any; // For platform-specific properties
}

interface Pattern {
  type: string;
  description: string;
  score: number;
  insights: string;
}

export interface AnalysisResult {
  username: string;
  platform: string;
  analysisDate: string;
  profileMetadata: ProfileMetadata;
  scores: {
    behaviorScore?: number;
    languageScore?: number;
    contentScore?: number;
    temporalScore?: number;
    networkScore?: number;
    [key: string]: number | undefined;
  };
  alertLevel: 'low' | 'medium' | 'high';
  patterns: Pattern[];
}

export interface ImageVerificationResult {
  success: boolean;
  authenticityScore: string;
  matchingConfidence: string;
  classification: 'genuine' | 'suspicious' | 'fake';
  detailedAnalysis: {
    metadata: {
      fileType: string;
      fileName: string;
      fileSize: string;
      timestamp: string;
    };
    visualFeatures: {
      faceDetection: boolean;
      faceCount: number;
      inconsistentLighting: boolean;
      inconsistentPixelPatterns: boolean;
      artificialBlurring: boolean;
    };
    aiSignatures: {
      generativeArtifacts: number;
      styleConsistency: number;
      textureAnalysis: number;
    };
    duplicateDetection: {
      similarImagesFound: boolean;
      similarityScore: number;
      possibleSources: string[];
    };
  };
}

// Updated API URL with explicit port
const API_URL = import.meta.env.DEV 
  ? 'http://localhost:3001' 
  : window.location.origin.replace(/:\d+$/, ':3001');

export const analyzeProfile = async (username: string, platform: string): Promise<AnalysisResult> => {
  try {
    const response = await fetch(`${API_URL}/api/analyze-profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, platform }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to analyze profile');
    }

    return await response.json();
  } catch (error) {
    console.error('Error analyzing profile:', error);
    throw error;
  }
};

export const verifyImage = async (file: File): Promise<ImageVerificationResult> => {
  try {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await fetch(`${API_URL}/api/verify-image`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to verify image');
    }

    return await response.json();
  } catch (error) {
    console.error('Error verifying image:', error);
    throw error;
  }
};

export const verifyImageBase64 = async (base64Image: string, filename?: string): Promise<ImageVerificationResult> => {
  try {
    const response = await fetch(`${API_URL}/api/verify-image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        base64Image,
        filename: filename || 'image.jpg'
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to verify image');
    }

    return await response.json();
  } catch (error) {
    console.error('Error verifying image with base64:', error);
    throw error;
  }
};

// Fixed function to generate PDF report with proper error handling and response processing
export const generateProfileReport = async (analysisData: AnalysisResult): Promise<Blob> => {
  try {
    console.log('Generating profile report with data:', JSON.stringify(analysisData));
    
    const response = await fetch(`${API_URL}/api/generate-report`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/pdf',
      },
      body: JSON.stringify(analysisData),
    });

    if (!response.ok) {
      console.error('Error response from server:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error details:', errorText);
      throw new Error(`Failed to generate report: ${response.statusText}`);
    }

    const blob = await response.blob();
    console.log('Received blob size:', blob.size, 'type:', blob.type);
    
    if (blob.size === 0) {
      throw new Error('Server returned an empty PDF');
    }
    
    return new Blob([blob], { type: 'application/pdf' });
  } catch (error) {
    console.error('Error generating profile report:', error);
    throw error;
  }
};

// Fixed function to generate PDF report for image verification
export const generateImageReport = async (verificationResult: ImageVerificationResult): Promise<Blob> => {
  try {
    console.log('Generating image report with data:', JSON.stringify(verificationResult));
    
    // Add necessary metadata for report generation
    const reportData = {
      username: 'Image Verification',
      platform: 'Image Analysis',
      analysisDate: new Date().toISOString(),
      profileMetadata: {
        imageType: verificationResult.detailedAnalysis.metadata.fileType,
        fileName: verificationResult.detailedAnalysis.metadata.fileName,
        fileSize: verificationResult.detailedAnalysis.metadata.fileSize,
        timestamp: verificationResult.detailedAnalysis.metadata.timestamp,
      },
      scores: {
        authenticityScore: parseInt(verificationResult.authenticityScore),
        matchingConfidence: parseInt(verificationResult.matchingConfidence),
        generativeArtifacts: verificationResult.detailedAnalysis.aiSignatures.generativeArtifacts,
        styleConsistency: verificationResult.detailedAnalysis.aiSignatures.styleConsistency,
        textureAnalysis: verificationResult.detailedAnalysis.aiSignatures.textureAnalysis,
      },
      alertLevel: verificationResult.classification === 'genuine' ? 'low' : 
                 verificationResult.classification === 'suspicious' ? 'medium' : 'high',
      patterns: [],
    };
    
    // Add patterns based on verification results
    if (verificationResult.detailedAnalysis.visualFeatures.inconsistentLighting) {
      reportData.patterns.push({
        type: 'Lighting Inconsistency',
        description: 'Unnatural lighting patterns detected in the image',
        score: 85,
        insights: 'Suggests possible image manipulation or compositing'
      });
    }
    
    if (verificationResult.detailedAnalysis.visualFeatures.inconsistentPixelPatterns) {
      reportData.patterns.push({
        type: 'Pixel Pattern Anomaly',
        description: 'Unusual pixel distributions detected',
        score: 92,
        insights: 'Indicates potential AI generation or digital manipulation'
      });
    }
    
    if (verificationResult.detailedAnalysis.duplicateDetection.similarImagesFound) {
      reportData.patterns.push({
        type: 'Image Duplication',
        description: 'Similar images found in database',
        score: 78,
        insights: 'Image may be derived from existing content with modifications'
      });
    }

    const response = await fetch(`${API_URL}/api/generate-report`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/pdf',
      },
      body: JSON.stringify(reportData),
    });

    if (!response.ok) {
      console.error('Error response from server:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error details:', errorText);
      throw new Error(`Failed to generate image report: ${response.statusText}`);
    }

    // Get the blob with the correct MIME type
    const blob = await response.blob();
    console.log('Received blob size:', blob.size, 'type:', blob.type);
    
    return new Blob([blob], { type: 'application/pdf' });
  } catch (error) {
    console.error('Error generating image report:', error);
    throw error;
  }
};

// Improved helper function for downloading reports
export const downloadPdfReport = (blob: Blob, filename: string): void => {
  console.log('Downloading PDF report:', filename, 'size:', blob.size, 'type:', blob.type);
  
  if (!blob || blob.size === 0) {
    console.error('Invalid blob provided for download:', blob);
    throw new Error('The generated PDF is empty or invalid');
  }
  
  try {
    // Create a blob URL
    const url = URL.createObjectURL(blob);
    console.log('Created blob URL for download:', url);
    
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    
    // Append to body, click and remove to trigger download
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      console.log('Download cleanup complete');
    }, 2000);
  } catch (error) {
    console.error('Download failed:', error);
    throw new Error(`Failed to download PDF: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};
