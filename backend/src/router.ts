import { Router } from 'express';
import { body, validationResult } from 'express-validator'
import { createApplication, deleteApplication, getApplications, getOneApplication, updateApplication } from './handlers/applications';

const router = Router();

// Applications
router.get('/application', getApplications)
router.get('/application/:id', getOneApplication)
router.put('/application/:id', 
    body('jobTitle').optional().isString(),
    body('companyName').optional().isString(),
    body('status').optional().isIn(['Saved', 'Applied', 'InterviewOffer', 'JobOffer', 'Rejected']),
    body('contact').optional().isString(),
    body('linkToApplication').optional().isURL(),
    body('dateApplied').optional().isString(),
    body('notes').optional().isString().isLength({max: 140}),
    (req, res) => {
        const errors = validationResult(req);

        updateApplication(req, res)

        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
    })
router.post('/application', 
    body('jobTitle').isString(),
    body('companyName').isString(),
    body('contact').optional().isString(),
    body('linkToApplication').optional().isURL(),
    body('dateApplied').optional().isString(),
    body('notes').optional().isString().isLength({max: 140}),
    (req, res) => {
        const errors = validationResult(req);

        createApplication(req, res)

        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
    })
router.delete('/application/:id', deleteApplication)

export default router;