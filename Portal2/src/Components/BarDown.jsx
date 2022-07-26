import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useBienvenida } from '../hooks/UseBienvenenida';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Input, Grid, Row, Button, Text, Link, Modal, Avatar, Spacer } from "@nextui-org/react";
import Menu from '@mui/material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import Container from '@mui/material/Container';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { green } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Lista } from './Lista';
import { Image } from "@nextui-org/react";

import Swal from 'sweetalert2'
const Barra = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
    const {Mover,Desloggear}=useBienvenida()
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const Salir = () => {
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
          Desloggear()
        }
    
      })
  
};
  const IrSistema1 = () => {
    Mover()
  };
  const primary = green[50]; // #f44336
  return (
    <div class="BarraDown">
    <AppBar position="static"  color="transparent"  sx={{ color: green[100]}} >
        
        <Toolbar disableGutters>
    
      
    <Grid.Container gap={1} justify="flex-start">
        
    <Grid xs={4} sm={6}  > 
    <Box sx={{ flexGrow: 10, display: { xs: '1', md: '8px',padding: '$20 $24' } }}>
    <Grid xs={4} sm={6} > 
          <Avatar
          src="https://res.cloudinary.com/webuvg/image/upload/f_auto,q_auto,w_164,c_scale,fl_lossy,dpr_2.63/f_auto,q_auto,fl_lossy,c_scale,w_200/v1641327930/WEB/Nosotros/Imagen%20Institucional/Logotipo%20UVG/Logotipo%20UVG/Logo-UVG-cuadrado.jpg"
          css={{ size: "$20" }}
          color="success"
          bordered
          squared
          zoomed

        />
 </Grid>
 <Grid xs={4} sm={6} > 
<Text
                  h1
                  size={15}
                  css={{
                    textGradient: "45deg, $green800 -20%, $green800 100%",
                  }}
                  weight="bold"
                >
             18 AV. 11-95 ZONA 15, VISTA HERMOSA III.
GUATEMALA, GUATEMALA. 01015

                </Text>
                </Grid>
                </Box>
          </Grid>
          <Grid xs={4} sm={2}  > 
          </Grid>


          
    <Grid xs={4} sm={3}  > 
         
          <Box sx={{ flexGrow: 10, display: { xs: '1', md: '8px',padding: '$20 $24' } }}>
    
                
          <Text
                  h1
                  size={23}
                  css={{
                    textGradient: "45deg, $green800 -20%, $green800 100%",
                  }}
                  weight="bold"
                >
           ©  Universidad del Valle de Guteamala 2022
                </Text>
               
          </Box>

      
       
          </Grid>

          <Box sx={{ flexGrow: 1, display: { xs: '20', md: '2px' } }}>
         
  

       

                
       
     
          </Box>

          </Grid.Container>

        </Toolbar>
     
    </AppBar>
    </div>
  );
};
export default Barra;

            