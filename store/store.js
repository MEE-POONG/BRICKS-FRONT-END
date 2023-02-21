import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart/cartSlice";
import { mapSlice } from "./map/mapSlice";

export const store = configureStore({
  reducer: {
    mapStore: mapSlice.reducer,
    cartStore: cartSlice.reducer,
  },
});
