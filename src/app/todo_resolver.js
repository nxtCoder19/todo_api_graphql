import { graphqltodoDomain } from "../domain/todo_domain.js";

export const todoResolver = {
  Query: {
    getAllTodos: async () => {
      const allTodos = await graphqltodoDomain.listofTodos();
      return allTodos;
    },
  },

  Mutation: {
    createTodo: async (parent, args, context, info) => {
      const { name, todo } = args.todo;
      const addTodo = await graphqltodoDomain.addTodo(name, todo);
      return addTodo;
    },
  },
};
