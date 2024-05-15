const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

// Rutas para los cursos
router.post('/curso', async (req, res) => {
    try {
        await cursosController.crear(req, res);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/curso', async (req, res) => {
    try {
        await cursosController.listar(req, res);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/curso/:id', async (req, res) => {
    try {
        await cursosController.obtenerPorId(req, res);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/curso/:id', async (req, res) => {
    try {
        await cursosController.actualizar(req, res);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/curso/:id', async (req, res) => {
    try {
        await cursosController.eliminar(req, res);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
