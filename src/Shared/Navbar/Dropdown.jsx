import { Link } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviers";

const Dropdown = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div>
            <div>
                <div className="dropdown dropdown-end flex border-2  rounded-badge ">
                    <div>
                        <div tabIndex={0} className='flex justify-between btn-circle w-[95px] pl-4 px-3 h-[45px]'>
                            <div className='mt-4'>
                                {/* <FaAlignJustify /> */}
                                <FaAlignLeft />
                            </div>
                            <div className='mt-[6px]'>
                                <div role="" className="  avatar">
                                    <div className="w-[35px] h-[35px] rounded-full">
                                        {
                                            user ?
                                            <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                            :
                                            <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/QMQ45xq/placeholder.jpg" />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] mr-4 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40">
                            {
                                user ?
                                    <>
                                        <li className="mt-2"><Link to="/dashboard">Dashboard</Link></li>
                                        <li className="my-2" onClick={logOut} ><a>LogOut</a></li>
                                        
                                    </>
                                    :
                                    <>
                                        <li className="mt-2"><Link to="/login">Login</Link></li>
                                        <li className="my-2"><Link to="/signup">Sign Up</Link></li>
                                    </>



                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;