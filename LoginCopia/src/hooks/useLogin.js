import { useState, useEffect } from "react"
import axios from 'axios';
export const useLogin = () => {


  const Login = async (USER, Password) => {



    const respuesta = await axios.post('http://34.125.59.69:5000/Login', { USER, Password })
    return respuesta.data
  }

  const CrearUsuario = async (Nombre, USER,Password,ConfirmarPassword,EDAD,Telefono) => {
   

    console.log(Nombre, USER,Password,ConfirmarPassword,EDAD,Telefono)


    await axios.post('http://34.125.59.69:5000/addUser', {Nombre, USER,Password,ConfirmarPassword,EDAD,Telefono})
      .then(response => {
        console.log(response)
      });

  }



  return { Login,CrearUsuario }
}