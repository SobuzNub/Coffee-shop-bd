import { useState } from "react";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import avatarImg from '../../home/placeholder.jpg'
import HostModal from "../../components/Modal/HostRequestModal";
import UseAxiosSecure from "../../hooks/useAxiosSecure";
import UseAuth from "../../hooks/UseAuth";


const NavBar = () => {
    const axiosSecure = UseAxiosSecure();
    const { user, logOut, setLoading } = UseAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const modalHandler = async () => {
        console.log('I want to be a host');

        try {
            const currentUser = {
                email: user?.email,
                role: 'guest',
                status: 'Requested'
            }
            const { data } = await axiosSecure.put(`/user`, currentUser)
            console.log(data);
            if (data.modifiedCount > 0) {
                toast.success('Success! Please wait for admin confirmation')
            } else {
                toast.success('Please wait for admin approval')
            }
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        } finally {
            closeModal();
        }
    }


    const handleLogout = async () => {
        try {
            setLoading(true)
            logOut()
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }
    }

    const navItem = <>

        <Link className="font-semibold font-mono uppercase"><a>Home</a></Link>
        {user ? <Link to='/menuCard' className="md:ml-4 font-semibold font-mono uppercase"><a>Order Now</a></Link> : undefined}
        {user ? <Link className="md:ml-4 font-semibold font-mono uppercase" to='/dashboard'><a>Dashboard</a></Link> : undefined}
        {user ? null : <Link className="md:ml-4 font-semibold font-mono uppercase" to='/signUp'><a>SignUp</a></Link>}
        {user ? <><Link className="md:ml-4 font-semibold font-mono uppercase" onClick={handleLogout}>LogOut</Link></> : <><Link className="md:ml-4 font-semibold font-mono uppercase" to='/login'><a>Login</a></Link></>}

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl font-bold font-mono  gap-0"><span className="text-4xl">C</span>offee <span className="text-4xl">S</span>hop</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='hidden md:block'>
                    {/* {user && ( */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        disabled={!user}
                        className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
                    >
                        Host your home
                    </button>
                    {/* )} */}
                    {/* Modal */}
                    <HostModal isOpen={isModalOpen} closeModal={closeModal} modalHandler={modalHandler}></HostModal>
                </div>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            referrerPolicy='no-referrer'
                            alt="Tailwind CSS Navbar component"
                            src={user && user?.photoURL ? user.photoURL : avatarImg} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;