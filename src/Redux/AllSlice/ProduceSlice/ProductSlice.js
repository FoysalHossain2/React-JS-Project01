import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    SetProducts: (state, payload) => {
      state.data = payload;
    },
  },
});


// make a thunk function for getting data 




export const { SetProducts } = productSlice.actions;
export default productSlice.reducer;