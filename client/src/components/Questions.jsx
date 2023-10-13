/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useFetchQuestion } from '../hooks/fetchQuestion.jsx';
import { useSelector } from 'react-redux';

const Questions = ({onChecked}) => {
    
    const [{ isLoading, apiData,serverError}] = useFetchQuestion();
    const question = useSelector(state => state.questions.queue[state.questions.trace])

    useEffect(() => {
        // console.log(question);

    },);

    const onSelect = (i) => {
        console.log('radio button selected');
        onChecked(i);

    };

    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>

    return (
        <div className="container">
            <h3 className="text-dark p-3">
                {question?.question}
            </h3>
            <ul key={question?.id}>
                {question?.options.map((option, idx) => (
                    <li key={idx}>
                        <input type="radio" value={false} name="options" id={`q${idx}`} onChange={()=>onSelect(idx)} />
                        <label htmlFor={`q${idx}`}>{option}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Questions;
