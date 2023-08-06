import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) =>{


    // const [mostrar,actualizarMostrar] = useState(true)
    // const manejarClick = () =>{
    //     console.log("Mostar/Ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
        
    // }
   


    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="Add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg 