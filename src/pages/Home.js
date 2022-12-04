import Carousel from "./Inicio/Carousel";
import './Home.css';
import CardInicio from "./Inicio/Card";


const Home = () => {
    return (
        <>
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