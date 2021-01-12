//css
import './App.css'
//components
import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'
import Footer from './components/Footer';
//react-bootstrap
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />
      <Container>
        <HomeScreen/>
      </Container>
      <Footer />
    </>
  );
}

export default App;
