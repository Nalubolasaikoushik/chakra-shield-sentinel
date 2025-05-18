
import { toast } from "@/hooks/use-toast";

export interface ReportSubmission {
  username: string;
  platform: "twitter" | "instagram" | "facebook" | "linkedin";
  reason: string;
  screenshotUrl?: string;
}

// API URL with explicit port
const API_URL = import.meta.env.DEV 
  ? 'http://localhost:3001' 
  : window.location.origin.replace(/:\d+$/, ':3001');

// Function to submit a suspicious profile report
export const submitReport = async (reportData: ReportSubmission): Promise<{ success: boolean; reportId?: string }> => {
  try {
    console.log("Submitting report:", reportData);
    
    const response = await fetch(`${API_URL}/api/report`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reportData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit report');
    }
    
    const data = await response.json();
    
    toast({
      title: "Success",
      description: "Report submitted successfully. Thank you for helping keep the platform safe.",
      variant: "default",
    });
    
    return {
      success: true,
      reportId: data.reportId
    };
  } catch (error) {
    console.error('Error submitting report:', error);
    
    toast({
      title: "Error",
      description: error instanceof Error ? error.message : 'Failed to submit report',
      variant: "destructive",
    });
    
    return {
      success: false
    };
  }
};

// Function to fetch reports (admin only)
export const fetchReports = async (
  page: number = 1,
  limit: number = 10,
  filters: { status?: string; platform?: string } = {}
): Promise<any> => {
  try {
    // Get token from localStorage
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      throw new Error('Authentication required to view reports');
    }
    
    // Build query string from filters
    const queryParams = new URLSearchParams();
    queryParams.append('page', page.toString());
    queryParams.append('limit', limit.toString());
    
    if (filters.status) queryParams.append('status', filters.status);
    if (filters.platform) queryParams.append('platform', filters.platform);
    
    // Make the API request
    const response = await fetch(`${API_URL}/api/reports?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch reports');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching reports:', error);
    toast({
      title: "Error",
      description: error instanceof Error ? error.message : 'Failed to fetch reports',
      variant: "destructive",
    });
    throw error;
  }
};
