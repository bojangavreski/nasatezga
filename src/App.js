import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import AuthRoute from './util/AuthRoute';
import { AuthProvider } from './context/auth';
import Store from './pages/Store';
import { NewNav } from './components/NewNavBar/NewNav';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Profile from './pages/Profile';
import Login1 from './pages/Login1';
import Register1 from './pages/Register1';
import Biodiv from './pages/Biodiv';
import Forgot from './pages/ForgotPassword';
import './App.css';
import Avtohtoni from './pages/Avtohtoni';
import Subscription from './pages/Subscription';
import ZaNas from './pages/ZaNas'
function App() {
	return (
		<AuthProvider>
			<Router>
				<div>
					<NewNav />
					<Route exact path="/" component={Home} />
					<Route exact path="/biodiv" component={Biodiv} />
					<Route exact path="/ZaNas" component={ZaNas} />
				</div>
				<Container>
					<Route exact path="/subscription" component={Subscription} />
					<Route exact path="/store" component={Store} />
					<AuthRoute exact path="/login" component={Login1} />
					<AuthRoute exact path="/register" component={Register1} />
					<Route exact path="/products/:pId" component={SingleProduct} />
					<Route exact path="/profile/:uId" component={Profile} />
					<Route exact path="/forgot" component={Forgot}/>
				</Container>
			</Router>
		</AuthProvider>
	);
}

export default App;
