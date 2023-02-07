import { createSlice } from "@reduxjs/toolkit";

const mapInitialState = {
  lat: null,
  lng: null,
  distance: null,
};

export const mapSlice = createSlice({
  name: "mapStore",
  initialState: mapInitialState,
  reducers: {
    setLatLng: (state, action) => {
      (state.lat = action.payload.lat), (state.lng = action.payload.lng);
    },
    setDistance: (state, action) => {
      state.distance = action.payload.distance;
    },
  },
});

export const { setLatLng, setDistance } = mapSlice.actions;
export default mapSlice.reducer;
