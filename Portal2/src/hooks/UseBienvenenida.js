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





       
 
      
    window.location.replace("http://34.125.59.69:3000");



  }
  
  const MoverPagos = async () => {





       
 
      
    window.location.replace("https://main.d1fbb1b7j3rlrd.amplifyapp.com");



  }

  
  const MoverAdmisiones = async () => {





       
 
      
    window.location.replace("https://main.d314nq50k5jl3w.amplifyapp.com");



  }
  
  const MoverDesAsignacion = async () => {





       
 
      
    window.location.replace("https://main.d3l3r65b2p5spd.amplifyapp.com");



  }

  
  const MoverActas = async () => {





       
 
      
    window.location.replace("https://main.d1ht9rkwzsgdml.amplifyapp.com");



  }
  return { Desloggear,Mover ,MoverAdmisiones,MoverPagos,MoverDesAsignacion,MoverActas}
}