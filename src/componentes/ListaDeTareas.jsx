import React, {useState} from 'react';
import TareaFormulario from './TareaFormulario'
import Tarea from './Tarea';
import '../hoja-de-estilos/ListaDeTareas.css'

/**Otra alternativa en vez de div 
 * se les llama fragmentos
 * Map es una metodo que tomara cada una de las tareas
 * pasara con una por una
* y hara lo que especifiquemos
*/

function ListaDeTareas(){

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }


    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    };



    return (
        <>
        <TareaFormulario onSubmit={agregarTarea} />
        <div className="tareas-lista-contenedor">
            {
                tareas.map((tarea) =>
                    <Tarea 
                    key ={tarea.id}
                    id={tarea.id}
                    texto = {tarea.texto}
                    completada = {tarea.completada}
                    completarTarea = {completarTarea}
                    eliminarTarea = {eliminarTarea}
                    />
            )}
        </div>
        </>
    );
}

export default ListaDeTareas;