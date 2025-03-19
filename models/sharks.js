const mongoose = require('mongoose');

const SharkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  character: { type: String, required: true },
});

module.exports = mongoose.model('Shark', SharkSchema);
