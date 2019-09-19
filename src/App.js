import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ListaProducto from './components/ListaProducto';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Inicio from './components/Inicio';
import Computadora from './components/Computadora';

import Footer from './components/Footer';
 

class App extends Component {
  
  render() {
    const fecha = new Date().getFullYear();

    return (
      <React.Fragment>

        <Navbar/>

        <Switch>

          
          <Route exact path="/" component={Inicio}/>
          <Route path="/producto" component={ListaProducto}/>
          <Route path="/detalle"  component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route exact path="/computadora" component={Computadora}/>
          <Route component={Default}/>

        </Switch>

        <Footer
            fecha = {fecha}      
        />


      </React.Fragment>
    );
  }
}

export default App;
