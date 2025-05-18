
import TextAnalysis from '../models/TextAnalysis.js';

// Function to analyze text for suspicious patterns
export const analyzeText = async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'Text content is required' });
    }
    
    // In a real implementation, this would use NLP libraries
    // like natural, sentiment, or toxicity classifiers
    
    // Simulate text analysis with some basic rules
    const textLower = text.toLowerCase();
    const wordCount = text.split(/\s+/).length;
    const flags = [];
    
    // Check for spam-like patterns
    if (textLower.includes('buy now') || textLower.includes('click here') || 
        textLower.includes('free') || textLower.includes('discount')) {
      flags.push('repetitive spam');
    }
    
    // Check for hate speech indicators (very simplified)
    const hateKeywords = ['hate', 'kill', 'attack', 'destroy'];
    if (hateKeywords.some(keyword => textLower.includes(keyword))) {
      flags.push('hate speech');
    }
    
    // Check for AI-generated text patterns (simplified)
    if (wordCount > 50 && text.split('.').length > 5) {
      const avgSentenceLength = text.length / text.split('.').length;
      if (avgSentenceLength > 15 && avgSentenceLength < 25) {
        flags.push('AI-like structure');
      }
    }
    
    // Calculate scores (simulated)
    let toxicityScore = Math.min(flags.length * 30, 100);
    
    // Determine sentiment (simplified)
    let sentiment = 'neutral';
    const positiveWords = ['good', 'great', 'excellent', 'happy', 'love'];
    const negativeWords = ['bad', 'awful', 'terrible', 'sad', 'hate'];
    
    const positiveCount = positiveWords.filter(word => textLower.includes(word)).length;
    const negativeCount = negativeWords.filter(word => textLower.includes(word)).length;
    
    if (positiveCount > negativeCount) {
      sentiment = 'positive';
    } else if (negativeCount > positiveCount) {
      sentiment = 'negative';
    }
    
    // Create text analysis record
    const textAnalysis = new TextAnalysis({
      text,
      sentiment,
      toxicityScore,
      flags
    });
    
    await textAnalysis.save();
    
    return res.json({
      sentiment,
      toxicityScore,
      flags,
      textLength: text.length,
      wordCount
    });
  } catch (error) {
    console.error('Error analyzing text:', error);
    return res.status(500).json({ 
      error: 'Failed to analyze text',
      message: error.message 
    });
  }
};
