const mongoose = require('mongoose');

const MateriaSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  descripcion: { type: String },
  estado: { type: String, default: 'activo' },
  fechaCreacion: { type: Date, default: Date.now },
  creadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

module.exports = mongoose.model('Materia', MateriaSchema); 