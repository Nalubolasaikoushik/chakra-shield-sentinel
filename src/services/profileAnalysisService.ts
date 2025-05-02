
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
