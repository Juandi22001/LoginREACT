
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useBienvenida } from '../hooks/UseBienvenenida';
import TextField from '@mui/material/TextField';

import { useForm } from "../hooks/useForm";
export const Bienvenida = () => {
  const { auth } = useContext(AuthContext)

  const { Desloggear } = useBienvenida()

  const { values, handleInputChange } = useForm({


    ruta: '',
  








});
  useEffect(() => {

    console.log(auth.element)


  });
  return (
    <div>
      <div class="card2">
        <Typography variant="h1" component="div" gutterBottom>
          Bienvenido

        </Typography>


      </div>
      <div>


        <Typography variant="h3" component="div" gutterBottom>
          Usuario

        </Typography>

        <Typography variant="h4" component="div" gutterBottom>
          {auth.Nombre}

        </Typography>




      </div>
      <div class="card">
        <TextField

          id="ruta" name="ruta" value={values.ruta}
          label="ruta" onChange={handleInputChange}


        />

        <Link
          href={values.ruta}

          variant="body2">

          LOGIN 2
        </Link>

        <Button variant="contained" onClick={() => Desloggear()}>Salir</Button>

      </div>

    </div>

  )
}

