/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { getServerData } from '../helper/helper';

const ResultTable = () => {

  const [data, setData] = useState([])

  useEffect(() => {
      getServerData(`http://localhost:5000/api/result`, (res) => {
          setData(res)
      })
  },[])

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
          {data.length === 0 ? (
            <tr>
              <td colSpan="4">No Data Found</td>
            </tr>
          ) : (
            data.map((v, i) => (
              <tr className="table-body" key={i}>
                <td>{v?.username || ""}</td>
                <td>{v?.attempts || 0}</td>
                <td>{v?.points || 0}</td>
                <td>{v?.achieved || ""}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
