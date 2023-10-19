// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';
const Result = () => {
    const dispatch = useDispatch()
    const { questions : { queue ,answers}, results : { result, userId}}  = useSelector(state => state)
   
    useEffect(() => {
   console.log(attempts);
   console.log(flag);
    })
    
    const onRestart = () => {
        dispatch(resetAllAction());
        dispatch(resetResultAction());
    }

    const totalPoints = queue.length * 10; 
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoints)
    return (
        <div className="container">
            <h1 className="text-dark p-3 rounded" style={{ border: '3px solid #007bff' }}>
                Quiz Application
            </h1>

            <div className='border p-3 border-warning'>
                <div className='d-flex justify-content-between'>
                    <span>Username</span>
                    <span>Pranto</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <span>Total Quiz Points : </span>
                    <span>{totalPoints || 0}</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <span>Total Questions : </span>
                    <span>{queue.length|| 0}</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <span>Total Attempts : </span>
                    <span>{attempts || 0}</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <span>Total Earn Points : </span>
                    <span>{earnPoints || 0}</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <span>Quiz Result :</span>
                    <span style={{ color : `${flag ? "green" : "red" }` }}>{flag ? "Passed" : "Failed"}</span>
                </div>
            </div>

            <div className='mt-2'>
                <Link className='btn btn-sm btn-danger' to='/' onClick={onRestart}>Restart</Link>
            </div>
            <div className="mt-2">
                <ResultTable/>
            </div>
        </div>


    )
}

export default Result