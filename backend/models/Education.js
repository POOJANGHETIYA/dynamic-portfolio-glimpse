const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  result: { type: String, required: true },
  timeline: { type: String, required: true },
  place: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Education', educationSchema);