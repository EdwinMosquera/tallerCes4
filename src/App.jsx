import { Container } from '@mui/material';
import Login from './components/Login'
import Registro from './components/Registro';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AutenticacionProvide from './context/AutenticacionProvide';
import ValidarLogin from './components/ValidarLogin';
import EstacionamientoProvide from './context/EstacionamientoProvide';
import BuscarRegistro from './components/BuscarRegistro';
import Parqueadero from './components/Parqueadero';


const App = () => {
	return (
		<AutenticacionProvide>
			<EstacionamientoProvide>
				
				<BrowserRouter>
					<Container >
					<header>
						<Link to='/'>Home</Link>
						<Link to='/registro'>Registro</Link>
					</header>
						<Routes>
							<Route path='/login' element={<Login />}></Route>
							<Route path='/' element={<ValidarLogin><Parqueadero /></ValidarLogin>}></Route>
							<Route path='/registro' element={<ValidarLogin><Registro /></ValidarLogin>}></Route>
							<Route path='/buscar/:doc' element={<ValidarLogin><BuscarRegistro /></ValidarLogin>}></Route>
						</Routes>
					</Container>
				</BrowserRouter>
			</EstacionamientoProvide>
		</AutenticacionProvide>
	)
};

export default App;
