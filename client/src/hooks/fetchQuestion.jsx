/**this custom hook will fetch data from fetch api data fro set the value to store */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"

import * as Action from '../redux/question_reducer.js';
import { getServerData } from "../helper/helper.jsx";
// eslint-disable-next-line react-refresh/only-export-components
export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({
        isLoading: true,
        apiData: [],
        serverError: null
    })
    useEffect(() => {
        setGetData((prev) => ({ ...prev, isLoading: true }));

        (async () => {
            try {
                const [{ questions, answers }] = await getServerData(`http://localhost:5000/api/questions`, (data) => data)

               if (questions.length>0) {
                // console.log(questions.length);
                setGetData((prev) => ({ ...prev, isLoading: false }));
                setGetData((prev) => ({ ...prev, apiData: questions }));
                dispatch(Action.startExamAction({questions, answers}));
               } else {
                throw new Error("No Question available!");
               }
            } catch (error) {
                setGetData((prev) => ({ ...prev, isLoading: false }));
                setGetData((prev) => ({ ...prev, serverError: error }));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}


// move next questiin action
export const MoveNextQuestion =()=> async(dispatch)=>{
    try {
        dispatch(Action.moveNextAction());    
    } catch (error) {
        console.log(error);
    }
}
// move prev questiin action
export const MovePrevQuestion =()=> async(dispatch)=>{
    try {
        dispatch(Action.movePrevAction());    
    } catch (error) {
        console.log(error);
    }
}