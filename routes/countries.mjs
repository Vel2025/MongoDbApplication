import express from 'express';
import Country from '../models/Country.mjs';

const router = express.Router();

// GET all countries
router.get('/', async (req, res) => {
  try {
    const countries = await Country.find()
      .populate('continent')
      .populate('languages');
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single country by ID
router.get('/:id', async (req, res) => {
  try {
    const country = await Country.findById(req.params.id)
      .populate('continent')
      .populate('languages');
    if (!country) {
      return res.status(404).json({ error: 'Country not found' });
    }
    res.json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new country
router.post('/', async (req, res) => {
  try {
    const country = new Country(req.body);
    await country.save();
    const populatedCountry = await Country.findById(country._id)
      .populate('continent')
      .populate('languages');
    res.status(201).json(populatedCountry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PATCH update country
router.patch('/:id', async (req, res) => {
  try {
    const country = await Country.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    ).populate('continent').populate('languages');
    if (!country) {
      return res.status(404).json({ error: 'Country not found' });
    }
    res.json(country);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE country
router.delete('/:id', async (req, res) => {
  try {
    const country = await Country.findByIdAndDelete(req.params.id);
    if (!country) {
      return res.status(404).json({ error: 'Country not found' });
    }
    res.json({ message: 'Country deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Test validation error
router.post('/test-validation', async (req, res) => {
  try {
    const invalidCountry = new Country({
      ...req.body,
      population: 100.5, // Should trigger validation error
    });
    await invalidCountry.save();
    res.status(201).json(invalidCountry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;