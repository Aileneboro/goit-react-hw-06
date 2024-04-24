import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./contactsSlice";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: initialState.filters.name },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.name;

export const filtersReducer = filtersSlice.reducer;
