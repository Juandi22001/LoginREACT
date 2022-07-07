import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { useBienvenida } from '../hooks/UseBienvenenida';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { Pestaña } from '../hooks/UsePestaña';
import Container from '@mui/material/Container';
import {  Grid, Row, Button, Text, Modal, useModal,Spacer } from "@nextui-org/react";
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { Image } from "@nextui-org/react";
import PostAddIcon from '@mui/icons-material/PostAdd';

const BarraTab = () => {

    let localcart = JSON.parse(localStorage.getItem('valuePestaña') || 1);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
    const {EliminarPestaña}=Pestaña()
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
  const borrar = () => {
  
 
    EliminarPestaña(localcart)
  };

  return (
    <AppBar position="static" >
      <Container maxWidth="10px" sx={{ color: blue[900]}}>
        <Toolbar disableGutters >
        <Box >
    
    <Image src="https://github.com/Juandi22001/LoginREACT/blob/main/Imagenes/logoGeneral.png?raw=true" width={0} margin-left={200} maxDelay={500} height={115} alt="efe?" />

    </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } ,color: blue[900]}}>
    
         
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
         
       

          <Box sx={{ flexGrow: 1 }}>
            <Tooltip title="Borrar pestaña">
              <IconButton size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit" onClick={() =>  EliminarPestaña(localcart)} sx={{ p: 0 }}>
              <DeleteIcon fontSize ="large"   sx={{ fontSize: 85 ,color: red [50]}} />
              </IconButton>
            </Tooltip>
            <Menu
                color='primary'
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
             
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default BarraTab;
