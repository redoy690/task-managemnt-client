import  { useContext } from 'react';
import {  FaHome } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviers';
import { FaCircleUser, FaMessage } from "react-icons/fa6";
import Container from '../Shared/Container/Container';
import './dashboard.css'

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <Container>
            <div>
                <div className='flex gap-0 md:gap-2  my-8 '>
                    <div className=' w-16 md:w-16 lg:w-[260px]  min-h-screen bg-blue-100'>


                        {
                            user &&
                            <>
                                <ul className='menu space-y-2 big-device'>
                                    <li><NavLink to="/dashboard/userprofile"><FaHome></FaHome>User Profile</NavLink></li>
                                    <li><NavLink to="/dashboard/createnewtask"><FaCircleUser />Create New Tasks</NavLink></li>
                                    <li><NavLink to="/dashboard/alltask"><FaMessage />All Task</NavLink></li>
                                    <li><NavLink to="/dashboard/edittask"><FaMessage />Edit Task</NavLink></li>
                                    
                                </ul>

                                <ul className='menu space-y-2 small-device'>
                                    <li><NavLink to="/dashboard/userprofile"><FaHome></FaHome></NavLink></li>
                                    <li><NavLink to="/dashboard/createnewtask"><FaCircleUser /></NavLink></li>
                                    <li><NavLink to="/dashboard/alltask"><FaMessage /></NavLink></li>
                                    <li><NavLink to="/dashboard/edittask"><FaMessage /></NavLink></li>
                                 
                                </ul>
                            </>
                        }


                    </div>
                    <div className='w-full ml-2 mr-2'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;