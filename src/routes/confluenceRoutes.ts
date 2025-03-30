import { Router } from 'express';
import * as confluenceController from '../controllers/confluenceController.js';

const router = Router();

// Space routes
router.get('/spaces', confluenceController.getSpaces);
router.get('/spaces/:spaceKey/pages', confluenceController.getPagesInSpace);

// Page routes
router.get('/pages/:pageId', confluenceController.getPageById);
router.post('/pages', confluenceController.createPage);
router.put('/pages/:pageId', confluenceController.updatePage);

export default router;
