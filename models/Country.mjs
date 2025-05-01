import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  continent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Continent',
    required: true,
  },
  capital: {
    type: String,
    required: true,
    trim: true,
  },
  population: {
    type: Number,
    required: true,
    min: [0, 'Population cannot be negative'],
  },
  languages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Language',
  }],
}, {
  timestamps: true,
});

// Indexes for frequently queried fields

countrySchema.index({ continent: 1 }); // For continent-based queries

// MongoDB validation (database-side)
countrySchema.pre('save', async function(next) {
  // Ensure population is a whole number
  if (!Number.isInteger(this.population)) {
    throw new Error('Population must be a whole number');
  }
  next();
});

export default mongoose.model('Country', countrySchema);