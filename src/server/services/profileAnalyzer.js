
/**
 * Simulates analyzing a social media profile and returns behavior analysis results
 */
const analyzeProfile = async (username, platform) => {
  // In a real implementation, this would call platform-specific APIs or web scraping
  // This is a simulation that generates plausible data based on the username and platform
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Generate pseudo-random but deterministic scores based on username
  const seed = username.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const randomScore = (base) => Math.min(95, Math.max(5, Math.floor(
    (seed * base * 13) % 100
  )));
  
  const behaviorScore = randomScore(1.1);
  const languageScore = randomScore(1.3);
  const contentScore = randomScore(0.9);
  const temporalScore = randomScore(1.5);
  const networkScore = randomScore(0.7);
  
  // Calculate overall alert level
  const overallScore = (behaviorScore + languageScore + contentScore + temporalScore + networkScore) / 5;
  let alertLevel = 'low';
  if (overallScore > 70) alertLevel = 'high';
  else if (overallScore > 40) alertLevel = 'medium';
  
  // Generate mock profile metadata
  const profileMetadata = generateProfileMetadata(username, platform);
  
  // Generate pattern analysis based on scores
  const patterns = generatePatternAnalysis(username, platform, {
    behaviorScore,
    languageScore,
    contentScore,
    temporalScore,
    networkScore
  });
  
  return {
    username,
    platform,
    analysisDate: new Date().toISOString(),
    profileMetadata,
    scores: {
      behaviorScore,
      languageScore,
      contentScore,
      temporalScore,
      networkScore,
    },
    alertLevel,
    patterns
  };
};

/**
 * Generates simulated profile metadata based on username and platform
 */
const generateProfileMetadata = (username, platform) => {
  const seed = username.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const randomInt = (min, max) => Math.floor(
    ((seed * (platform.charCodeAt(0) * 0.5)) % (max - min)) + min
  );
  
  // Calculate a plausible account creation date (between 1-5 years ago)
  const currentDate = new Date();
  const yearsAgo = randomInt(1, 6);
  const creationDate = new Date(currentDate);
  creationDate.setFullYear(creationDate.getFullYear() - yearsAgo);
  creationDate.setMonth(randomInt(0, 12));
  creationDate.setDate(randomInt(1, 28));
  
  // Generate different metadata based on platform
  const platformSpecificData = {};
  
  switch (platform.toLowerCase()) {
    case 'twitter':
      platformSpecificData.tweets = randomInt(50, 5000);
      platformSpecificData.verified = seed % 7 === 0;
      break;
    case 'instagram':
      platformSpecificData.posts = randomInt(10, 500);
      platformSpecificData.verified = seed % 9 === 0;
      break;
    case 'facebook':
      platformSpecificData.friends = randomInt(50, 2000);
      platformSpecificData.groups = randomInt(1, 20);
      break;
    case 'linkedin':
      platformSpecificData.connections = randomInt(100, 3000);
      platformSpecificData.recommendations = randomInt(0, 30);
      break;
    default:
      // Default metadata
      platformSpecificData.posts = randomInt(10, 300);
  }
  
  return {
    displayName: username.charAt(0).toUpperCase() + username.slice(1),
    followers: randomInt(10, 10000),
    following: randomInt(10, 1000),
    creationDate: creationDate.toISOString().split('T')[0],
    bio: generateMockBio(username, platform),
    location: generateRandomLocation(),
    ...platformSpecificData
  };
};

/**
 * Generates mock bio text
 */
const generateMockBio = (username, platform) => {
  const bios = [
    `Official account of ${username}`,
    `${platform} enthusiast | Content creator`,
    `Digital marketing specialist | ${username}`,
    `${username} | Thoughts are my own`,
    `${platform} user since ${new Date().getFullYear() - 3}`,
    `Just sharing my journey | Follow for updates`,
    `${username} | Professional ${platform} user`,
    `Content creator | Influencer | ${username}`,
    `${username}'s official ${platform} account`,
    `Just here for the memes | ${username}`,
  ];
  
  const seed = username.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  return bios[seed % bios.length];
};

/**
 * Generates a random location
 */
const generateRandomLocation = () => {
  const locations = [
    'Mumbai, India',
    'Delhi, India',
    'Bangalore, India',
    'Chennai, India',
    'Hyderabad, India',
    'Kolkata, India',
    'Pune, India',
    'Ahmedabad, India',
    'Jaipur, India',
    'Lucknow, India',
    'Not specified',
  ];
  
  return locations[Math.floor(Math.random() * locations.length)];
};

/**
 * Generates pattern analysis based on scores
 */
const generatePatternAnalysis = (username, platform, scores) => {
  const { behaviorScore, languageScore, contentScore, temporalScore, networkScore } = scores;
  
  const patterns = [];
  
  // Posting Frequency Pattern
  if (temporalScore > 60) {
    patterns.push({
      type: 'Posting Frequency',
      description: 'Unusual posting patterns detected outside normal human behavior',
      score: temporalScore,
      insights: 'Account posts at consistent intervals suggesting automated behavior'
    });
  }
  
  // Content Repetition Pattern
  if (contentScore > 55) {
    patterns.push({
      type: 'Content Repetition',
      description: 'Similar content patterns across multiple posts',
      score: contentScore,
      insights: 'Templates or recycled content detected across timeline'
    });
  }
  
  // Temporal Anomalies Pattern
  if (temporalScore > 50) {
    patterns.push({
      type: 'Temporal Anomalies',
      description: 'Posting times inconsistent with claimed location',
      score: temporalScore,
      insights: 'Account claims to be in India but posts during Indian night hours'
    });
  }
  
  // Linguistic Analysis Pattern
  if (languageScore > 45) {
    patterns.push({
      type: 'Linguistic Analysis',
      description: 'Language patterns inconsistent with claimed identity',
      score: languageScore,
      insights: 'Hindi text shows machine translation patterns and syntax errors'
    });
  }
  
  // Network Behavior Pattern
  if (networkScore > 40) {
    patterns.push({
      type: 'Network Behavior',
      description: 'Unusual interaction patterns with other accounts',
      score: networkScore,
      insights: 'Coordinated engagement detected with cluster of similar accounts'
    });
  }
  
  // Ensure we have at least 2 patterns
  if (patterns.length < 2) {
    patterns.push({
      type: 'Account Activity',
      description: 'General account activity analysis',
      score: behaviorScore,
      insights: 'Some minor inconsistencies detected in account activity patterns'
    });
  }
  
  return patterns;
};

module.exports = {
  analyzeProfile
};
