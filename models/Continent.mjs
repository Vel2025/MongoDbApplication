import mongoose from 'mongoose';

const continentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
}, {
  timestamps: true,
});

// Index for name searches

export default mongoose.model('Continent', continentSchema);