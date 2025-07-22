import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Получить всё оборудование
app.get('/api/equipment', async (req, res) => {
  const equipment = await prisma.equipment.findMany();
  res.json(equipment);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
