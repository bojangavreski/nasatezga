import {BrowserRouter as Router,Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {Container}  from 'semantic-ui-react';
import AuthRoute from './util/AuthRoute';
import { AuthProvider } from "./context/auth";
import Store from './pages/Store';
import Navbar from './components/LandingPage/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';
import Profile from './pages/Profile';
import Login1 from './pages/Login1'
import Register1 from './pages/Register1'
import Biodiv from './pages/Biodiv'
import "./App.css";
import Avtohtoni from './pages/Avtohtoni'
import Subscription from './pages/Subscription'
function App() {
  return (
    <AuthProvider>
      <Router>
      <div>
      <Navbar/>
      <Route  path="/" component={Home} />
      <Route  path="/biodiv" component={Biodiv}/>
      <Route  path="/avtohtoni" component={Avtohtoni}/>
      </div>
        <Container>
        <Route  path="/subscription" component={Subscription}/>
            <Route  path="/store" component={Store} />
            <AuthRoute  path="/login" component={Login1} />
            <AuthRoute  path="/register" component={Register1}/>
            <Route  path="/products/:pId" component={SingleProduct}/>
            <Route  path="/profile/:uId" component={Profile}/>
           
        </Container>
      </Router>
    </AuthProvider>
  )
}

export default App;