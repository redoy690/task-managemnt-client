import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProviers';

const SocialLogin = () => {

    const {googlelogin}=useContext(AuthContext)
    const handlegooglelogin = () =>{
        googlelogin()
    }
    return (
        <div>
            <p className='text-center'>or login with</p>
            <div className='text-center mt-4'>
                <button onClick={() =>handlegooglelogin()} className='btn'>Login with Google <FaGoogle /></button>
            </div>
        </div>
    );
};

export default SocialLogin;