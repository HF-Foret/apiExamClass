const Estudiante = require('../models/Estudiante');

const crear = async (req, res) => {
    try {
        const { correo, identificacion, nombre, apellido, rol, estado } = req.body;
        const nuevoEstudiante = new Estudiante({ correo, identificacion, nombre, apellido, rol, estado });
        const estudiante = await nuevoEstudiante.save();
        res.json(estudiante);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const listar = async (req, res) => {
    try {
        const estudiantes = await Estudiante.find();
        res.json(estudiantes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const obtenerPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const estudiante = await Estudiante.findById(id);
        if (!estudiante) {
            res.status(404).json({ error: 'Estudiante no encontrado' });
        } else {
            res.json(estudiante);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const { correo, identificacion, nombre, apellido, rol, estado } = req.body;
        const estudiante = await Estudiante.findByIdAndUpdate(id, { correo, identificacion, nombre, apellido, rol, estado }, { new: true });
        if (!estudiante) {
            res.status(404).json({ error: 'Estudiante no encontrado' });
        } else {
            res.json(estudiante);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        const estudiante = await Estudiante.findByIdAndDelete(id);
        if (!estudiante) {
            res.status(404).json({ error: 'Estudiante no encontrado' });
        } else {
            res.json({ mensaje: 'Estudiante eliminado exitosamente' });
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
