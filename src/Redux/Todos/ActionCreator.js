import {
  ADDED,
  ALLCOMPLETED,
  REMOVE,
  TOGGLED,
  CLEARCOMPLETED,
  COLORSELECTE,
} from "./ActionsType";

// all todo action

export const addedTodo = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const removeTodo = (todoId) => {
  return {
    type: REMOVE,
    payload: todoId,
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
export const colouSelect = (todoId, color) => {
  return {
    type: COLORSELECTE,
    payload: {
      todoId,
      color,
    },
  };
};
export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};