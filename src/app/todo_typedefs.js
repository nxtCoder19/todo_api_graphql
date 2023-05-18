import { gql } from "apollo-server-express";

export const todoTypeDefs = gql`
  type Todo {
    id: ID
    name: String
    todo: String
  }

  type Query {
    getAllTodos: [Todo]
  }

  input TodoInput {
    name: String
    todo: String
  }

  type Mutation {
    createTodo(todo: TodoInput): Todo
  }
`;
