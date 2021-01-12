//css
import './App.css'
//components
import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'
//react-bootstrap
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />
      <Container>
        <HomeScreen/>
      </Container>
    </>
  );
}

export default App;
