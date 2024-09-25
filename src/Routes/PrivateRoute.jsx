import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../page/shared/LoadingSpinner";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={location.pathname} replace='true'></Navigate>
};

export default PrivateRoute;