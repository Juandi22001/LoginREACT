import { useState, useEffect } from "react"
import axios from 'axios';
export const useLogin = () => {


  const Login = async (USER, Password) => {



    const respuesta = await axios.post('http://localhost:5000/Login', { USER, Password })
    return respuesta.data
  }



  return { Login }
}