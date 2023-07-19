import { configureStore, createSlice } from '@reduxjs/toolkit'

const todoSLice = createSlice({
  name: 'todo',
  initialState: {
    list: ['Fazer café', 'LImpar a geladeria', 'Estudar Redux']
  },
  reducers: {}
})

export const store = configureStore({
  reducer: {
    todo: todoSLice.reducer
  },
})