const express = require('express');
const router = express.Router();
const estudiantesController = require("../controllers/estudiantesController");

// Rutas para los estudiantes
router.post('/estudiante', async (req, res) => {
    try {
        await estudiantesController.crear(req, res);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/estudiante', async (req, res) => {
    try {
        await estudiantesController.listar(req, res);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/estudiante/:id', async (req, res) => {
    try {
        await estudiantesController.obtenerPorId(req, res);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/estudiante/:id', async (req, res) => {
    try {
        await estudiantesController.actualizar(req, res);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/estudiante/:id', async (req, res) => {
    try {
        await estudiantesController.eliminar(req, res);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
