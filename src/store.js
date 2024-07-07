import { configureStore } from "@reduxjs/toolkit"
import tasksReducer from './components/Task/TaskSlice'


export const store = configureStore({
    reducer: {
        tasks:tasksReducer
 }
})