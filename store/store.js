import { configureStore } from "@reduxjs/toolkit";
import { mapSlice } from "./map/mapSlice";

export const store = configureStore({
  reducer: {
    mapStore: mapSlice.reducer,
  },
});
