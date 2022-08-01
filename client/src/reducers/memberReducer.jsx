import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCount } from '../features/counter/counterAPI';
//import axios from 'axios';

const initialState = {
    value: 0,
    status: 'idle',
}

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount) => {
      const response = await fetchCount(amount);
     
      return response.data;
    }
);

//(pending: 비동기 호출전, fulfilled: 비동기 호출성공, rejected: 비동기 호출실패)
const memberReducer = createSlice({
    name:"member",
    initialState,
    read:(state,action)=>{
      console.log(incrementAsync);
    },
    extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
})
export const { read, reset } = memberReducer.actions;
export default memberReducer.reducer;



