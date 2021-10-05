import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Auth from './components/auth/Auth';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Container maxWidth='lg'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/auth' component={Auth} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default App;
