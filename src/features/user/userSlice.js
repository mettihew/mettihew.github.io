import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
let mes = "";

export const createAccount = createAsyncThunk(
  "user/create-user",
  async (data, thunk) => {
    try {
      return await userService.createAccount(data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (data, thunk) => {
    try {
      return await userService.login(data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

const initialState = {
  user: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(createAccount.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createAccount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload
        toast.success("Your account created successfully")
    })
    .addCase(createAccount.rejected, (state, action) => {
        state.isLoading =false;
        state.isSuccess = false;
        state.isError = true;
        if(action.payload.response.status === 409){
          mes = "User already exist"
        }else
        mes = "Something is wrong"
        toast.error(mes)
    })

    .addCase(login.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload
        localStorage.setItem('token', state.user.token)
        localStorage.setItem('user',JSON.stringify(state.user))
        toast.success("You are logged in successfully.")
        window.location.reload()
    })
    .addCase(login.rejected, (state, action) => {
        state.isLoading =false;
        state.isSuccess = false;
        state.isError = true;
        if(action.payload.response.status === 404){
          mes = "User not found"
        }else if(action.payload.response.status === 401){
          mes = "Username or password is wrong"
        }else mes = "Something is wrong"
        toast.error(mes)
    })


}

});


export default userSlice.reducer;