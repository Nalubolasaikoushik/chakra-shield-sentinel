
import { getAlerts, getAlertById, createAlert } from '../services/alertService.js';
import { logToBlockchain, getLogEntryById, getAllEntries } from '../services/blockchainLogger.js';

export const createAlertController = async (req, res) => {
  try {
    const alertData = req.body;
    
    if (!alertData || !alertData.profileData) {
      return res.status(400).json({ 
        error: 'Invalid alert data. Profile information is required.' 
      });
    }
    
    const alert = await createAlert(alertData);
    
    return res.status(201).json({
      success: true,
      message: 'Alert created successfully',
      alert
    });
  } catch (error) {
    console.error('Error creating alert:', error);
    return res.status(500).json({ 
      error: 'Failed to create alert',
      message: error.message 
    });
  }
};

export const getAlertsController = async (req, res) => {
  try {
    // Extract query parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { platform, alertLevel, startDate, endDate, sortBy, sortOrder } = req.query;
    
    console.log('Fetching alerts with filters:', { 
      page, limit, platform, alertLevel, startDate, endDate, sortBy, sortOrder 
    });
    
    // Get alerts with filters and pagination
    const alertsResult = await getAlerts({ 
      page, 
      limit, 
      platform, 
      alertLevel, 
      startDate, 
      endDate,
      sortBy: sortBy || 'createdAt',
      sortOrder: sortOrder || 'desc'
    });
    
    return res.json({
      success: true,
      ...alertsResult
    });
  } catch (error) {
    console.error('Error in /api/alerts endpoint:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch alerts',
      message: error.message 
    });
  }
};

export const getAlertByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({ error: 'Alert ID is required' });
    }
    
    const alert = await getAlertById(id);
    
    if (!alert) {
      return res.status(404).json({ error: 'Alert not found' });
    }
    
    return res.json({
      success: true,
      alert
    });
  } catch (error) {
    console.error('Error retrieving alert:', error);
    return res.status(500).json({ 
      error: 'Failed to retrieve alert',
      message: error.message 
    });
  }
};

export const logAlertController = async (req, res) => {
  try {
    const alertData = req.body;
    
    if (!alertData || !alertData.profileData) {
      return res.status(400).json({ 
        error: 'Invalid alert data. Profile information is required.' 
      });
    }
    
    console.log('Received request to log alert for:', 
      alertData.profileData.username || 'Unknown profile');
    
    // Log the alert data to our simulated blockchain
    const logResult = await logToBlockchain(alertData);
    
    return res.status(201).json({
      success: true,
      message: 'Alert successfully logged to immutable ledger',
      referenceId: logResult.referenceId,
      timestamp: logResult.timestamp,
      blockNumber: logResult.blockNumber
    });
  } catch (error) {
    console.error('Error logging alert:', error);
    return res.status(500).json({ 
      error: 'Failed to log alert',
      message: error.message 
    });
  }
};

export const getLoggedAlertController = (req, res) => {
  try {
    const { referenceId } = req.params;
    
    if (!referenceId) {
      return res.status(400).json({ error: 'Reference ID is required' });
    }
    
    const logEntry = getLogEntryById(referenceId);
    
    if (!logEntry) {
      return res.status(404).json({ error: 'Log entry not found' });
    }
    
    return res.json({
      success: true,
      logEntry
    });
  } catch (error) {
    console.error('Error retrieving log entry:', error);
    return res.status(500).json({ 
      error: 'Failed to retrieve log entry',
      message: error.message 
    });
  }
};

export const getLoggedAlertsController = (req, res) => {
  try {
    const entries = getAllEntries();
    return res.json({
      success: true,
      count: entries.length,
      entries
    });
  } catch (error) {
    console.error('Error retrieving logs:', error);
    return res.status(500).json({ 
      error: 'Failed to retrieve logs',
      message: error.message 
    });
  }
};
