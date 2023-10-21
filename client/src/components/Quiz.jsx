// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Questions from './Questions';

import { useDispatch, useSelector } from "react-redux";
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/fetchQuestion';
import { PushAnswer } from '../hooks/setResult';
import {Navigate} from 'react-router-dom';

const Quiz = () => {

    const dispatch = useDispatch();
    
    const { queue, trace } = useSelector(state => state.questions);
    const result= useSelector(state => state.results.result);
    const [checked, setChecked] = useState(undefined);

    // useEffect(() => {
    //    console.log(result);
    // })

    const onChecked = (check) =>{
        setChecked(check);
    }
    

    const onPrev = () => {
        // console.log("prev button clicked!");
        if(trace>0){
            dispatch(MovePrevQuestion());
        }
    }

    const onNext = () => {
        // console.log("next button clicked!");
        if(queue.length>trace){
            dispatch(MoveNextQuestion());
            
        }
        /** insert a new result in the array.  */
        if(result.length<=trace){
            dispatch(PushAnswer(checked));
        }

        setChecked(undefined);
    }
    /**finished exam after the last question */
    if(result.length && result.length>=queue.length){
        return <Navigate to='/result' replace={true}></Navigate>
    }

    return (
        <div className="container">
            <h1 className="text-dark p-3 rounded" style={{ border: '3px solid #007bff' }}>Quiz Application</h1>
                
            <Questions onChecked={onChecked} />

            <div className="d-flex justify-content-between">
               {trace>0 ?  <button className="btn btn-warning" onClick={onPrev}>Prev</button>:<div></div>}
                <button className="btn btn-warning" onClick={onNext}>Next</button>
            </div>

        </div>
    )
}

export default Quiz;

