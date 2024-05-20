// cursosRoutes.js
const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

// Rutas para los cursos
router.post('/curso', cursosController.crear);
router.get('/curso', cursosController.listar);
router.get('/curso/:id', cursosController.obtenerPorId);
router.put('/curso/:id', cursosController.actualizar);
router.delete('/curso/:id', cursosController.eliminar);

module.exports = router;
