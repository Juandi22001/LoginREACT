import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useBienvenida } from '../hooks/UseBienvenenida';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {  Grid, Text } from "@nextui-org/react";
import Menu from '@mui/material/Menu';
import PersonIcon from '@mui/icons-material/Person';

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
 
  return (
    <div class="Barra">
    <AppBar position="static"  color="transparent"  sx={{ color: green[100]}} >
        
        <Toolbar disableGutters>
            
        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: '0' } }}>
    
        <Image src="https://github.com/Juandi22001/LoginREACT/blob/main/Imagenes/BarraProtal.gif?raw=true" width={-100} margin-left={200} maxDelay={5} height={180} alt="efe?" />

        </Box>
          <Box sx={{ flexGrow: 0.5, display: { xs: 'flex', md: 'none' } }}>
    
         
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                  
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 1, display: { xs: '20', md: '8px' } }}>
          <MenuItem onClick={() => IrSistema1()} >
                
          <Text
                  h1
                  size={35}
                  css={{
                    textGradient: "45deg, $green800 -20%, $green800 100%",
                  }}
                  weight="bold"
                >
             
                </Text>
                </MenuItem>
          </Box>

      
          <Box sx={{ flexGrow: 0.05 }}   >
            <Tooltip title="abrir opciones">
              <IconButton size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="primary" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <PersonIcon fontSize="large" sx={{ fontSize: 110, color: green[600] }}    />
              </IconButton>
            </Tooltip>
            <Menu
               
              sx={{ mt: '80px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ 
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              <MenuItem sx={{ flexGrow: 0,bgcolor: 'background.paper'  }} >
             
              <Lista></Lista>
            </MenuItem>
            </Menu>
          </Box>


          <Box sx={{ flexGrow: 0.001 }}   >
         
          <MenuItem onClick={() => Salir()} >
          <Grid > 
          <ExitToAppIcon fontSize="large" sx={{ fontSize: 80, color: green[600] }}    />
          </Grid>
          <Grid xs={3} sm={5} borderWeights={2}> 
          <Text
                  h1
                  size={30}
                  css={{
                    textGradient: "45deg, $green800 -20%, $green800 100%",
                  }}
                  weight="bold"
                >
                Salir
                </Text>
                </Grid>
         </MenuItem>
     
          </Box>



        </Toolbar>
     
    </AppBar>
    </div>
  );
};
export default Barra;

            