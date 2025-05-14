
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'default-jwt-secret-for-development-only';

// Middleware to authenticate JWT tokens
export const authenticateJWT = (req, res, next) => {
  // Get token from Authorization header
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }
  
  try {
    // Extract token from Bearer format
    const token = authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'Invalid token format.' });
    }
    
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Add user info to request
    req.user = decoded;
    
    // Check if user has admin role
    if (!req.user.roles || !req.user.roles.includes('admin')) {
      return res.status(403).json({ error: 'Access denied. Admin privileges required.' });
    }
    
    next();
  } catch (error) {
    console.error('JWT verification error:', error);
    return res.status(401).json({ error: 'Invalid token.' });
  }
};

// Generate JWT token for testing (in a real app, this would be part of the login process)
export const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, roles: user.roles },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
};
