const { Schema, model } = require("mongoose");

const EstadoSchema = new Schema({
  estado: {
    type: String,
    required: [true, "El estado es obligatorio"],
    default: "pendiente",
  },
});

module.exports = model("Estado", EstadoSchema);
