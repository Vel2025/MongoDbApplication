import express from 'express';
import Continent from '../models/Continent.mjs';

const router = express.Router();

// GET all continents
router.get('/', async (req, res) => {
  try {
    const continents = await Continent.find();
    res.json(continents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new continent
router.post('/', async (req, res) => {
  try {
    const continent = new Continent(req.body);
    await continent.save();
    res.status(201).json(continent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;