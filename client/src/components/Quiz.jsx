// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Questions from './Questions';

import { useDispatch, useSelector } from "react-redux";
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/fetchQuestion';
import { PushAnswer } from '../hooks/setResult';

const Quiz = () => {

    const dispatch = useDispatch();
    
    const { queue, trace } = useSelector(state => state.questions);
    const state = useSelector(state => state.results);
    const [questionsFinished, setQuestionsFinished] = useState(false);
    const [checked, setChecked] = useState(undefined);

    useEffect(() => {
       console.log(state);
    })

    const onChecked = (check) =>{
        setChecked(check);
    }
    

    const onPrev = () => {
        console.log("prev button clicked!");
        if(trace>0){
            dispatch(MovePrevQuestion());
            setQuestionsFinished(false);
        }
    }

    const onNext = () => {
        console.log("next button clicked!");
        if(queue.length>trace){
            dispatch(MoveNextQuestion());
            dispatch(PushAnswer(checked));
        }if(queue.length==trace+1){
            setQuestionsFinished(true);
        }
        
    }

    return (
        <div className="container">
            <h1 className="text-dark p-3 rounded" style={{ border: '3px solid #007bff' }}>
                Quiz Application
            </h1>


            <Questions onChecked={onChecked} />
            {questionsFinished && (
                <p style={{ marginTop: '10px', color: 'red', fontWeight: 'bold' }}>
                    Question is finished
                </p>
            )}


            <div className="d-flex justify-content-between">
                <button className="btn btn-warning" onClick={onPrev}>Prev</button>
                <button className="btn btn-warning" onClick={onNext}>Next</button>
            </div>

        </div>
    )
}

export default Quiz;

