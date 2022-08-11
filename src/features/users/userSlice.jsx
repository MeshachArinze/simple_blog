import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const USERS_URL = "https://fakestoreapi.com/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});

const initialState = [
    {id: '0', name: 'Arinze Meshach'},
    {id: '1', name: 'Osike Oyinye'},
    {id: '2', name: 'Eko Victor'}
]

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllUsers = (state) => state.users;
console.log(selectAllUsers);

export default userSlice.reducer;
