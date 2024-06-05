import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../AllSlice/ProduceSlice/ProductSlice";
import AddToCartSlice, { getTotal } from "../AllSlice/AddToCartSlice/AddToCartSlice";

const Store = configureStore({
  reducer: {
    cart: AddToCartSlice,
    product: ProductSlice,
  },
});

Store.dispatch(getTotal())

export default Store;