import { useState, useEffect,useContext } from "react"
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { FetchPostSesion } from "../Helpers/fetch";
export const useBienvenida = () => {

    const { verificarToken } = useContext(AuthContext);
  const Desloggear = async () => {
    console.log("holaaaaaaaaaaaa")





       
 
      
    localStorage.removeItem('token')
    await FetchPostSesion('Sesion', { "token":false} , 'POST');

          

    verificarToken()


  }

  const Mover = async () => {





       
 
      
    window.location.replace("http://localhost:3001");



  }



  return { Desloggear,Mover }
}