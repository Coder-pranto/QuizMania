import { createSlice } from "@reduxjs/toolkit";

export const questionReducer = createSlice({
    name: "question",
    initialState: {
        queue:[],
        answers:[],
        trace: 0
    },
    reducers:{
        startExamAction : (state, action)=>{
            let { questions, answers} = action.payload
            return {
                ...state,
                queue : questions,
                answers: answers
            }
        },
        moveNextAction : (state)=>{
            return {
                ...state,
                trace: state.trace+1
            }
        },
        movePrevAction : (state)=>{
            return {
                ...state,
                trace: state.trace-1
            }
        },
        resetAllAction: () =>{
            return {
                queue: [],
                answers:[],
                trace: 0
        }
     }
    }
})

export const {startExamAction,  movePrevAction,  moveNextAction, resetAllAction} = questionReducer.actions;
export default questionReducer.reducer;