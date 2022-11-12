import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", title: "Belajar React", completed: false },
  { id: "1", title: "Belejar JavaScript", completed: false },
  { id: "2", title: "Belajar Redux", completed: false },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
      }
    },
    completedTodo: (state, action) => {
      // Find the todo item matching the given ID
      const todo = state.find((todo) => todo.id === action.payload.id);
      // If the todo item was found, toggle its `completed` flag
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo, completedTodo } =
  todosSlice.actions;
export const todoReducer = todosSlice.reducer;
