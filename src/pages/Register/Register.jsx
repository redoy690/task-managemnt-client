
import { useContext } from "react";
import Container from "../../Shared/Container/Container";
import { AuthContext } from "../../providers/AuthProviers";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const url = e.target.url.value
        const email = e.target.email.value
        const password = e.target.password.value

        if (password.length < 6) {
            toast.error("Password Must be 6 characters")
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast.error("Password Must be have a capital letter")
            return;
        } else if (!/[@#$%^&-+=()]/.test(password)) {
            toast.error("Password Must be have a symbol")
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success("Registration successfull")
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: url
                })
            })
            .catch(error => {
                console.log(error)
                toast.error("Email already Used")
            })
    }

    return (
        <div>
            <Container>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className=" shrink-0 w-full max-w-sm border-r-2">
                            <h2 className="text-center text-3xl text-[#00AAFF] font-bold">Register</h2>
                            <form className="card-body" onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text" name="url" placeholder="Image url" className="input input-bordered" required />
                                </div>
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
                                    <input type="submit" value="Register" className="btn" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;