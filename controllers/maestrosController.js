const Maestro = require('../models/Maestro');

const crear = async (req, res) => {
    try {
        const { nombre, apellido, email, cursos } = req.body;
        const nuevoMaestro = new Maestro({ nombre, apellido, email, cursos });
        const maestro = await nuevoMaestro.save();
        res.json(maestro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const listar = async (req, res) => {
    try {
        const maestros = await Maestro.find();
        res.json(maestros);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const obtenerPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const maestro = await Maestro.findById(id);
        if (!maestro) {
            res.status(404).json({ error: 'Maestro no encontrado' });
        } else {
            res.json(maestro);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, email, cursos } = req.body;
        const maestro = await Maestro.findByIdAndUpdate(id, { nombre, apellido, email, cursos }, { new: true });
        if (!maestro) {
            res.status(404).json({ error: 'Maestro no encontrado' });
        } else {
            res.json(maestro);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        const maestro = await Maestro.findByIdAndDelete(id);
        if (!maestro) {
            res.status(404).json({ error: 'Maestro no encontrado' });
        } else {
            res.json({ mensaje: 'Maestro eliminado exitosamente' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    crear,
    listar,
    obtenerPorId,
    actualizar,
    eliminar
};
