// maestrosRoutes.js
const express = require('express');
const router = express.Router();
const maestrosController = require('../controllers/maestrosController');

// Rutas para los maestros
router.post('/maestro', maestrosController.crear);
router.get('/maestro', maestrosController.listar);
router.get('/maestro/:id', maestrosController.obtenerPorId);
router.put('/maestro/:id', maestrosController.actualizar);
router.delete('/maestro/:id', maestrosController.eliminar);

module.exports = router;
