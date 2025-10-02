import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Route demo
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello Express + TypeScript 🚀' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
