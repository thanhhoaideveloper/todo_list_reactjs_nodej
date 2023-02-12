const express = require("express");
const router = express.Router();

const {
  findAll,
  findOne,
  create,
  updateTodo,
  deleteTodo,
  clearCompleted,
} = require("../controllers/todo.controller");

router.get("", findAll);
router.get("/clear-completed", clearCompleted);
router.get("/:id", findOne);
router.post("", create);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
