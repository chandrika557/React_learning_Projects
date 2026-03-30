import { configureStore } from '@reduxjs/toolkit'
import SocialSlice from './Slices/SocialSlice.js';
import PhysicsSlice from './Slices/PhysicSlice.js';
import MathsSlice from './Slices/MathsSlice.js';

const store = configureStore({
    reducer: {
        Social: SocialSlice,
        Physics: PhysicsSlice,
        Maths: MathsSlice

    }
})

export default store;