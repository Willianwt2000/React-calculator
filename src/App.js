
import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/Boton-clear';
import { useState } from 'react';
import {evaluate} from 'mathjs';
function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const clearInput = valor => {
    setInput('');
  }

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor Ingrese una operación");
    }
    
  }



  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
      <Pantalla 
        input={input}
      />

        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear clearScreen={clearInput}>clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
