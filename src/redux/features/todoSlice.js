import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState = {
 todos:[ ]
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

    addToDo: (state,action)=>{
        state.todos.push({
            id:Date.now(),
            text:action.payload,
            completed:false
        })
    },
    deleteToDo:(state,action)=>{
        state.todos = todos.filter(
            todo => todo.id !== action.payload
        )
    }

  }
})

// Action creators are generated for each case reducer function
export const { addToDo, deleteToDo } = counterSlice.actions


export default todoSlice.reducer