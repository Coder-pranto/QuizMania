import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

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

export { attempts_Number, earnPoints_Number, flagResult, CheckUserExists };

