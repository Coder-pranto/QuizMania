/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useFetchQuestion } from '../hooks/fetchQuestion.jsx';
import { updateResult } from '../hooks/setResult.jsx'; 
import { useDispatch, useSelector } from 'react-redux';

const Questions = ({onChecked}) => {
    
    const [{ isLoading, apiData, serverError }] = useFetchQuestion();
    const question = useSelector(state => state.questions.queue[state.questions.trace]);
    const { trace } = useSelector(state => state.questions);
    const result = useSelector(state => state.results.result);
    const [checked, setChecked] = useState(undefined);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(updateResult({ trace, checked }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checked]);

    const onSelect = (i) => {
        console.log('radio button selected');
        onChecked(i);
        setChecked(i);
    };

    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>

    return (
<div className="container">
    <h3 className="text-dark p-3">
        {question?.question}
    </h3>
    <ul key={question?.id} style={{ listStyle: 'none', padding: 0 }}>
        {question?.options.map((option, idx) => (
            <li key={idx} className="d-flex align-items-center ml-4">
                <input type="radio" value={false} name="options" id={`q${idx}`} onChange={() => onSelect(idx)} className="mr-2" />
                <label htmlFor={`q${idx}`}>{option}</label>
            </li>
        ))}
    </ul>
</div>

    
    );
};

export default Questions;
