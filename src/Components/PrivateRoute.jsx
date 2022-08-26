import { useContext } from "react";
import { authContext } from "../Context/AuthContext";
import {Navigate} from 'react-router-dom'
function PrivateRoute({children}) {
    const {isAuth} = useContext(authContext)

    if(!isAuth){
        return <Navigate to='/login' />
    }
    return children
}

export default PrivateRoute;
