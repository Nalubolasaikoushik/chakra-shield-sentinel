
import crypto from 'crypto';

// Simulated blockchain/IPFS ledger (in-memory for demo purposes)
const ledger = [];

/**
 * Logs alert data to a simulated blockchain/IPFS ledger
 * @param {Object} alertData - The alert data to be logged
 * @returns {Object} - The log entry with reference ID and timestamp
 */
export const logToBlockchain = async (alertData) => {
  try {
    // Create a timestamp for the log entry
    const timestamp = new Date().toISOString();
    
    // Generate a unique reference ID (simulating a blockchain hash or IPFS CID)
    const data = JSON.stringify({ ...alertData, timestamp });
    const referenceId = generateHash(data);
    
    // Create the log entry
    const logEntry = {
      referenceId,
      timestamp,
      data: alertData,
      // Simulating blockchain properties
      blockNumber: ledger.length + 1,
      previousHash: ledger.length ? ledger[ledger.length - 1].referenceId : '0',
      verified: true
    };
    
    // Add to our simulated ledger
    ledger.push(logEntry);
    
    console.log(`Alert logged to blockchain with reference ID: ${referenceId}`);
    
    return {
      referenceId,
      timestamp,
      blockNumber: logEntry.blockNumber
    };
  } catch (error) {
    console.error('Error logging to blockchain:', error);
    throw new Error('Failed to log alert to blockchain ledger');
  }
};

/**
 * Retrieves a log entry by its reference ID
 * @param {string} referenceId - The reference ID to look up
 * @returns {Object|null} - The log entry if found, null otherwise
 */
export const getLogEntryById = (referenceId) => {
  const entry = ledger.find(entry => entry.referenceId === referenceId);
  return entry || null;
};

/**
 * Generate a SHA-256 hash to simulate blockchain hash or IPFS CID
 * @param {string} data - The data to hash
 * @returns {string} - The hexadecimal hash
 */
const generateHash = (data) => {
  return crypto.createHash('sha256').update(data).digest('hex');
};

/**
 * Get all entries in the ledger
 * @returns {Array} - All ledger entries
 */
export const getAllEntries = () => {
  return ledger;
};
