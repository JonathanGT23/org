import { useState } from "react"
import "./Form.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
import Equipo from './../Equipo/index';

const Form = (props) => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState ("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")
    const {registrarColaborador , crearEquipo} = props

    const enviar = (e) =>{
        
        e.preventDefault()
        console.log("enviar")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }


    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={enviar}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
            titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required 
            valor={nombre} 
            setValor={actualizarNombre}/>

            <Campo 
            titulo="Puesto" 
            placeholder="Ingresar puesto" 
            required
            valor={puesto} 
            setValor={actualizarPuesto}
            />

            <Campo 
            titulo="Foto"   
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto} 
            setValor={actualizarFoto}
            />

            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
            titulo="Titulo" 
            placeholder="Ingresar titulo" 
            required 
            valor={titulo} 
            setValor={actualizarTitulo}/>

            <Campo 
            titulo="Color" 
            placeholder="Ingresar el color en Hex" 
            required
            valor={color} 
            setValor={actualizarColor}
            type="color"
            />
            <Boton>
                Registrar Equipo
            </Boton>
        </form>
    </section>
}

export default Form