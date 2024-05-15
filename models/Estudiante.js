const { Schema, model } = require("mongoose");

const crearEstudianteModel = async () => {
    const EstudianteSchema = new Schema({
        nombre: {
            type: String,
            require:true
        },
        apellido: {
            type: String,
            require:true
        },
        edad: {
            type: Number,
            require:true
        },
        cursos: [{
            type: Schema.Types.ObjectId,
            ref: 'Curso'
        }]
    },{ timestamps: true });

    const EstudianteModel = model("Estudiante", EstudianteSchema);
    return EstudianteModel;
}

module.exports = crearEstudianteModel;
