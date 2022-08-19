/**
==========================================
 Title:  Tournament Item
 Author: Edward
 Date:   18 August 2022
==========================================
 */

//External Dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Internal Dependencies
import { API_TOURNAMENTS_URL } from '../constants/api';

//type Dependencies
import { IInitialState } from '../interface/interfaces';
import { fetchStatus } from '../types/types';

const initialState: IInitialState = {
  tournaments: [],
  status: fetchStatus.IDLE,
};

//fetch all tournaments asyncthunk
export const fetchTournaments = createAsyncThunk(
  'fetchTournaments',
  async () => {
    const res = await axios.get(API_TOURNAMENTS_URL);
    console.log(res.data);
    return res.data;
  }
);

//create tournament asyncthunk
export const createTournaments = createAsyncThunk('createTournaments', async (name: string) => {
  const res = await axios.post(`${API_TOURNAMENTS_URL}/add`, { name: name })
  console.log(res.data)
  return res.data;
})

//update tournament asyncthunk
export const updateTournaments = createAsyncThunk('updateTournaments', async ({ id, newName }: { id: string, newName: string }) => {
  await axios.post(`${API_TOURNAMENTS_URL}/update`, { id: id, newName: newName })
  return { id, newName }
})

//delete tournament asyncthunk
export const deleteTournaments = createAsyncThunk('deleteTournaments', async (id: string) => {
  await axios.post(`${API_TOURNAMENTS_URL}/delete`, { id: id });
  return { id }
})

//find tournaments asyncthunk
export const findTournaments = createAsyncThunk('findTournaments', async function (query: string) {
  const res = await axios.post(`${API_TOURNAMENTS_URL}/find`, { query: query })
  return res.data;
})

const tournamentSlice = createSlice({
  name: 'tournaments',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTournaments.pending, state => {                             //waiting for feching tournaments
        state.status = fetchStatus.LOADING
      })
      .addCase(fetchTournaments.fulfilled, (state, action) => {                 //succeed in fetching tournaments
        state.status = fetchStatus.COMPLETED;
        state.tournaments = state.tournaments.concat(action.payload.data)
      })
      .addCase(fetchTournaments.rejected, state => {                            //fail to fetch tournaments
        state.status = fetchStatus.FAILED
      })
      .addCase(createTournaments.fulfilled, (state, action) => {                //succeed in creating tournaments
        state.status = fetchStatus.COMPLETED;
        const newTournaments = [...state.tournaments, action.payload.data];
        state.tournaments = newTournaments
      })
      .addCase(updateTournaments.fulfilled, (state, action) => {                //succeed in updating tournaments
        state.status = fetchStatus.COMPLETED;
        const newData = state.tournaments.map((item) => {
          if (item.id === action.payload.id) {
            item.name = action.payload.newName;
          }
          return item;
        });
        state.tournaments = newData;
      })
      .addCase(deleteTournaments.fulfilled, (state, action) => {                //succeed  in deleting tournaments
        state.status = fetchStatus.COMPLETED;
        const newData = state.tournaments.filter((item) => {
          return item.id !== action.payload.id
        });
        state.tournaments = newData;
      })
      .addCase(findTournaments.pending, (state) => {                            //waiting for finding tournaments
        state.status = fetchStatus.LOADING
      })
      .addCase(findTournaments.fulfilled, (state, action) => {                  //succeed in finding tournaments
        state.status = fetchStatus.COMPLETED
        state.tournaments = action.payload.data
      })
      .addCase(findTournaments.rejected, (state) => {                           //fail to fetch tournaments
        state.status = fetchStatus.FAILED
      })
  }
});

export default tournamentSlice.reducer;
