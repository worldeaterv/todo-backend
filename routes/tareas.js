const { Router } = require("express");
const { check } = require("express-validator");

const {
  getTareas,
  getTareaById,
  postTarea,
  deleteTarea,
  deleteAllTasksCompleted,
  actualizarTareaById,
  estadoTarea,
} = require("../controllers/tareas.controller");
const {
  esEstadoValido,
  existeTareaPorId,
} = require("../helpers/db-validators");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.get("/mis-tareas", getTareas);
router.get(
  "/tarea/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeTareaPorId),
    validarCampos,
  ],
  getTareaById
);

router.post(
  "/crear-tarea",
  [
    check("titulo", "El titulo no puede estar vacio").not().isEmpty(),
    check("descripcion", "La descripción no puede estar vacia").not().isEmpty(),
    check("estado").optional().custom(esEstadoValido),
    validarCampos,
  ],
  postTarea
);

router.delete(
  "/borrar-tarea/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeTareaPorId),
    validarCampos,
  ],
  deleteTarea
);

router.delete("/borrar-tareas-completadas", deleteAllTasksCompleted);

router.patch(
  "/editar-tarea/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeTareaPorId),
    validarCampos,
  ],
  actualizarTareaById
);

router.patch(
  "/estado-tarea/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeTareaPorId),
    validarCampos,
  ],
  estadoTarea
);
module.exports = router;
