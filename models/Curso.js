const { Schema, model } = require("mongoose");

const crearCursoModel = async () => {
    const CursoSchema = new Schema({
        nombre: {
            type: String,
            required: true
        },
        maestro: {
            type: Schema.Types.ObjectId,
            ref: 'Maestro'
        },
        descripcion: {
            type: String,
            required: true
        }
    }, { timestamps: true });

    const CursoModel = model("Curso", CursoSchema);
    return CursoModel;
}

module.exports = crearCursoModel;
