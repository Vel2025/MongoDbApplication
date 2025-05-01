import mongoose from 'mongoose';
import Country from '../models/Country.mjs';
import Continent from '../models/Continent.mjs';
import Language from '../models/Language.mjs';

const populateData = async () => {
  try {
    // Clear existing data
    await Country.deleteMany({});
    await Continent.deleteMany({});
    await Language.deleteMany({});

    // Create continents
    const continents = await Continent.insertMany([
      { name: 'Africa' },
      { name: 'Asia' },
      { name: 'Australia' },
      { name: 'Europe' },
      { name: 'North America' },
      { name: 'South America' },
    ]);

    // Create languages
    const languages = await Language.insertMany([
      { name: 'English' },
      { name: 'Spanish' },
      { name: 'French' },
      { name: 'Portuguese' },
      { name: 'Swahili' },
      { name: 'Japanese' },
      { name: 'German' },
    ]);

    // Create countries
    await Country.insertMany([
      {
        name: 'Brazil',
        continent: continents.find(c => c.name === 'South America')._id,
        capital: 'Brasília',
        population: 212559417,
        languages: [languages.find(l => l.name === 'Portuguese')._id],
      },
      {
        name: 'Japan',
        continent: continents.find(c => c.name === 'Asia')._id,
        capital: 'Tokyo',
        population: 125360000,
        languages: [languages.find(l => l.name === 'Japanese')._id],
      },
      {
        name: 'Germany',
        continent: continents.find(c => c.name === 'Europe')._id,
        capital: 'Berlin',
        population: 83240525,
        languages: [languages.find(l => l.name === 'German')._id],
      },
      {
        name: 'Kenya',
        continent: continents.find(c => c.name === 'Africa')._id,
        capital: 'Nairobi',
        population: 53771296,
        languages: [
          languages.find(l => l.name === 'English')._id,
          languages.find(l => l.name === 'Swahili')._id,
        ],
      },
      {
        name: 'Canada',
        continent: continents.find(c => c.name === 'North America')._id,
        capital: 'Ottawa',
        population: 38929902,
        languages: [
          languages.find(l => l.name === 'English')._id,
          languages.find(l => l.name === 'French')._id,
        ],
      },
      {
        name: 'Australia',
        continent: continents.find(c => c.name === 'Australia')._id,
        capital: 'Canberra',
        population: 25687041,
        languages: [languages.find(l => l.name === 'English')._id],
      },
    ]);

    console.log('Sample data populated successfully');
  } catch (error) {
    console.error('Error populating sample data:', error);
  }
};

export default populateData;