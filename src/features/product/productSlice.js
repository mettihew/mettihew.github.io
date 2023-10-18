import { productService } from "./productService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'

export const getProducts = createAsyncThunk(
  "Product/get-all",
  async (thunk) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

export const getAproduct = createAsyncThunk(
  "Product/get-one",
  async (data, thunk) => {
    try {
      return await productService.getAproduct(data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

export const addToCart = createAsyncThunk(
  "Product/add-to-cart",
  async (data, thunk) => {
    try {
      return await productService.addToCart(data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

export const getCart = createAsyncThunk(
  "Product/get-cart",
  async (token, thunk) => {
    try {
      return await productService.getCart(token);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

export const order = createAsyncThunk(
  "Product/order",
  async (data, thunk) => {
    try {
      return await productService.order(data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

export const getOrder = createAsyncThunk(
  "Product/get-order",
  async (thunk) => {
    try {
      return await productService.getOrder();
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);



const initialState = {
  product: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending,(state) => {
        state.isLoading = true;
    })
    .addCase(getProducts.fulfilled,(state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload
    })
    .addCase(getProducts.rejected,(state, action) =>{
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error
    })

    .addCase(getAproduct.pending,(state) => {
        state.isLoading = true;
    })
    .addCase(getAproduct.fulfilled,(state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload
    })
    .addCase(getAproduct.rejected,(state, action) =>{
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error
    })
   
  .addCase(addToCart.pending,(state) => {
      state.isLoading = true;
  })
  .addCase(addToCart.fulfilled,(state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.product = action.payload
      toast.success('Added to cart')
  })
  .addCase(addToCart.rejected,(state, action) =>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error
  })

  .addCase(getCart.pending,(state) => {
    state.isLoading = true;
})
.addCase(getCart.fulfilled,(state, action) => {
    state.isLoading = false;
    state.isError = false;
    state.isSuccess = true;
    state.product = action.payload
})
.addCase(getCart.rejected,(state, action) =>{
    state.isLoading = false;
    state.isSuccess = false;
    state.isError = true;
    state.message = action.error
})

.addCase(order.pending,(state) => {
  state.isLoading = true;
})
.addCase(order.fulfilled,(state, action) => {
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = true;
  state.product = action.payload
  toast.success("Congragulation")
})
.addCase(order.rejected,(state, action) =>{
  state.isLoading = false;
  state.isSuccess = false;
  state.isError = true;
  state.message = action.error
})

.addCase(getOrder.pending,(state) => {
  state.isLoading = true;
})
.addCase(getOrder.fulfilled,(state, action) => {
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = true;
  state.product = action.payload
})
.addCase(getOrder.rejected,(state, action) =>{
  state.isLoading = false;
  state.isSuccess = false;
  state.isError = true;
  state.message = action.error
})

},
});


export default productSlice.reducer