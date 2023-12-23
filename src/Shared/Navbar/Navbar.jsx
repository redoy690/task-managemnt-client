
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Dropdown from "./Dropdown";
import './Navbar.css'



const Navbar = () => {
   
    const nav =
        <>
            <Link to="/"><li className="button">Home</li></Link>
            <Link to="/aboutus"><li className="button">Aboutus</li></Link>
            <Link to="/gallery"><li className="button">Gallery</li></Link>

        </>
    return (
        <div>
            <div>
                <Container>
                    <div className="navbar bg-base-100">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="space-y-3 pl-4 border-2 py-6 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-38">
                                    {nav}
                                </ul>
                            </div>
                            <img src="./logo.png" className='w-[120px]' alt="" />

                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {nav}
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <Dropdown></Dropdown>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;