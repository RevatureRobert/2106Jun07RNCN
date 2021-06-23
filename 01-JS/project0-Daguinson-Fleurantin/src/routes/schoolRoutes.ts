import express from 'express';
import * as schoolController from '../controllers/schoolControllers';

export const router = express.Router();

router
  .route('/')
  .get(schoolController.getAllSchools)
  .post(schoolController.addSchool);

router
  .route('/:id')
  .get(schoolController.getSchool)
  .put(schoolController.updateSchool)
  .delete(schoolController.deleteSchool);
