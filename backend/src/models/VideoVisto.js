const mongoose = require('mongoose');

const VideoVistoSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  videoId: { type: String, required: true }, // ID de YouTube
  fechaVista: { type: Date, default: Date.now }
});

module.exports = mongoose.model('VideoVisto', VideoVistoSchema); 