const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: [{
    name: { type: String, required: true },
    level: { type: Number, required: true }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);