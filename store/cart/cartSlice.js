import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postCart = createAsyncThunk("cart/postCart", async (data) => {
  try {
    const res = await axios.post("/api/cart", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const getCart = createAsyncThunk("cart/getCart", async (userId) => {
  try {
    const res = await axios.get(`/api/cart?userId=${userId}`);
    return res.data.cartItems;
  } catch (error) {
    console.log(error);
  }
});

export const deleteCart = createAsyncThunk(
  "cart/deleteCart",
  async (cartItemId) => {
    try {
      await axios.delete(`/api/cart?cartItemId=${cartItemId}`);
      return cartItemId;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteAllCart = createAsyncThunk(
  "cart/deleteAllCart",
  async (cartId) => {
    try {
      await axios.delete(`/api/cart/cartItemsDelete?cartId=${cartId}`);
      return cartId;
    } catch (error) {
      console.log(error);
    }
  }
);

const cartInitialState = {
  cart: [],
  loading: true,
  totalPrice: 0,
  addressId: "",
};

export const cartSlice = createSlice({
  name: "cartStore",
  initialState: cartInitialState,
  reducers: {
    addSum: (state, action) => {
      state.totalPrice = action.payload;
    },
    addAddress: (state, action) => {
      state.addressId = action.payload;
    },
  },
  extraReducers: (builder) => {
    //POST CART ITEMS
    builder
      .addCase(postCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(postCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart.push(action.payload);
      })
      .addCase(postCart.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
    //GET CART ITEMS
    builder
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload !== undefined) {
          state.cart.push(...action.payload);
        }
      })
      .addCase(getCart.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
    //DELETE CART ITEMS
    builder
      .addCase(deleteCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload !== undefined) {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      })
      .addCase(deleteCart.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
    //DELETE ALL CART ITEMS
    builder
      .addCase(deleteAllCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAllCart.fulfilled, (state, action) => {
        console.log("action.payload", action.payload);
        state.loading = false;
        if (action.payload !== undefined) {
          state.cart = state.cart.filter(
            (item) => item.cartId !== action.payload
          );
        }
      })
      .addCase(deleteAllCart.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { addSum, addAddress } = cartSlice.actions;

export default cartSlice.reducer;
