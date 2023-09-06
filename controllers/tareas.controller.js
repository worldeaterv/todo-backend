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

const putTarea = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put api - controlador",
    id,
  });
};

const postTarea = async (req, res = response) => {
  const { titulo, descripcion, estado = "pendiente" } = req.body;

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

  res.json({
    msg: "Tarea borrado con exito!",
    tarea,
  });
};

const patchTarea = async (req = request, res = response) => {
  const { id } = req.params;
  const { titulo, descripcion, estado } = req.body;

  const tareaActualizada = await Tarea.findByIdAndUpdate(
    id,
    {
      titulo,
      descripcion,
      estado,
    },
    { new: true }
  );

  res.json({
    msg: "Tarea actualizada con exito!",
    tareaActualizada,
  });
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
    msg: "Estado de tarea cambiado correctamente",
    tarea: tareaActualizada,
  });
};

module.exports = {
  getTareas,
  putTarea,
  postTarea,
  deleteTarea,
  patchTarea,
  estadoTarea,
};
