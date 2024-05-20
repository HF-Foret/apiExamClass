const express = require('express');
const router = express.Router();
const estudiantesController = require("../controllers/estudiantesController");

// Rutas para los estudiantes
router.post('/estudiante', estudiantesController.crear);
router.get('/estudiante', estudiantesController.listar);
router.get('/estudiante/:id', estudiantesController.obtenerPorId);
router.put('/estudiante/:id', estudiantesController.actualizar);
router.delete('/estudiante/:id', estudiantesController.eliminar);

module.exports = router;
