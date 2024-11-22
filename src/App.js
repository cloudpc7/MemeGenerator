import Header from './components/Header';
import Meme from './components/Meme';
import { Container } from 'react-bootstrap';
import './sass/styles.scss';
function App() {
  return (
    <Container fluid>
        <Header />
        <Meme />
    </Container>
  );
}

export default App;
