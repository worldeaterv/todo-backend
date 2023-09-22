const { response, request } = require("express");
const Tarea = require("../models/tarea");

const getTareas = async (req = request, res = response) => {
  const tareas = await Tarea.find();

  if (tareas.length <= 0) {
    return res.status(202).json({
      msg: "Actualmente no tienes tareas.",
    });
  }

  res.status(200).json({
    msg: "Obtener todas las tareas completado!",
    tareas,
  });
};

const getTareaById = async (req = request, res = response) => {
  const { id } = req.params;

  const tarea = await Tarea.findById(id);

  res.status(200).json(tarea);
};

const postTarea = async (req, res = response) => {
  const { titulo, descripcion, estado } = req.body;

  const nuevaTarea = new Tarea({
    titulo,
    descripcion,
    estado,
  });

  await nuevaTarea.save();

  res.json({
    msg: "Tarea registrada con exito!",
    nuevaTarea,
  });
};

const deleteTarea = async (req, res = response) => {
  const { id } = req.params;
  const tarea = await Tarea.findOneAndDelete(id);

  res.json(tarea);
};

const deleteAllTasksCompleted = async (req, res) => {
  const tareas = await Tarea.deleteMany({ estado: "completada" });

  res.json(tareas);
};

const actualizarTareaById = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion, estado } = req.body;

    const tareaExistente = await Tarea.findById(id);

    let fecha_completada = tareaExistente.fecha_completada;

    if (estado === "completada" && tareaExistente.estado !== "completada") {
      fecha_completada = new Date();
    } else if (estado === "pendiente" && tareaExistente.fecha_completada) {
      fecha_completada = null;
    }

    const tareaActualizada = await Tarea.findByIdAndUpdate(
      id,
      {
        titulo,
        descripcion,
        estado,
        fecha_completada,
      },
      { new: true }
    );

    res.json(tareaActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error en el servidor" });
  }
};

const estadoTarea = async (req = request, res = response) => {
  const { id } = req.params;

  const tarea = await Tarea.findById(id);
  const nuevoEstado = tarea.estado === "pendiente" ? "completada" : "pendiente";
  const updateObj = { estado: nuevoEstado };

  if (nuevoEstado === "completada") {
    updateObj.fecha_completada = new Date();
  } else {
    updateObj.fecha_completada = null;
  }

  const tareaActualizada = await Tarea.findByIdAndUpdate(id, updateObj, {
    new: true,
  });

  res.json({
    tarea: tareaActualizada,
  });
};

module.exports = {
  getTareas,
  getTareaById,
  postTarea,
  deleteTarea,
  deleteAllTasksCompleted,
  actualizarTareaById,
  estadoTarea,
};
