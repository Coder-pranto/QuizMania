// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Questions from './Questions';

import { useSelector } from "react-redux";
const Quiz = () => {

    const state = useSelector(state => state);

    useEffect(() => {
       console.log(state);
    }, [])
    

    const onPrev = () => {
        console.log("klsdjf");
    }
    const onNext = () => {
        console.log("qwerwq");
    }
    return (
        <div className="container">
            <h1 className="text-dark p-3 rounded" style={{ border: '3px solid #007bff' }}>
                Quiz Application
            </h1>


            <Questions />

            <div className="d-flex justify-content-between">
                <button className="btn btn-warning" onClick={onPrev}>Prev</button>
                <button className="btn btn-warning" onClick={onNext}>Next</button>
            </div>

        </div>
    )
}

export default Quiz