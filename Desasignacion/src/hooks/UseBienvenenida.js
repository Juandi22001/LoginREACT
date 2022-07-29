import { useState, useEffect,useContext } from "react"
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { FetchPostSesion } from "../Helpers/fetch";
import Swal from 'sweetalert2'
export const useBienvenida = () => {

    const { verificarToken } = useContext(AuthContext);
  const Desloggear = async () => {
    Swal.fire({
      title: '¿Desea Salir del sistema?',
      text: " ya no podra regresar",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si salir'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Salir',
          'Usted esta saliendo del sistema.',
          'success'

          
        )
       
         FetchPostSesion('Sesion', { "token":false} , 'POST');
    
              
    
        verificarToken()
      }
  
    })





       
 
      
 


  }

  const Mover = async () => {





       
 
      
    window.location.replace("https://main.d250xr0cyyplkf.amplifyapp.com");



  }



  return { Desloggear,Mover }
}