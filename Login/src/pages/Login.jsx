import { useForm } from "../hooks/useForm";
import { useState } from "react"
import TextField from '@mui/material/TextField';
import FilledInput from '@mui/material/FilledInput';
import { useLogin } from "../hooks/useLogin";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { useContext } from 'react'
import {Fetch_sin_Token} from '../Helpers/fetch'
import { AuthContext } from "../Context/AuthContext";
export const Login = () => {


    const { submitLogin } = useContext(AuthContext)
    const { Login } = useLogin()

    const [ver, SetVer] = useState(false)


    const { values, handleInputChange } = useForm({


        Password: '',
        USER: '',
        showPassword: false








    });
    const handleClickShowPassword = () => {



        SetVer(!ver)

    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const handleLogin = (e) => {



        submitLogin(values.USER, values.Password)
        
        
 


    }
  
    return (
        <div class="center">
            <div class="card2">
                <Typography variant="h4" component="div" gutterBottom>
                    LOGIN

                </Typography>
                <div class="cards" >


                    <Grid container justify="flex-end">


                        <form id="form" class="topBefore">


                            <Grid item xs={1} class="center">

                                <TextField

                                    id="USER" name="USER" value={values.USER}
                                    label="USER" onChange={handleInputChange}


                                />
                            </Grid>

                            <Grid item xs={1} class="center">

                                <FilledInput
                                    id="filled-adornment-password"
                                    type={ver ? 'text' : 'password'}
                                    value={values.Password} name="Password" onChange={handleInputChange}

                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}

                                                edge="end"
                                            >
                                                {ver ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </Grid>

                            <Grid item xs={1} class="center">
                                <Button variant="outlined" onClick={() => handleLogin()}  >
                                    Login
                                </Button>
                            </Grid>


                        </form>

                    </Grid>
                </div>
            </div>

        </div>



    )
}
