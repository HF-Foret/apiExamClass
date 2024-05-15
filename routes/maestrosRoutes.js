const express = require('express');
const router = express.Router();
const maestrosController = require('../controllers/maestrosController');

// Rutas para los maestros
router.post('/maestro', async (req, res) => {
    try {
        await maestrosController.crear(req, res);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/maestro', async (req, res) => {
    try {
        await maestrosController.listar(req, res);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/maestro/:id', async (req, res) => {
    try {
        await maestrosController.obtenerPorId(req, res);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/maestro/:id', async (req, res) => {
    try {
        await maestrosController.actualizar(req, res);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/maestro/:id', async (req, res) => {
    try {
        await maestrosController.eliminar(req, res);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
