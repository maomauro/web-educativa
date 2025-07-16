const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  perfilId: { type: mongoose.Schema.Types.ObjectId, ref: 'Perfil', required: true },
  estado:   { type: String, default: 'activo' },
  fechaRegistro: { type: Date, default: Date.now },
  ultimoAcceso:  { type: Date }
});

module.exports = mongoose.model('Usuario', UsuarioSchema); 