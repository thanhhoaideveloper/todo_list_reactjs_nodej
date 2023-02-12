const Todo = require("../models/todo.model");
const { isEmpty } = require("../utils");

const findAll = async (req, res) => {
  try {
    const params = req.query.isCompleted ? req.query : {};
    const todos = await Todo.find(params);
    res.status(200).send(todos);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

const findOne = async (req, res) => {
  try {
    const query = { _id: req.params.id };
    const todo = await Todo.findById(query);

    res.status(200).send(todo);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

const create = async (req, res) => {
  try {
    const formData = req.body;
    const newTodo = new Todo(formData);
    await newTodo.save();

    res.status(201).send(newTodo);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      res.status(404).send({ message: "Todo Not Found!!" });
      return;
    }
    await todo.delete();

    res.status(200).send({ message: "Delete Successfully!" });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const formData = req.body;
    const { id } = req.params;
    const updateTodo = await Todo.findByIdAndUpdate(id, formData, {
      new: true,
    });

    res.status(200).send(updateTodo);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

const clearCompleted = async (req, res) => {
  try {
    await Todo.deleteMany({ isCompleted: true });
    res.status(200).send({ message: "Delete successfully" });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

module.exports = {
  findAll,
  findOne,
  create,
  updateTodo,
  deleteTodo,
  clearCompleted,
};
