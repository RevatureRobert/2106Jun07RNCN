import express, { Router } from 'express';
import * as studentController from '../controllers/studentController';

export const router: Router = express.Router();

router
  .route('/')
  .get(studentController.getAllStudents)
  .post(studentController.addStudent);

router
  .route('/:id')
  .get(studentController.getStudent)
  .put(studentController.updateStudent)
  .delete(studentController.deleteStudent);
