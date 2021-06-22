import {BrowserRouter as Router,Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {Container}  from 'semantic-ui-react';
import AuthRoute from './util/AuthRoute';
import { AuthProvider } from "./context/auth";
import Store from './pages/Store';
import Navbar from './components/LandingPage/NavBar';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Profile from './pages/Profile';
import Login1 from './pages/Login1';
import Register1 from './pages/Register1';
import Biodiv from './pages/Biodiv';
import "./App.css";
import Avtohtoni from './pages/Avtohtoni';
import Subscription from './pages/Subscription';
import ChangePassword from './pages/ChangePassword';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <AuthProvider>
      <Router>
      <div>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/biodiv" component={Biodiv}/>
      <Route exact path="/avtohtoni" component={Avtohtoni}/>
      </div>
        <Container>
        <Route exact path="/subscription" component={Subscription}/>
            <Route exact path="/store" component={Store} />
            <AuthRoute exact path="/login" component={Login1} />
            <AuthRoute exact path="/register" component={Register1}/>
            <Route exact path="/products/:pId" component={SingleProduct}/>
            <Route exact path="/profile/:uId" component={Profile}/>
            <Route exact path="/forgot" component={ForgotPassword}/>
            <Route exact path="/passwordchange/:token" component={ChangePassword}/>
        </Container>
      </Router>
    </AuthProvider>
  )
}

export default App;