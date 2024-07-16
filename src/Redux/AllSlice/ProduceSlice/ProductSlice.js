import { createSlice } from "@reduxjs/toolkit";

const ApiStatus = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  ERROR: 'ERROR'
}

const initialState = {
  data: {},
  status: ApiStatus.IDLE,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    SetProducts: (state, action) => {
      state.data = action.payload;
    },
    SetStatus: (state, action) => {
      state.status = action.payload
    }
  },
});


// make a thunk function for getting data 
export const FetchDataProduct = (ApiUrl) => {
  return async function (dispatch, getState) {
    try {
      dispatch(SetStatus(ApiStatus.LOADING))
      const response = await fetch(ApiUrl);
      const data = await response.json();
        dispatch(SetProducts(data));
        console.log(data);
        dispatch(SetStatus(ApiStatus.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(SetStatus(ApiStatus.ERROR));
    }
  }
}



export const { SetProducts, SetStatus } = productSlice.actions;
export default productSlice.reducer;