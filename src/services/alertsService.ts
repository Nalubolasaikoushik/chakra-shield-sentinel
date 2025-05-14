
import { toast } from "@/hooks/use-toast";

// Types for alerts
export interface AlertFilter {
  page?: number;
  limit?: number;
  platform?: string;
  alertLevel?: string;
  startDate?: string;
  endDate?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface Pagination {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface Alert {
  _id: string;
  profileData: {
    username: string;
    platform: string;
    displayName?: string;
    avatarUrl?: string;
  };
  alertLevel: 'low' | 'medium' | 'high' | 'critical';
  createdAt: string;
  description: string;
  evidenceUrls?: string[];
  analysisResults?: Record<string, any>;
  status: 'new' | 'investigating' | 'resolved' | 'false_positive';
}

export interface AlertsResponse {
  success: boolean;
  data: Alert[];
  pagination: Pagination;
  error?: string;
}

// Updated API URL with explicit port
const API_URL = import.meta.env.DEV 
  ? 'http://localhost:3001' 
  : window.location.origin.replace(/:\d+$/, ':3001');

// Function to get alerts with filtering and pagination
export const fetchAlerts = async (filters: AlertFilter = {}): Promise<AlertsResponse> => {
  try {
    // Get token from localStorage (would normally come from your auth system)
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      throw new Error('Authentication required. Please login.');
    }
    
    // Build query string from filters
    const queryParams = new URLSearchParams();
    
    if (filters.page) queryParams.append('page', filters.page.toString());
    if (filters.limit) queryParams.append('limit', filters.limit.toString());
    if (filters.platform) queryParams.append('platform', filters.platform);
    if (filters.alertLevel) queryParams.append('alertLevel', filters.alertLevel);
    if (filters.startDate) queryParams.append('startDate', filters.startDate);
    if (filters.endDate) queryParams.append('endDate', filters.endDate);
    if (filters.sortBy) queryParams.append('sortBy', filters.sortBy);
    if (filters.sortOrder) queryParams.append('sortOrder', filters.sortOrder);
    
    // Make the API request
    const response = await fetch(`${API_URL}/api/alerts?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch alerts');
    }
    
    // Parse and return data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching alerts:', error);
    toast({
      title: "Error",
      description: error instanceof Error ? error.message : 'Failed to fetch alerts',
      variant: "destructive",
    });
    throw error;
  }
};

// Function to get a specific alert by ID
export const fetchAlertById = async (id: string): Promise<Alert> => {
  try {
    // Get token from localStorage
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      throw new Error('Authentication required. Please login.');
    }
    
    // Make the API request
    const response = await fetch(`${API_URL}/api/alerts/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Failed to fetch alert: ${id}`);
    }
    
    // Parse and return data
    const data = await response.json();
    return data.alert;
  } catch (error) {
    console.error(`Error fetching alert ${id}:`, error);
    toast({
      title: "Error",
      description: error instanceof Error ? error.message : 'Failed to fetch alert',
      variant: "destructive",
    });
    throw error;
  }
};

// Function to generate a test auth token (for development only)
export const generateTestAuthToken = async (): Promise<string> => {
  if (!import.meta.env.DEV) {
    throw new Error('Test tokens can only be generated in development environment');
  }
  
  try {
    const response = await fetch(`${API_URL}/api/auth/test-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to generate test token');
    }
    
    const data = await response.json();
    
    // Store token in localStorage
    localStorage.setItem('authToken', data.token);
    
    return data.token;
  } catch (error) {
    console.error('Error generating test token:', error);
    throw error;
  }
};
