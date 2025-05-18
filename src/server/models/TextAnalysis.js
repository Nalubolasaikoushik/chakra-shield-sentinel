
import mongoose from 'mongoose';

const TextAnalysisSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  sentiment: {
    type: String,
    enum: ['positive', 'neutral', 'negative']
  },
  toxicityScore: {
    type: Number,
    min: 0,
    max: 100
  },
  flags: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('TextAnalysis', TextAnalysisSchema);
