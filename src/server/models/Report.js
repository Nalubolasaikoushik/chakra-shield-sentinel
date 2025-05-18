
import mongoose from 'mongoose';

const ReportSchema = new mongoose.Schema({
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
  reason: {
    type: String,
    required: true
  },
  screenshotUrl: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'dismissed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Report', ReportSchema);
