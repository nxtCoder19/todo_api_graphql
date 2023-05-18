import mongoose from "mongoose";
import { graphqlTodoDb } from "../pkg/mongo/connect.js";

const graphqlTodoSchema = new mongoose.Schema({
  name: { type: String },
  todo: { type: String },
});

const graphqlTodoModel = graphqlTodoDb.model(
  "graphqlListTodo",
  graphqlTodoSchema
);

const addTodo = async (name, todo) => {
  const addTodo = await graphqlTodoModel.create({ name, todo });
  return addTodo;
};

const listofTodos = async () => {
  const todos = await graphqlTodoModel.find();
  return todos;
};

export const graphqltodoDomain = {
  addTodo,
  listofTodos,
};
