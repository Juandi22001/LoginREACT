import { useForm } from "../hooks/useForm";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import * as React from 'react';
import Barra from "../Components/AppBar";
import { Grid, Row, Card, Button, Text, Modal, useModal, Spacer } from "@nextui-org/react";
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { blue } from '@mui/material/colors';

import { lightBlue } from '@mui/material/colors';
import { useBienvenida } from '../hooks/UseBienvenenida';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ScienceIcon from '@mui/icons-material/Science';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import { Image } from "@nextui-org/react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export const Bienvenida = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const { auth } = useContext(AuthContext)


  const [value, setValue] = useState('0');
  const [Titulo, setTitulo] = useState('....');

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { Mover, Desloggear } = useBienvenida()
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

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const { values, handleInputChange } = useForm({


    ruta: '',
    Titulo: ''









  });

  useEffect(() => {

    console.log(auth.element)


  });



  const list = (anchor) => (






    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={() => AgregarCard(" DesAsignar Curso", 1)}

        >
          <ListItemIcon>
            <BookmarkRemoveIcon sx={{ color: blue[900], fontSize: 50 }} />
          </ListItemIcon>
          <ListItemText sx={{ color: blue[900] }} primary=" Desasginar Cursos" />

        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}

          onClick={() => AgregarCard(" Desasignar laboratorio", 2)}
        >
          <ListItemIcon>
            <ScienceIcon fontSize="large" sx={{ color: blue[900], fontSize: 50 }} />
          </ListItemIcon>
          <ListItemText sx={{ color: blue[900] }} primary="Desasignar Laboratorios" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">

        <ListItemButton
          selected={selectedIndex === 3}


        >
          <ListItemText sx={{ color: blue[900] }} primary="Ver más.." />
        </ListItemButton>



      </List>
    </Box>
  )
  const AgregarCard = (Titulo, indice) => {


    setTitulo(Titulo)
    setValue(indice)
  }

  return (

    <div >
      <AppBar position="static" sx={{ color: blue[500] }}>
        <Container maxWidth="10px" sx={{ color: blue[500] }}>
          <Toolbar disableGutters >
            <Box >

              <Image src="https://github.com/Juandi22001/LoginREACT/blob/main/Imagenes/logoGeneral.png?raw=true" width={0} margin-left={200} maxDelay={500} height={125} alt="efe?" />

            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: blue[500] }}>


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











            <Box sx={{ flexGrow: 6 }}>
              <Tooltip title="Opciones">
                <IconButton size="large"
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <PersonOutlineIcon fontSize="large" sx={{ fontSize: 55, color: blue[50] }} />
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

                  <Button.Group vertical color="primary"  >
                    <Button onClick={() => Salir()} >Salir</Button>
                    <Button onClick={() => Mover()}>Inicio </Button>
                  </Button.Group>
                </MenuItem>
              </Menu>
            </Box>


            <Button auto sx={{ color: lightBlue[900] }} onClick={toggleDrawer('left', true)}>
              Ver Opciones
            </Button>
            <SwipeableDrawer
              anchor='left'
              open={state['left']}
              onClose={toggleDrawer('left', false)}
              onOpen={toggleDrawer('left', true)}
            >
              {list('left')}
            </SwipeableDrawer>
          </Toolbar>
        </Container>
      </AppBar>



      <Grid.Container gap={2} justify="flex-start">
      <Grid xs={8} sm={3.5}>
      </Grid>


        <Grid xs={8} sm={8} justify="center">

          <Text
            h1
            
            size={75}
            css={{
              width: '900%',   textGradient: "45deg, $green600 -20%, $green600 100%",
            }}
            weight="bold"
          >
            Desasignación

          </Text>


          </Grid>
      </Grid.Container>


      <Grid.Container gap={2} justify="flex-start">


        <Grid xs={8} sm={1.5} justify="center"

        >
      </Grid>





      <Grid xs={8} sm={2.5}>

      <Box sx={{ width: '200px', maxWidth: '200px' }}>
            <Card isPressable css={{width: '450%', h: "800px",  padding: '10px',color: "$blue400" }}>

              <Card.Header css={{ p: 5, justifyItems: "center" }}>
                <div class="center">


                  <Text
                    h1
                    size={35}
                    css={{
                      textGradient: "45deg, $blue800 -20%, $blue900 100%",
                    }}
                    weight="bold"
                  >
                    {Titulo}
                  </Text>



                </div>
              </Card.Header>
              <Card.Body css={{ p: 5, justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">




                  {value === 1 ?

                    <>
                      <div class="center">

                        <Text css={{ lineHeight: "$xs", color: "$blue600" }}>
                          Escoge el curso que deseas asignarte
                        </Text>
                      </div>
                    </>

                    : (<h3> </h3>)}

                  {value === 2 ?

                    <>
                      <div class="center">

                        <Text css={{ lineHeight: "$xs", color: "$blue600" }}>
                          Escoge el laboratorio que deseas desasignarte
                        </Text>
                      </div>
                    </>

                    : (<h3> </h3>)}


                  {value === 3 ?

                    <>
                      <div class="center">

                        <Text css={{ lineHeight: "$xs", color: "$blue600" }}>
                          Haz  el pago  de todos tus prestamos pendientes
                        </Text>
                      </div>
                    </>

                    : (<h3> </h3>)}
                  <Spacer y={1} />


                </Row>


              </Card.Body>

              <Card.Footer css={{ justifyItems: "flex-start" }}>

              </Card.Footer>
            </Card>
            </Box>

          </Grid>
       




      </Grid.Container>
    </div>


  )

}

/*

Fui al baño :V 
 

*/
