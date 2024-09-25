import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../page/shared/NavBar";
import Footer from "../page/shared/Footer";


const Main = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp') || location.pathname.includes('dashboard')

    return (
        <div className="max-w-screen-2xl mx-auto">
            { noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;