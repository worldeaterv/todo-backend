const Estado = require("../models/estado-tarea");
const Tarea = require("../models/tarea");

const esEstadoValido = async (estado = "") => {
  const existeEstado = await Estado.findOne({ estado });
  if (!existeEstado) {
    throw new Error(`El estado: ${estado} no esta registrado en la BD.`);
  }
};

const existeTareaPorId = async (id) => {
  const existeTarea = await Tarea.findById(id);

  if (!existeTarea) {
    throw new Error(`La tarea con el id: ${id} no existe.`);
  }
};

module.exports = {
  esEstadoValido,
  existeTareaPorId,
};
