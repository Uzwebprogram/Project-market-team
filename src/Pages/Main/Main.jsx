import "./Main.css"
import Header from "../../Components/Header/Header"
import Carousel from 'react-bootstrap/Carousel'
import CarouselImg from "./../../Assets/Img/hero-silder-1.svg"
function Main() {
    return(
        <>
        <Header/>
        <div className="container">
        <Carousel>
  <Carousel.Item>
    <img
      className="carsuel-img d-block"
      src={CarouselImg}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="carsuel-img d-block"
      src={CarouselImg}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>

<img
      className="carsuel-img d-block "
      src={CarouselImg}
      alt="First slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
        </>
    )
}
export default Main