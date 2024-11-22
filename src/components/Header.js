import { Row, Col, Image } from 'react-bootstrap';
import troll from '../app/assets/images/troll-face.png';

const Header = () => {
  return (
    <Row className="row header"> 
        <Image src={troll} className="troll-image" />
      <Col className="title-col">
        <h2 className="h2">Meme Generator</h2>
        <h3 className="h3">React Course - Project 3</h3>
      </Col>
    </Row>
  );
};

export default Header;