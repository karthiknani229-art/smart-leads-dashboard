import express from 'express';

import {
  getLeads,
  createLead,
  updateLead,
  deleteLead,
  importLeads,
} from '../controllers/lead.controller';

import {
  protect,
  authorizeRoles,
} from '../middleware/auth.middleware';

const router = express.Router();

router.get(
  '/',
  protect,
  getLeads
);

router.post(
  '/',
  protect,
  createLead
);

router.post(
  '/import',
  protect,
  importLeads
);

router.put(
  '/:id',
  protect,
  updateLead
);

router.delete(
  '/:id',
  protect,
  authorizeRoles('admin'),
  deleteLead
);

export default router;