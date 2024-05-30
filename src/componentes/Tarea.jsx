import React from "react";
import '../hoja-de-estilos/Tarea.css';
import { AiOutlineClose } from "react-icons/ai";
//React ico es para tener
//acceso a varios iconos
/**Definimos conponente */
function Tarea({ id, texto, completada, completarTarea, eliminarTarea }){
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
        <div 
          className='tarea-texto'
          onClick={() => completarTarea(id)}>
          {texto}
        </div>
        <div 
          className='tarea-contenedor-iconos'
          onClick={() => eliminarTarea(id)}>
          <AiOutlineClose className='tarea-icono' />
        </div>
      </div>
    )
}

export default Tarea;