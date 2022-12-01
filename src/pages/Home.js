import Carousel from "./Inicio/Carousel";
import NavBarInicio from "./Inicio/NavBar";
import './Home.css';
import CardInicio from "./Inicio/Card";


const Home = () => {
    return (
        <>
            <NavBarInicio />
            <Carousel />
            <h1>Home</h1>
            <div className="Cards">
                <CardInicio />
                <CardInicio />
                <CardInicio />
                <CardInicio />
            </div>
        </>
    )
};

export default Home;