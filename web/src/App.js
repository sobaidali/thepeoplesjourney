//css
import './App.css'
//components
import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'
import Footer from './components/Footer';
import TutorialScreen from './screens/TutorialScreen';
//react-bootstrap
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />
      <Container>
        <TutorialScreen/>
      </Container>
      <Footer />
    </>
  );
}

export default App;
