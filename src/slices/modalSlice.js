import { createSlice, nanoid } from "@reduxjs/toolkit";


let initialState = false;

export const modalSlice = createSlice({
      name: 'cart',
      initialState,
      reducers: {
            hide: (state,action)=>{
                  return false;
            },
            show: (state,action)=>{
                  return true;
            }
      }
})


export const { hide, show } = modalSlice.actions;