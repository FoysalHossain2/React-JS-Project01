import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../AllSlice/ProduceSlice/ProductSlice";

const Store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});

export default Store