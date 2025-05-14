
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

// MongoDB Connection URL
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.MONGODB_DB_NAME || 'profilealerts';

// Connection cache
let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  // If we already have a connection, use it
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10,
    });

    const db = client.db(DB_NAME);

    // Cache the connection
    cachedClient = client;
    cachedDb = db;

    console.log('Connected to MongoDB successfully');
    return { client, db };
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

// Helper function to get collection
export async function getCollection(collectionName) {
  const { db } = await connectToDatabase();
  return db.collection(collectionName);
}

// Initialize database with required collections and indexes if needed
export async function initializeDatabase() {
  try {
    const { db } = await connectToDatabase();
    
    // Create alerts collection if it doesn't exist
    if (!(await db.listCollections({ name: 'alerts' }).toArray()).length) {
      await db.createCollection('alerts');
      
      // Create indexes for better query performance
      const alertsCollection = db.collection('alerts');
      await alertsCollection.createIndex({ createdAt: -1 });
      await alertsCollection.createIndex({ platform: 1 });
      await alertsCollection.createIndex({ alertLevel: 1 });
      
      console.log('Alerts collection and indexes created');
    }
    
    // Create reports collection if it doesn't exist
    if (!(await db.listCollections({ name: 'reports' }).toArray()).length) {
      await db.createCollection('reports');
      
      // Create indexes for better query performance
      const reportsCollection = db.collection('reports');
      await reportsCollection.createIndex({ createdAt: -1 });
      await reportsCollection.createIndex({ platform: 1 });
      await reportsCollection.createIndex({ status: 1 });
      
      console.log('Reports collection and indexes created');
    }
    
    return true;
  } catch (error) {
    console.error('Failed to initialize database:', error);
    return false;
  }
}
