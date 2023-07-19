import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

type Payload = {
  payload: string;
};

const todoSlice = createSlice({
  name: "todo",
  initialState: ["Fazer café", "Limpar a geladeria", "Estudar Redux"],
  reducers: {
    add: (state, action: Payload) => {
      state.push(action.payload);
    },
    remove: (state, action: Payload) => {
      const todoIndex = state.indexOf(action.payload);
      state.splice(todoIndex, 1);
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const { add, remove } = todoSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
