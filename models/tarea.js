const { Schema, model } = require("mongoose");

const TareaSchema = new Schema({
  titulo: {
    type: String,
    required: [true, "El titulo es obligatorio"],
  },
  descripcion: {
    type: String,
    required: [true, "La descripción es obligatoria"],
  },
  fecha_creacion: {
    type: Date,
    default: Date.now,
  },
  fecha_completada: {
    type: Date,
    default: null,
  },
  estado: {
    type: String,
    required: true,
    enum: ["pendiente", "completada"],
    default: "pendiente",
  },
});

TareaSchema.methods.toJSON = function () {
  const { __v, ...tarea } = this.toObject();
  return tarea;
};

module.exports = model("Tarea", TareaSchema);
