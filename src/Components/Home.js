import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2020/03/04/02/32/half-moon-4900302_960_720.jpg"
          alt="First slide"
          height="800px"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2022/03/27/03/16/muslim-banner-7093980_960_720.jpg"
          alt="Second slide"
          height="800px"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2020/01/08/20/17/building-4751158_960_720.png"
          alt="Third slide"
          height="800px"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Home;
