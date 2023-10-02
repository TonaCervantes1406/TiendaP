import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/navegacion/index';
import Inicio from './Components/paginas/inicio';
import Buscar from './Components/paginas/buscar';
import Cuenta from './Components/paginas/cuenta';
import Carrito from './Components/paginas/carrito';
import InicioSesion from './Components/paginas/iniciosesion';
import Registro from './Components/paginas/registrate';
import Micuenta from './Components/paginas/micuenta';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path='/' exact element={ <Inicio />} />
         <Route path='/inicio' element={ <Inicio />} />
         <Route path='/buscar' element={ <Buscar />} />
         <Route path='/cuenta' element={ <Cuenta />} />
         <Route path='/carrito' element={ <Carrito />} />
         <Route path='/iniciosesion' element={ <InicioSesion />} />
         <Route path='/registrate' element={ <Registro />} />
         <Route path='/micuenta' element={ <Micuenta />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
