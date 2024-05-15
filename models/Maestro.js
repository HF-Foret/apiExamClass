const { Schema, model } = require("mongoose");

const crearMaestroModel = async () => {
    const MaestroSchema = new Schema({
        nombre: {
            type: String,
            required: true
        },
        apellido: {
            type: String,
            required: true
        },
        edad: {
            type: Number,
            required: true
        },
        cursos: [{
            type: Schema.Types.ObjectId,
            ref: 'Curso'
        }]
    },{ timestamps: true });

    const MaestroModel = model("Maestro", MaestroSchema);
    return MaestroModel;
}

module.exports = crearMaestroModel;
