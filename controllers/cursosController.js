const Curso = require('../models/Curso');

const crear = async (req, res) => {
    try {
        const { nombre, descripcion, maestro } = req.body;
        const nuevoCurso = new Curso({ nombre, descripcion, maestro });
        const curso = await nuevoCurso.save();
        res.json(curso);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const listar = async (req, res) => {
    try {
        const cursos = await Curso.find();
        res.json(cursos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const obtenerPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const curso = await Curso.findById(id);
        if (!curso) {
            res.status(404).json({ error: 'Curso no encontrado' });
        } else {
            res.json(curso);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, maestro } = req.body;
        const curso = await Curso.findByIdAndUpdate(id, { nombre, descripcion, maestro }, { new: true });
        if (!curso) {
            res.status(404).json({ error: 'Curso no encontrado' });
        } else {
            res.json(curso);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        const curso = await Curso.findByIdAndDelete(id);
        if (!curso) {
            res.status(404).json({ error: 'Curso no encontrado' });
        } else {
            res.json({ mensaje: 'Curso eliminado exitosamente' });
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
