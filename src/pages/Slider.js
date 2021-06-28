import Carousel from "react-bootstrap/Carousel";
import ff7 from "../assets/img/ff7.jpg";
import p5r from "../assets/img/p5r.jpg";
import tlou2 from "../assets/img/tlou2.jpg";
import "../assets/css/SliderPage.css";

function SliderPage() {
  return (
    <div class="sliderDiv">
      <Carousel>
        <Carousel.Item>
          <a href="/Game3WikiPage">
            <img src={tlou2} alt="The Last of Us 2" title="The Last of Us 2" />
          </a>
          <Carousel.Caption>
            <h3 class="caption">The Last of Us 2</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/Game1WikiPage">
            <img
              src={ff7}
              alt="Final Fantasy 7 Remake"
              title="Final Fantasy 7 Remake"
            />
          </a>
          <Carousel.Caption>
            <h3 class="caption">Final Fantasy 7 Remake</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/Game2WikiPage">
            <img src={p5r} alt="Persona 5 Royal" title="Persona 5 Royal" />
          </a>

          <Carousel.Caption>
            <h3 class="caption">Persona 5 Royal</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderPage;
