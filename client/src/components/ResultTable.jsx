/* eslint-disable no-unused-vars */
import React from 'react';

const ResultTable = () => {
  return (
    <div>
      <table className="table table-bordered table-hover">
        <thead className='thead-dark'>
          <tr>
            <th>Name</th>
            <th>Attempts</th>
            <th>Earn Points</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pranto</td>
            <td>03</td>
            <td>20</td>
            <td>Passed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
