
import mongoose from 'mongoose';

const AlertSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  platform: {
    type: String,
    required: true,
    enum: ['twitter', 'instagram', 'facebook', 'linkedin']
  },
  alertLevel: {
    type: String,
    required: true,
    enum: ['low', 'medium', 'high']
  },
  profileData: {
    type: Object,
    required: true
  },
  scores: {
    behaviorScore: Number,
    languageScore: Number,
    contentScore: Number,
    temporalScore: Number,
    networkScore: Number
  },
  patterns: [{
    type: {
      type: String,
      required: true
    },
    description: String,
    score: Number,
    insights: String
  }],
  blockchainReference: {
    referenceId: String,
    timestamp: Date,
    blockNumber: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Alert', AlertSchema);
