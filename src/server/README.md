
# Profile Analysis API

This is a REST API for analyzing social media profiles to detect suspicious behavior patterns.

## Setup and Running

1. Install dependencies:
   ```
   npm install
   ```

2. Start the server:
   ```
   npm run server
   ```

3. The server will run on http://localhost:3001 by default (or the port specified in your environment variables)

## API Endpoints

### POST /api/analyze-profile

Analyzes a social media profile for suspicious behavior patterns.

**Request Body:**
```json
{
  "username": "exampleuser",
  "platform": "twitter"
}
```

Supported platforms: twitter, instagram, facebook, linkedin

**Response:**
```json
{
  "username": "exampleuser",
  "platform": "twitter",
  "analysisDate": "2025-05-02T12:34:56.789Z",
  "profileMetadata": {
    "displayName": "Exampleuser",
    "followers": 1234,
    "following": 567,
    "creationDate": "2023-01-01",
    "bio": "Twitter enthusiast | Content creator",
    "location": "Mumbai, India",
    "tweets": 890,
    "verified": false
  },
  "scores": {
    "behaviorScore": 65,
    "languageScore": 45,
    "contentScore": 70,
    "temporalScore": 80,
    "networkScore": 55
  },
  "alertLevel": "medium",
  "patterns": [
    {
      "type": "Posting Frequency",
      "description": "Unusual posting patterns detected outside normal human behavior",
      "score": 80,
      "insights": "Account posts at consistent intervals suggesting automated behavior"
    },
    {
      "type": "Content Repetition",
      "description": "Similar content patterns across multiple posts",
      "score": 70,
      "insights": "Templates or recycled content detected across timeline"
    }
  ]
}
```

## Error Handling

The API returns appropriate HTTP status codes and error messages for various scenarios:

- 400 Bad Request: Missing required parameters or invalid platform
- 500 Internal Server Error: Server-side issues during analysis
