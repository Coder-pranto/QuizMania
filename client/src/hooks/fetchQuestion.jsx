/**this custom hook will fetch data from fetch api data fro set the value to store */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { data } from "../database/data";
import * as Action from '../redux/question_reducer';
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
                let questions = await data;
                setGetData((prev) => ({ ...prev, isLoading: false }));
                setGetData((prev) => ({ ...prev, apiData: questions }));
                dispatch(Action.startExamAction(questions));
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