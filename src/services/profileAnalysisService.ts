
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
    behaviorScore: number;
    languageScore: number;
    contentScore: number;
    temporalScore: number;
    networkScore: number;
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

const API_URL = 'http://localhost:3001'; // Adjust based on your server configuration

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
