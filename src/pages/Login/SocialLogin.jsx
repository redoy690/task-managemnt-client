import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProviers';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { googlelogin } = useContext(AuthContext)
    const handlegooglelogin = () => {
        googlelogin()
            .then(result => {
                const user = result.user
                toast.success("Login successfull")
                console.log(user)
                navigate(location?.state ? location.state : '/')
            })
    }
    return (
        <div>
            <p className='text-center'>or login with</p>
            <div className='text-center mt-4'>
                <button onClick={() => handlegooglelogin()} className='btn'>Login with Google <FaGoogle /></button>
            </div>
        </div>
    );
};

export default SocialLogin;