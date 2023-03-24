import { Router } from 'express';

const router = Router();

// Applications
router.get('/application', (req, res) => {
    res.json({'message':'hello'})
})
router.get('/application/:id', () => {})
router.put('/application/:id', () => {})
router.post('/application', () => {})
router.delete('/application/:id', () => {})

export default router;