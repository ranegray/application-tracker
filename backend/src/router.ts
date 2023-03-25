import { Router } from 'express';
import { body, validationResult } from 'express-validator'

const router = Router();

// Applications
router.get('/application', (req, res) => {
    res.json({'message':'hello'})
})
router.get('/application/:id', () => {})
router.put('/application/:id', body('jobTitle').isString(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
})
router.post('/application', (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
})
router.delete('/application/:id', () => {})

export default router;