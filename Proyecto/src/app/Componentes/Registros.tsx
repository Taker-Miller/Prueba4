import React, { useEffect, useState } from 'react'
import { obtenerPersonas } from '../Firebase/Promesas'
import { Persona } from '../Interfaces/IFormulario'
import { Link } from 'react-router-dom'



export const Registros = () => {
    const [personas, setPersonas] = useState<Persona[]>([])
    useEffect(()=>{
        obtenerPersonas().then((listado)=>{
            console.log("Ya estoy listo")
            console.log(listado)
            setPersonas(listado)
        })
       
    },[])

    const renderizarDatos = ()=>{
        var r = personas.map((p)=>{
            return <tr>
                    <td>{p.nombre}</td>
        <td>{p.apellido}</td>
        <td>{p.edad}</td>
        <td>{p.sexo}</td>
        <td>{p.fechaNacimiento}</td>
        <td>{p.ciudad}</td> 
        <td>{p.correoElectronico}</td> 
                    <td><Link to={"/actualizar/"+p.idPersona}>Actualizar</Link></td>
                    <td><Link to={"/eliminar/"+p.idPersona}>Eliminar</Link></td>
                </tr>
        })
        return r
    }

    return (
    <table>
        <tr>
        <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Sexo</th>
          <th>Fecha_Nacimiento</th>
          <th>Ciudad</th> 
          <th>Correo </th> 
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
        {
            renderizarDatos()
        }
    </table>
  )
}
