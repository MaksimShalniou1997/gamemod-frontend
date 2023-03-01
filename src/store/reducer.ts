import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IStore } from ".";
import { IPlayerStats } from "../components/leaderboardTable/types";

const initialState: IStore = {
  winners: [],
  losers: [],
  friends: [],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setWinners: (state, action: PayloadAction<IPlayerStats[]>) => {
      state.winners = action.payload;
    },
    setLosers: (state, action: PayloadAction<IPlayerStats[]>) => {
      state.losers = action.payload;
    },
    requestToFriends: (state, action: PayloadAction<string>) => {
      state.friends = [...state.friends, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWinners, setLosers, requestToFriends } = storeSlice.actions;

export default storeSlice.reducer;
