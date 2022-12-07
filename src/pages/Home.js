import Carousel from "./Componentes/Carousel";
import './Home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from "./Componentes/Footer";

const Home = () => {
    return (
        <div>
            <Carousel />
            <h1>Mangás</h1>
            <div className="Cards">
                <Card style={{ width: '300px', height:'100px'}} className='Card1' >
                    <Card.Img src="https://lojasaraivanew.vtexassets.com/arquivos/ids/162514-1200-auto?v=638004886126730000&width=1200&height=auto&aspect=true" />
                    <Card.Body>
                        <Card.Title>CHAINSAW MAN - 08</Card.Title>
                        <Card.Text className="Price">
                            26.69
                        </Card.Text>
                        <Button variant="primary">Comprar</Button>
                    </Card.Body>
                </Card>

                <Card style={{width: '300px', height:'100px' }} className='Card'>
                    <Card.Img src="https://lojasaraivanew.vtexassets.com/arquivos/ids/166008-1200-auto?v=638006232035500000&width=1200&height=auto&aspect=true" />
                    <Card.Body>
                        <Card.Title>"MY HERO ACADEMIA - VOL. 26</Card.Title>
                        <Card.Text className="Price">
                            25.42
                        </Card.Text>
                        <Button variant="primary">Comprar</Button>
                    </Card.Body>
                </Card>

                <Card style={{width: '300px', height:'100px'}} className='Card'>
                    <Card.Img src='https://m.media-amazon.com/images/I/41GgnWaVnIL._SX340_BO1,204,203,200_.jpg' />
                    <Card.Body>
                        <Card.Title>TOKYO GHOUL VOL.6</Card.Title>
                        <Card.Text className="Price">
                            39.99
                        </Card.Text>
                        <Button variant="primary">Comprar</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '300px', height:'100px' }} className='Card'>
                    <Card.Img src='https://m.media-amazon.com/images/I/51whdHRS4LL._SX342_BO1,204,203,200_.jpg' />
                    <Card.Body>
                        <Card.Title>Jujutsu Kaisen: Batalha de Feiticeiros Vol. 3</Card.Title>
                        <Card.Text className="Price">
                            16.95
                        </Card.Text>
                        <Button variant="primary">Comprar</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '300px', height:'100px' }} className='LastCard'>
                    <Card.Img src='https://m.media-amazon.com/images/I/51W6wPKu6JL._SX337_BO1,204,203,200_.jpg' />
                    <Card.Body>
                        <Card.Title>Demon Slayer - Kimetsu No Yaiba Vol. 1</Card.Title>
                        <Card.Text className="Price">
                            26.99
                        </Card.Text>
                        <Button variant="primary">Comprar</Button>
                    </Card.Body>
                </Card>
            </div>

            <Footer />
        </div>
    )
};
export default Home;