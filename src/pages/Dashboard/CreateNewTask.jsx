// import React from 'react';
import { useForm } from "react-hook-form"
import UseAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviers";

const CreateNewTask = () => {
    const {user}=useContext(AuthContext)
    const axiosPublic=UseAxiosPublic()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        const status="todo"
        const opentime =moment().format('D-MMM-YY, h:mma')
        const email=user.email
        console.log(data)
        const newdata = {...data,status,opentime,email}
        axiosPublic.post('/task',newdata)
        .then(res => {
            console.log(res.data)
            if (res.data.insertedId) {
                Swal.fire({
                    title: "Success!",
                    text: "New task create successfully",
                    icon: "success"
                });
            }
            reset()
            // navigate('/dashboard/adminprofile')
        })
       
    }
    return (
        <div className="w-full md:w-1/2 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Task Title</span>
                    </div>
                    <input type="text" placeholder="Task Title"  {...register("title")} className="input input-bordered w-full " required />
                </label>

                <div className="flex gap-4 mt-4">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Task Deadline</span>
                        </div>
                        <input type="date" placeholder="Task Title"  {...register("deadline")} className="input input-bordered w-full " required />
                        

                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Task Piority</span>
                        </div>
                        
                        <select {...register('category')} className="select select-bordered w-full max-w-xs" required>
                            <option disabled selected>Select a piority</option>
                            <option value="Low" >Low</option>
                            <option value="moderate" >Moderate</option>
                            <option value="high" >High</option>
                    
                        </select>
                    </label>
                </div>
                <label className="form-control w-full mt-4 mb-8">
                    <div className="label">
                        <span className="label-text">Task Description</span>
                    </div>
                    <textarea type="text" placeholder="Task Description"  {...register("description")} className="input input-bordered h-[90px] w-full " required />
                </label>
                <input type="submit" className="btn w-full btn-[]" />

            </form>




            {/* <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default CreateNewTask;