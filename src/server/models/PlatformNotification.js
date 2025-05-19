
import mongoose from 'mongoose';

const PlatformNotificationSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  platform: {
    type: String,
    required: true,
    enum: ['twitter', 'instagram', 'facebook', 'telegram', 'linkedin']
  },
  evidence: {
    type: Object,
    default: {}
  },
  alertLevel: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  requestedBy: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'failed', 'resolved'],
    default: 'pending'
  },
  platformResponse: {
    type: Object,
    default: null
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('PlatformNotification', PlatformNotificationSchema);
