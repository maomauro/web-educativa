const mongoose = require('mongoose');

const CalificacionSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  videoId: { type: String, required: true }, // ID de YouTube
  calificacion: { type: Number, min: 1, max: 5, required: true },
  comentario: { type: String },
  fecha: { type: Date, default: Date.now },
  estado: { type: String, default: 'activo' }
});

// Índice único para evitar calificaciones duplicadas por usuario y video
CalificacionSchema.index({ usuarioId: 1, videoId: 1 }, { unique: true });

module.exports = mongoose.model('Calificacion', CalificacionSchema); 