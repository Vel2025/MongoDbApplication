import express from 'express';
import Language from '../models/Language.mjs';

const router = express.Router();

// GET all languages
router.get('/', async (req, res) => {
  try {
    const languages = await Language.find();
    res.json(languages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new language
router.post('/', async (req, res) => {
  try {
    const language = new Language(req.body);
    await language.save();
    res.status(201).json(language);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;