import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios';



const attempts_Number =(result) =>{
    return result.filter(res => res!== undefined).length;
}

const earnPoints_Number = (result, answers, point) =>{
    return result.map((ele, i)=> ele === answers[i]).filter((i)=> i!== false).map(idx => point).reduce((prev,curr)=> prev+curr, 0);
}

const flagResult = (totalPoints, earnPoints)=>{
    return (totalPoints * 50 / 100) < earnPoints; /** earn 50% marks */
}

const CheckUserExists=({children})=>{
    const auth = useSelector(state => state.results.userId);
    return auth ? children : <Navigate to={"/"} replace={true}></Navigate>
}

/** get server data */
const getServerData = async (url, callback) => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        console.log("Response data:", data); // Log the response data
        return callback ? callback(data) : data;
    } catch (error) {
        console.error("Error:", error);
        return callback ? callback(null, error) : null;
    }
};

/** post server data */
const postServerData = async (url, result, callback) => {
    try {
        const response = await axios.post(url, result);
        const data = response.data;
        console.log("Response data:", data); // Log the response data
        return callback ? callback(data) : data;
    } catch (error) {
        console.error("Error:", error);
        return callback ? callback(null, error) : null;
    }
};


export { attempts_Number, earnPoints_Number, flagResult, CheckUserExists, postServerData, getServerData };

