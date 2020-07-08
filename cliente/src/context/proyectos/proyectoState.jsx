import React, { useReducer } from 'react'

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

const proyectoState = props => {
    const initialState= {
        nuevoProyecto : false//para la creacion del uevo proyecto
    }

    // Dispatch para ejecutar las acciones
    cont [state, dispatch] = useReducer(proyectoReducer, initialState)

    // Serie de  funciones  para el CRUD
}