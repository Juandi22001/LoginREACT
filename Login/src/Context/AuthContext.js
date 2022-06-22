import Swal from 'sweetalert2'
import { useState, createContext, useCallback } from "react"
import { useLogin } from "../hooks/useLogin";

import { FetchPostSesion, FetchSesion, FetchToken, Fetch_sin_Token } from '../Helpers/fetch';

export const AuthContext = createContext();

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    Nombre: null,
    Telefono: null,
    Edad: null
};

function AuthProvider({ children }) {

    const [auth, setauth] = useState(initialState)





    const submitLogin = async (USER, Password) => {

        //   let res = Login(USER, Password);
        const resp = await Fetch_sin_Token('Login', { USER, Password }, 'POST');


       

        if (resp.logged !== false) {


     

            setauth({
                checking: false,
                logged: true,

                Nombre: resp.Nombre,
                Telefono: resp.Telefono,
                Edad: resp.EDAD




            })
            Swal.fire("Credenciales correctas", "Mensaje:", "info")


        }
        else {
            Swal.fire("Credenciales Incorrectas", "Mensaje:", "error")



        }







    }


    const Usuario = (e) => {




    }



    
    const verificarToken = useCallback(async () => {

        const token = localStorage.getItem('token');


        const prueba = await FetchSesion('Sesion','GET')
 
      
        if (!prueba.token) {
           return  setauth({
                uid: null,
                checking: true,
                logged: false,
                Nombre: null,
                Telefono: null,
                Edad: null
            })
        }

        const resp = await FetchToken('renew','GET')
     
     

        if (resp.ok) {
 
          
        
            await FetchPostSesion('Sesion', { "token":resp.Token} , 'POST');

          



            setauth({
                checking: false,
                logged: true,

                Nombre: resp.element.Nombre,
                Telefono: resp.element.Telefono,
                Edad: resp.element.EDAD


            });
        

            return true;

        } else {
           
            setauth({
                checking: false,
                logged: true,

                Nombre: resp.Nombre,
                Telefono: resp.Telefono,
                Edad: resp.EDAD

            });

            return false;
        }

    }, []);
    return (
        <AuthContext.Provider value={{

            submitLogin, Usuario, auth, verificarToken
        }}>

            {children}
        </AuthContext.Provider >






    )
}

export default AuthProvider;