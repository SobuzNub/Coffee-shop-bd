import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../page/shared/LoadingSpinner";


const AdminRoute = ({children}) => {
    const [role, isLoading] = useRole();

    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    if(role === 'admin') return children

    return <Navigate to='/dashboard'></Navigate>
};

export default AdminRoute;