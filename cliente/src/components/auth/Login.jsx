import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContex from '../../context/alertas/alertaContex';
import AuthContext from '../../context/autenticacion/authContext';


const Login = (props) => {

    //extraer valores de alerta context
    const alertaContex = useContext(AlertaContex);
    const { alerta, mostrarAlerta } = alertaContex;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;

    //En caso que usuario o password no exista
    useEffect(() => {
        if(autenticado) {
            props.history.push('/proyectos');
        }
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    }, [mensaje, autenticado, props.history]);//props lo podemos usar por que estamos usando react dom

    //state para iniciar sesión
    const [ usuario, guardarUsuario ] = useState({
        email:'',
        password:''
    });

    //extrayendo del usuario
    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,//guardando copia para que no se me borre lo de los dos campos
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario hace submit
    const onSubmit = e => {
        e.preventDefault();

        //validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son requeridos', 'alerta-error');
        }

        //pasarlo al action
        iniciarSesion({ email, password });
    }

    return ( 
        <div className="form-usuario">
            { alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Iniciar Sesión" />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener una cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;