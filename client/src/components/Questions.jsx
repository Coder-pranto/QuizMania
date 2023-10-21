
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
        // console.log('radio button selected');
        onChecked(i);
        setChecked(i);
        dispatch(updateResult({ trace, checked }));
    };

    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if (serverError) {
        // Convert the error object to a string
        const errorString = serverError.toString();
    
        return (
            <h3 className='text-light'>{errorString || "Unknown Error"}</h3>
        );
    }
    

    return (
<div className="container">
    <h2 className="text-dark p-3">
        {question?.question}
    </h2>
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
