import { Router } from 'express';
import { getAllReviews,postReview } from '../controllers/reviews.js';
const router = Router();


router.get( '/',getAllReviews)
router.post( '/', postReview)
export default router;
