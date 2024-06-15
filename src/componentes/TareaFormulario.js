import React, { useState } from "react";
import '../stylesheets/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';


function TareaFormulario (props){

  const [input, setInput] = useState('')

  const manejarCambio = even =>{
    setInput(even.target.value);
  }

  const manejarEnvio = even =>{
    even.preventDefault(); 

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada : false
    }

    props.onSubmit(tareaNueva)
}


  return(
    <form 
    className="tarea-formulario"
    onSubmit={manejarEnvio}
    >
      <input 
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  )
}

export default TareaFormulario