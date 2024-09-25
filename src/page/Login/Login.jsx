
import { Link, useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../hooks/UseAuth";


const Login = () => {

    const { signIn, setLoading, signInWithGoogle } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/'

    const handleLogin = async e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            setLoading(true)
            // login user
            await signIn(email, password)
            navigate(from)
            toast.success('sign in successful')
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }

        console.log(email, password);
    }

    const handleGoogleSignIn = async () => {
        try {
            setLoading(true)
            await signInWithGoogle();
            navigate(from);
            toast.success('sign up successful')
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div> */}
                <div className=" bg-base-100 ull w-[350px]  shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className='flex items-center pt-4 space-x-1'>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                            <p className='px-3 text-sm dark:text-gray-400'>
                                Signup with social accounts
                            </p>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        </div>
                        <button onClick={handleGoogleSignIn} className='disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                            <FcGoogle size={32} />

                            <p>Continue with Google</p>
                        </button>
                    </form>
                    <div className='text-center'>
                        <p><small>New Here <Link to='/signUp' className='underline'>Create an Account</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;