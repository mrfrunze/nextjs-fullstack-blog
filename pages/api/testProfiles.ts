import prisma from "../../utils/db"
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      const { name } = req.body;
      try {
        const newProfile = await prisma.testProfile.create({
          data: { name },
        });
        res.status(201).json(newProfile);
      } catch (error) {
        res.status(500).json({ error: "Ошибка при создании профиля" });
      }
    } else if (req.method === 'GET') {
      try {
        const profiles = await prisma.testProfile.findMany();
        res.status(200).json(profiles);
      } catch (error) {
        res.status(500).json({ error: "Ошибка при получении профилей" });
      }
    } else {
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  