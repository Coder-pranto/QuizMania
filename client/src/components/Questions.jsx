/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { data } from '../database/data.jsx';

const Questions = () => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        console.log(data);
    }, []);

    const question = data[0];

    const onSelect = () => {
        setChecked(true);
        console.log('radio button selected');
    };

    return (
        <div className="container">
            <h3 className="text-dark p-3">
                {question.question}
            </h3>
            <ul key={question.id}>
                {question.options.map((option, idx) => (
                    <li key={idx}>
                        <input type="radio" value={checked} name="options" id={`q${idx}`} onChange={onSelect} />
                        <label htmlFor={`q${idx}`}>{option}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Questions;
