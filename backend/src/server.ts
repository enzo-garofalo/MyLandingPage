import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { type Request, type Response, Router } from 'express';

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
router.post('/student/submit-form', (req: Request, res: Response) => {
  res.json({ message: 'Hello, world!' });
});


server.use(router); 
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});