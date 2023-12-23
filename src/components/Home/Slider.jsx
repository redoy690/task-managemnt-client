
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div>
            <div className="hero min-h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/vkmxsR6/pmcom-11923-clickup-alts.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold" data-aos="zoom-out-up">Hello there</h1>
                        <p className="mb-5" data-aos="flip-right">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/login"><button className="text-xl  btn btn-primary" data-aos="flip-up">Lets Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;