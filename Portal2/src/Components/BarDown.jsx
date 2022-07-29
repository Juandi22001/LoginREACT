import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useBienvenida } from '../hooks/UseBienvenenida';
import Toolbar from '@mui/material/Toolbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import {  Grid, Text } from "@nextui-org/react";
import Divider from '@mui/material/Divider';
import { green } from '@mui/material/colors';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
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
    <Image src="https://res.cloudinary.com/webuvg/image/upload/f_auto,q_auto,w_164,c_scale,fl_lossy,dpr_2.63/f_auto,q_auto,fl_lossy,c_scale,w_200/v1641327930/WEB/Nosotros/Imagen%20Institucional/Logotipo%20UVG/Logotipo%20UVG/Logo-UVG-cuadrado.jpg" width={120} margin-left={200} maxDelay={5} height={180} alt="efe?" />

       
 </Grid>
 <Grid xs={4} sm={8} > 
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

          <Divider orientation="vertical" flexItem />
          
    <Grid xs={4} sm={3}  > 
         
          <Box sx={{ flexGrow: 10, display: { xs: '1', md: '8px',padding: '$20 $24' } }}>
    
          <Grid xs={4} sm={7}  > 
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
                </Grid>
                <Grid xs={4} sm={10}  > 
                <FacebookIcon fontSize="large" sx={{ fontSize: 50, color: green[700] }}    />
                <InstagramIcon fontSize="large" sx={{ fontSize: 50, color: green[700] }}    />
                <TwitterIcon fontSize="large" sx={{ fontSize: 50, color: green[700] }}    />
                
                <YouTubeIcon fontSize="large" sx={{ fontSize: 50, color: green[700] }}    />
              
                </Grid>
          </Box>

      
       
          </Grid>
   
          </Grid.Container>

        </Toolbar>
     
    </AppBar>
    </div>
  );
};
export default Barra;

            