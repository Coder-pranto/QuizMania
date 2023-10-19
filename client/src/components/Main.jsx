// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserId } from '../redux/result_reducer';

const Main = () => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const startQuiz = () => {
        if(inputRef?.current?.value)
        dispatch(setUserId(inputRef.current.value));
    }

    return (
        <div className="container">
            <h1 className="text-dark p-3 rounded" style={{ border: '3px solid #007bff' }}>
                Quiz Application
            </h1>

            <ol className='text-left' type="I">
                <li>You will be asked 10 questions one after another</li>
                <li>10 points is awarded for the correct answer.</li>
                <li>Each question has three optios. You can choose only one options.</li>
                <li>You can review and change answers before the quiz finish.</li>
                <li>The result will be declared at the end of the quiz.</li>
            </ol>

            <form action="" className="form">
                <div className="form-group d-flex justify-content-center">
                    <input
                        type="text"
                        className="form-control w-75"
                        placeholder="Username*"
                        ref={inputRef}
                    />
                </div>
            </form>

            <div className="start">
                <Link className='btn btn-sm btn-warning' to={'quiz'}onClick={startQuiz}>Start Quiz</Link>
            </div>

        </div>
    )
}
export default Main