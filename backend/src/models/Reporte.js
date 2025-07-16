const mongoose = require('mongoose');

const ReporteSchema = new mongoose.Schema({
  tipo: { type: String, required: true },
  parametros: { type: Object },
  fechaGeneracion: { type: Date, default: Date.now },
  datos: { type: Object },
  generadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

module.exports = mongoose.model('Reporte', ReporteSchema); 