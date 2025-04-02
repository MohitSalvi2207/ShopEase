import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
};

export const LoginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;  
    },
    userLogout: (state) => {
      state.user = null;  
    }
  },
});

export const { userLogin , userLogout} = LoginSlice.actions;

export default LoginSlice.reducer;
