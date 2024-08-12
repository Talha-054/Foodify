import { createSlice, nanoid } from "@reduxjs/toolkit";


let initialState = [];

export const cartSlice = createSlice({
      name: 'cart',
      initialState,
      reducers: {
            addToCart: (state,action)=>{
                  state.push(action.payload)
            },
            removeByIndex: (state,action)=>{
                  return state.filter((item,index)=> action.payload != index)
                  
            },
            removeByName: (state,action)=> {
                  return state.filter((item,index)=> action.payload !=  item.name)
            }
      }
})


export const { addToCart, removeByIndex, removeByName } = cartSlice.actions;