import React, {Component} from 'react';
import './App.css';
import Cuenta from './components/Cuenta';
import Coordenadas from './components/Coordenadas';
class App extends Component {
  render(){
    return <div>
        <Cuenta/>
        <Coordenadas/>
      </div>  
  }
}

export default App;
