// initialise this file as store

import { configureStore } from "@reduxjs/toolkit";
import  Slice  from "./counterSlice";

export const store = configureStore({
    reducer:{
        counter:Slice
    }
})