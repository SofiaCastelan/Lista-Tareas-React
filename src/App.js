import './App.css';
import Kuromi from './imagenes/imagen.jpg';
import ListaDeTareas from './componentes/ListaDeTareas'

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='kuromi-logo-contenedor'>
        <img 
        src={Kuromi}
        className='kuromi-logo'
        />
      </div>
      <div className='tareas-lista-principal'>
          <h1>Mis tareas</h1>
          <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
