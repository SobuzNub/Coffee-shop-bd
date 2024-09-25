import useRole from "../../../hooks/useRole";
import LoadingSpinner from "../../shared/LoadingSpinner";
import AdminStatistics from "../Admin/AdminStatistics";
import GuestStatistics from "../Guest/GuestStatistics";
import HostStatistics from "../Host/HostStatistics";


const Statistics = () => {

    const [role, isLoading] = useRole();
    if(isLoading) return <LoadingSpinner></LoadingSpinner>

    return (
        <>
            {role === 'guest' && <GuestStatistics></GuestStatistics>}
            {role === 'host' && <HostStatistics></HostStatistics>}
            {role === 'admin' && <AdminStatistics></AdminStatistics>}
        </>
    );
};

export default Statistics;