import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../AllSlice/ProduceSlice/ProductSlice";
import AddToCartSlice from "../AllSlice/AddToCartSlice/AddToCartSlice";

const Store = configureStore({
  reducer: {
    cart: AddToCartSlice,
    product: ProductSlice,
  },
});

export default Store