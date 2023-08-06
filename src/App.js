import { useState } from 'react';
import {v4 as uuidv4} from "uuid"
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg';
import { act } from 'react-dom/test-utils';
import Equipo from './components/Equipo';
import Colaborador from './components/Colaborador/index';
import Footer from './components/Footer/index';



function App() {




  const [mostrarForm,actualizarMostrar] = useState(false)
  const [colaboradores,actualizarColaboradores] = useState([
    {
    id: uuidv4(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: false,
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/JonathanGT23.png",
    nombre: "Jonathan González",
    puesto: "Desarrollador Web",
    fav: true,
  },
  {
    id: uuidv4(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false,
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false,
  },
  {
    id: uuidv4(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false,
  }
  



])

  const [equipos, actualizarEquipos] = useState([
    
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    }
    ,
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    } 
])





  //condicion &&se muestre

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarForm)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("nuevo", colaborador)
    //Spread Operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //eliminar colaborador

  const eliminarColaborador = (id) =>{
    console.log("eliminar mae", id)
    const nuevosColaborados = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaborados)
  }

  //Acutualizar Color de Equipo

  const actualizarColor = (color, id) =>{
    console.log("Actualizar: " , color , id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //crear equipo

  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }])
  }


  const like  = (id) =>{
    console.log("like: ",id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }


  



  return (
    <div>
      <Header />
      {/* { mostrarForm ? <Form /> : <></> } */}
      {
        mostrarForm && <Form 
         equipos={equipos.map((equipo) => equipo.titulo)}
         registrarColaborador={registrarColaborador}
         crearEquipo={crearEquipo}
        />
       }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map ((equipo) =><Equipo
         datos={equipo} 
         key={equipo.titulo } 
         colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
         eliminarColaborador={eliminarColaborador} 
         actualizarColor={actualizarColor}
         like={like}
         />)
      }  

      <Footer/>

    </div>
  );
}

export default App;
