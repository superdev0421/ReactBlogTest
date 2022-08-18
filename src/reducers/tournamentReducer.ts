import { createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

import { IInitialState } from '../interface/interfaces'
import { fetchStatus } from '../types/types';
import  {API_TOURNAMENTS_URL} from '../constants/api'



const initialState: IInitialState = {
    tournaments: [],
    status: fetchStatus.IDLE
  };

export const fetchTournaments = createAsyncThunk('fetchTournaments', async () => {
  const res = await axios.get(API_TOURNAMENTS_URL);
  console.log(res.data);
  return res.data;
})

const tournamentSlice = createSlice({
    name: 'tournaments',
    initialState,
    reducers: {
      
    },
    extraReducers(builder) {
      builder
        .addCase(fetchTournaments.pending, state => {
          state.status = fetchStatus.LOADING
        })
        .addCase(fetchTournaments.fulfilled, (state, action) => {
          state.status = fetchStatus.COMPLETED;
          state.tournaments = state.tournaments.concat(action.payload.data)
        })
        .addCase(fetchTournaments.rejected, state => {
          state.status = fetchStatus.FAILED
        })
    }



});

export const {

} = tournamentSlice.actions


export default tournamentSlice.reducer;