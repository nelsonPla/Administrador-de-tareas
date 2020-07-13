import React, { Fragment, useState, useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';


const NuevoProyecto = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario, mostrarFormulario, agregarProyecto, mostrarError, errorformulario} = proyectosContext;

    //state para proyecto
    const [ proyecto, guardarProyecto ] = useState({
        nombre: ''
    });

    //extrayendo valores
    const { nombre } = proyecto;

    //lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [ e.target.name ] : e.target.value
        })
    }

    //cuando el usuario hace submit
    const onSubmitProyecto = e => {
        e.preventDefault();

        //validar que no este vacio
        if(nombre === '') {
            mostrarError();
            return;
        }

        //agregar al state si esta correcto
        agregarProyecto(proyecto)

        //Reinicar el form
        guardarProyecto({
            nombre: ''
        })
        
    }

    //mostrar el formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >Nuevo Proyecto</button>
            { formulario ?
                (
                <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProyecto}
                >
                
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        value={nombre}
                        onChange={onChangeProyecto}
                    />

                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar Proyecto"
                    />

                </form>
                ) : null}
                {errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
        </Fragment>
     );
}
 
export default NuevoProyecto;