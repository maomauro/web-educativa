const mongoose = require('mongoose');

const PerfilSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true }, // admin, moderador, usuario
  permisos: [{ type: String }], // Ejemplo: ["crear_materias", "reportes", ...]
  descripcion: { type: String },
  estado: { type: Boolean, default: true }
});

module.exports = mongoose.model('Perfil', PerfilSchema); 