import express from 'express';
import { router as studentRouter } from './routes/studentRoutes';
import { router as schoolRouter } from './routes/schoolRoutes';

const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/student', studentRouter);
app.use('/api/v1/school', schoolRouter);

app.listen(port, () => {
  console.log('Hello you');
});
