//css
import './App.css'

//react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import TutorialScreen from './components/tutorial/TutorialScreen';
import BookScreen from './components/book/BookScreen';
//react-bootstrap
import FindTutor from './components/tutor/FindTutor';
import ProfilePage from './components/tutor/ProfilePage';
import ConfirmEmail from './components/auth/ConfirmEmail';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (
    <>
      <Router>
        <Header />
          <Switch>
            <Route path='/' exact component={HomeScreen}/>
            <Route path='/tutorials' component={TutorialScreen} />
            <Route path='/books' component={BookScreen} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/tutors' component={FindTutor}/>
            <Route path='/profile' component={ProfilePage} />
            <Route path='/confirmation/:email/:id' component={ConfirmEmail} />
            <Route path='/user/home' component={Sidebar} />
          </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
