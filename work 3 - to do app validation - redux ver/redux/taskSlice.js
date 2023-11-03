import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasksArray: [],
    taskText: '',
    
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasksArray.push(action.payload); 
        },
        deleteTask: (state, action) => {
            state.tasksArray.pop(action.payload); 
        },
        setTaskText: (state, action) => {
            state.taskText = action.payload;
        },
        
    }
});

export const { addTask, deleteTask, setTaskText } = taskSlice.actions;
export default taskSlice.reducer;