import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: [{ id: nanoid(), tasks: "Hello Redux" }],
    editId: null,
    editTask: '',
};

const ToDoReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            state.todo.push({ id: nanoid(), tasks: action.payload });
            console.log(">>>>>>>>>",action);
            
        },
        removeToDo: (state, action) => {
            state.todo = state.todo.filter((todo) => todo.id !== action.payload);
        },
        updateToDo: (state, action) => {
            state.todo = state.todo.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { id: todo.id, tasks: action.payload.tasks };
                }
                return todo;
            });
        },
        setEdit: (state, action) => {
            state.editId = action.payload.id
            state.editTask = action.payload.tasks
        },
        cancelToDo: (state, action) => {
            state.editId = null
            state.editTask = ''
        },
        handleEditChange: (state, action) => {
            state.editTask = action.payload;

        }
    },
});

export const { addToDo, removeToDo, updateToDo, setEdit, cancelToDo, handleEditChange} = ToDoReducer.actions;
export default ToDoReducer.reducer;