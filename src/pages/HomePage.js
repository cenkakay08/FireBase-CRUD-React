import ff7 from '../assets/img/ff7.jpg';
import p5r from '../assets/img/p5r.jpg';
import tlou2 from '../assets/img/tlou2.jpg';
import Card from 'react-bootstrap/Card';
import '../assets/css/HomePage.css';

function HomePage() {
  return (
    <div id="wrapper">
        <section >
            <div class="container">
      
              <div class="row">
                  <Card class="card">
                    <Card.Body>
                      <Card.Link href= "/Game1WikiPage">
                        <Card.Img src={ff7} ></Card.Img>
                      </Card.Link>
                      <Card.Title>Final Fantasy VII Remake</Card.Title>
                    </Card.Body>
                  </Card>

                  <Card class="card">
                    <Card.Body>
                      <Card.Link href= "/Game2WikiPage">
                        <Card.Img src={p5r} ></Card.Img>
                      </Card.Link>
                      <Card.Title>Persona 5 Royal</Card.Title>
                    </Card.Body>
                  </Card>

                  <Card class="card">
                    <Card.Body>
                      <Card.Link href= "/Game3WikiPage">
                        <Card.Img src={tlou2} ></Card.Img>
                      </Card.Link>
                      <Card.Title>The Last of Us 2</Card.Title>
                    </Card.Body>
                  </Card>
              
              </div>
            </div>
          </section>
    </div>
  );
}

export default HomePage;