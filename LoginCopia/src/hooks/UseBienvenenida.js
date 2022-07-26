import { useState, useEffect,useContext } from "react"
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { FetchPostSesion } from "../Helpers/fetch";
export const useBienvenida = () => {

    const { verificarToken } = useContext(AuthContext);
  const Desloggear = async () => {






       // fui al baño 
 
      
    localStorage.removeItem('token')
    await FetchPostSesion('Sesion', { "token":false} , 'POST');

          

    verificarToken()


  }

  const Mover = async () => {





       
 
      
    window.location.replace("http://localhost:3000");



  }
  
  const MoverPagos = async () => {





       
 
      
    window.location.replace("http://localhost:3003");



  }

  
  const MoverAdmisiones = async () => {





       
 
      
    window.location.replace("http://localhost:3002");



  }
  
  const MoverDesAsignacion = async () => {





       
 
      
    window.location.replace("http://localhost:3004");



  }

  
  const MoverActas = async () => {





       
 
      
    window.location.replace("http://localhost:3005");



  }
  return { Desloggear,Mover ,MoverAdmisiones,MoverPagos,MoverDesAsignacion,MoverActas}
}