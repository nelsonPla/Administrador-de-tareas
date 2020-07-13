import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { PROYECTO_ACTUAL } from '../../types';



const ListadoTareas = () => {

    //extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //si no ay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    //Array destructuring para extraer el proyecto actual
    const [ proyectoActual ] = proyecto;//con esto extraigo la posicion de el array 

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Plataformas de Pago', estado: true },
        { nombre: 'Elegir Hosting', estado: false }
    ]

    //eliminar un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : tareasProyecto.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;