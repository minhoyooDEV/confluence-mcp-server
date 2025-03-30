import { Router } from 'express';
import confluenceRoutes from './confluenceRoutes.js';

const router = Router();

// Confluence API 라우트
router.use('/', confluenceRoutes);

export { router as routes };
