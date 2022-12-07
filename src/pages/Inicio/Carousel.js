import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../../images/carousel.png';
import './Carousel.css';
import Slide1 from '../../images/slide1.png';
import Slide2 from '../../images/slide2.png';
import Slide3 from '../../images/slide3.png';

function BoostrapCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CarouselImage}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slide1}
                    alt="Second slide"
                    height={600}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slide2}
                    alt="Third slide"
                    height={600}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slide3}
                    alt="Third slide"
                    height={600}
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default BoostrapCarousel;