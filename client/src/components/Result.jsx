// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable';

const Result = () => {
    const onRestart = () => {
        console.log("restart exam.");
    }
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
                    <span>50</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <span>Total Questions : </span>
                    <span>05</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <span>Total Attempts : </span>
                    <span>03</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <span>Total Earn Points : </span>
                    <span>30</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <span>Quiz Result :</span>
                    <span>Passed</span>
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