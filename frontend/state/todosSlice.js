import { createSlice } from '@reduxjs/toolkit'



let id = 1
const getNextId = () => id++

export const todosSlice = createSlice({
    name:'todos',
    initialState: {
        todos: [
        { id: getNextId(), label: 'Laundry', complete: true },
        { id: getNextId(), label: 'Groceries', complete: false },
        { id: getNextId(), label: 'Dishes', complete: false },
    ],
        showCompletedTodos: false,
    },
    reducers: {
        toggleTodo: (state, action) =>{
            let todo=state.todos.find(td => td.id === action.payload)
            todo.complete = !todo.complete
        },
        toggleShowCompletedTodos: state => {
            // reducers need to return a brand new state but redux toolkit has immur and they handle that 
           state.showCompletedTodos= !state.showCompletedTodos
        }
    }
})
export const{
    toggleShowCompletedTodos,
    toggleTodo
}= todosSlice.actions

export default todosSlice.reducer