import Container from "../../Shared/Container/Container";
import Benefit from "../../components/Home/Benefit";
import Slider from "../../components/Home/Slider";
import About from "../../components/Home/About"


const Home = () => {
    return (
        <Container>
            <div className="mt-8">
                <Slider></Slider>
                <About></About>
                <Benefit></Benefit>
               
            </div>
        </Container>
    );
};

export default Home;