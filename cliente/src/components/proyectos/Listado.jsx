import React, { useContext, useEffect } from 'react'
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoProyectos = () => {

    //extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    //antes del useeffect no debe de abber un return
    useEffect(() => {
        obtenerProyectos()
    }, []);

    //revisar si ay proyectos
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;


    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;