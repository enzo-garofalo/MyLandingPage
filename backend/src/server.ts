import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { type Request, type Response, Router } from 'express';
import { connectToDatabase } from './models/studentsForm.js';
import { StudentFormManager } from './routes/studentFormHandler.js';

const port = process.env.PORT || 3000;

// Create Express server
export const server = express();

// Middleware
server.use(bodyParser.json());
server.use(cors());

// Sample route
const router = Router();
router.get('/', (req: Request, res: Response) => {
  res.statusCode = 403;
  res.send('Forbidden');
});

router.get('/health', (req: Request, res: Response) => {
  res.json({ message: 'Hello, world!' });
});

// Student Form Feature routes
router.post('/student/submit-form', StudentFormManager.SubmitAnswer);



server.use(router); 
connectToDatabase()
  .then(() => {
    server.listen(port, () => {
      console.log(`✅ Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to database", err);
    process.exit(1);
  });