import { useContext } from "react";
import Container from "../../Shared/Container/Container";
import { AuthContext } from "../../providers/AuthProviers";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";


const Login = () => {
    const{signin}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const handleSubmit= (e) =>{
        e.preventDefault()
        const email= e.target.email.value
        const password= e.target.password.value
        signin(email,password)
        .then(result=>{
            const user = result.user
            toast.success("Login successfull")
            console.log(user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.log(error)
            toast.error("Email and Password do not match")
        })
    }
    return (
        <Container>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className=" shrink-0 w-full max-w-sm border-r-2">
                        <h2 className="text-center text-3xl text-[#00AAFF] font-bold">Login</h2>
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                    
                </div>
            </div>  
        </Container>
    );
};

export default Login;