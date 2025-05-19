
import { validationResult, check, param } from 'express-validator';

// Middleware to handle validation errors
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      error: 'Validation error',
      details: errors.array().map(err => ({ field: err.param, message: err.msg }))
    });
  }
  next();
};

// Profile analysis validation rules
export const validateProfileAnalysis = [
  check('username')
    .trim()
    .notEmpty().withMessage('Username is required')
    .isLength({ min: 2, max: 50 }).withMessage('Username must be between 2 and 50 characters'),
  check('platform')
    .trim()
    .notEmpty().withMessage('Platform is required')
    .isIn(['twitter', 'instagram', 'facebook', 'linkedin']).withMessage('Invalid platform'),
  handleValidationErrors
];

// Text analysis validation rules
export const validateTextAnalysis = [
  check('text')
    .trim()
    .notEmpty().withMessage('Text is required')
    .isLength({ min: 1, max: 5000 }).withMessage('Text must be between 1 and 5000 characters'),
  handleValidationErrors
];

// Report submission validation rules
export const validateReportSubmission = [
  check('username')
    .trim()
    .notEmpty().withMessage('Username is required')
    .isLength({ min: 2, max: 50 }).withMessage('Username must be between 2 and 50 characters'),
  check('platform')
    .trim()
    .notEmpty().withMessage('Platform is required')
    .isIn(['twitter', 'instagram', 'facebook', 'linkedin']).withMessage('Invalid platform'),
  check('reason')
    .trim()
    .notEmpty().withMessage('Reason is required')
    .isLength({ min: 10, max: 1000 }).withMessage('Reason must be between 10 and 1000 characters'),
  check('screenshotUrl')
    .optional()
    .isURL().withMessage('Screenshot URL must be a valid URL'),
  handleValidationErrors
];

// Alert validation rules
export const validateAlertCreation = [
  check('username')
    .trim()
    .notEmpty().withMessage('Username is required'),
  check('platform')
    .trim()
    .notEmpty().withMessage('Platform is required')
    .isIn(['twitter', 'instagram', 'facebook', 'linkedin']).withMessage('Invalid platform'),
  check('alertLevel')
    .trim()
    .notEmpty().withMessage('Alert level is required')
    .isIn(['low', 'medium', 'high']).withMessage('Invalid alert level'),
  check('profileData')
    .notEmpty().withMessage('Profile data is required'),
  handleValidationErrors
];

// Alert ID validation
export const validateAlertId = [
  param('id')
    .isMongoId().withMessage('Invalid alert ID format'),
  handleValidationErrors
];

// Pagination validation
export const validatePagination = [
  check('page')
    .optional()
    .isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  check('limit')
    .optional()
    .isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100'),
  handleValidationErrors
];

// PDF report generation validation
export const validateReportGeneration = [
  check('username')
    .trim()
    .notEmpty().withMessage('Username is required'),
  check('platform')
    .trim()
    .notEmpty().withMessage('Platform is required'),
  check('profileMetadata')
    .notEmpty().withMessage('Profile metadata is required'),
  check('scores')
    .notEmpty().withMessage('Scores are required'),
  handleValidationErrors
];
