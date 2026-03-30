import {configureStore} from '@reduxjs/toolkit';
import ReduxCounterSlice from './Slices/ReduxCounterslice';
const store=configureStore({
    name:"store",
    reducer:{
        ReduxCounter:ReduxCounterSlice
    }
})
export default store;

//in store all slices will there