import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useBienvenida } from '../hooks/UseBienvenenida';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Input, Grid, Row, Button, Text, Link, Modal, useModal, Spacer } from "@nextui-org/react";
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Lista } from './Lista';
import { Image } from "@nextui-org/react";

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
    
 
    Desloggear()
  };
  const IrSistema1 = () => {
    Mover()
  };
  return (
    <AppBar position="static">
      <Container maxWidth="20px">
        <Toolbar disableGutters>
            
          <Box >
    
        <Image src="https://github.com/Juandi22001/LoginREACT/blob/main/Imagenes/logoVista2.png?raw=true" width={0} margin-left={200} maxDelay={500} height={150} alt="efe?" />

        </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    
         
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
                    textGradient: "45deg, $white -20%, $white 100%",
                  }}
                  weight="bold"
                >
                 PORTAL
                </Text>
                </MenuItem>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Tooltip title="Open settings">
              <IconButton size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <MenuIcon />
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
              <MenuItem >
             
              <Lista></Lista>
            </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Barra;
