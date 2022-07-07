import { useForm } from "../hooks/useForm";

import { green } from '@mui/material/colors';
import Container from '@mui/material/Container';
import { Grid, Row, Button, Text, Modal, useModal, Spacer } from "@nextui-org/react";
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { Pestaña } from "../hooks/UsePestaña";
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Menu from '@mui/material/Menu';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { blue } from '@mui/material/colors';
import TabPanel from '@mui/lab/TabPanel';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { useBienvenida } from '../hooks/UseBienvenenida';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Image } from "@nextui-org/react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export const Bienvenida = () => {



  const { auth } = useContext(AuthContext)
  const color = green[500]
  const { AgregarPestaña, CargandoPestaña, pestaña, EliminarPestañas, EliminarPestaña } = Pestaña()
  const [ProductosFiltrados, setProductosFiltrados] = useState([])
  const { Desloggear, Mover } = useBienvenida()
  const [value, setValue] = useState('1');
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  }; const { values, handleInputChange } = useForm({


    ruta: '',






  });
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
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
  const borrarALL = () => {

    EliminarPestañas()
    setProductosFiltrados([])
    setValue('1')

  }

  const borrar = () => {

    EliminarPestaña(value)
    if (pestaña.length === 1) {
      setValue('1')
      setProductosFiltrados([])

    }
    else {
      setProductosFiltrados(pestaña)

    }

  }
  const Agregar = (nombre, valor) => {
    const pestañaUnica = {

      "nombre": nombre, "valor": valor
    }





    AgregarPestaña(pestañaUnica)
    console.log("pestaña antes", pestaña)


    setProductosFiltrados(pestaña)
    console.log("pestañas...", ProductosFiltrados)






  }
  useEffect(() => {




    setProductosFiltrados(pestaña)


  });
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
          onClick={() => Agregar("Subir Actas", "2")}

        >
          <ListItemIcon>
            <AccountBalanceIcon sx={{ color: green[900] }} />
          </ListItemIcon>
          <ListItemText sx={{ color: green[900] }} primary="Subir Actas" />

        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={() => Agregar("cambio", "3")}

        >
          <ListItemIcon>
            <MenuBookIcon fontSize="large" sx={{ color: green[900] }} />
          </ListItemIcon>
          <ListItemText sx={{ color: green[900] }} primary="Cambio de Carrera" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={() => Agregar("simultanea", "4")}

        >        <ListItemIcon>
            <BookmarksIcon sx={{ color: green[900] }} />
          </ListItemIcon >
          <ListItemText sx={{ color: green[900] }} primary="Carrera Simultanea" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}


        >
          <ListItemText sx={{ color: green[900] }} primary="Ver mas.." />
        </ListItemButton>



      </List>
    </Box>




  )
  return (
    <div >
      <AppBar position="static" color="success">
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
                  <PersonOutlineIcon fontSize="large" sx={{ fontSize: 70, color: green[400] }} />
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

                  <Button.Group ghost vertical color="success"  >
                    <Button onClick={() => Salir()} >Salir</Button>
                    <Button onClick={() => Mover()}>Inicio </Button>
                  </Button.Group>
                </MenuItem>
              </Menu>
            </Box>


            <Box sx={{ flexGrow: 1 }}>
          <Button auto  color="success" onClick={() => borrarALL()}>
          < DeleteForeverIcon  fontSize="large" sx={{ fontSize: 40, color: green[50] }}/> 
          
          
          Borrar pestañas 
          </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Button auto color="success" onClick={toggleDrawer('right', true)} >
              Ver Opciones
            </Button>
            <SwipeableDrawer
              anchor='right'
              open={state['right']}
              onClose={toggleDrawer('right', false)}
              onOpen={toggleDrawer('right', true)}
            >
              {list('left')}
            </SwipeableDrawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>






      <Grid.Container gap={2} justify="flex-start">

        <Grid xs={1} sm={2} justify="center">
     
        </Grid>

        <Grid xs={12} sm={12} justify="center">

          <Text
            h1
            size={70}
            css={{
              textGradient: "45deg, $green800 -20%, $green800 100%",
            }}
            weight="bold"
          >
            Actas

          </Text>







        </Grid>
      </Grid.Container>
      <Grid.Container gap={2} justify="flex-start">







        <Grid xs={8} sm={2}>
        </Grid>

        <Grid xs={8} sm={8.5}>

          <Box sx={{ width: '900%', typography: 'body1', padding: '10px', margin: 'auto' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'primary' ,color: green[800] }}>
                <TabList  indicatorColor="success"  
                  textColor="success" onChange={handleChange} aria-label="lab API tabs example">

                  {



                    ProductosFiltrados.map((item, i) => (



                      <Tab textcolor="success" icon={< BookmarkRemoveIcon  onClick={() => borrar()} fontSize="large" sx={{ fontSize: 55, color: green[400] }}/>}
                        indicatorColor="success" label={item.nombre} value={item.valor}    />





                    ))


                  }

                </TabList>
              </Box>

              <TabPanel value="1">
                <Grid.Container gap={2} justify="flex-start">
                  <Grid xs={12} sm={20} justify="center">    <Text
                    h1
                    size={20}
                    css={{
                      textGradient: "45deg, $green800 -20%, $green800 100%",
                    }}
                    weight="bold"
                  >
                    Esoge la operacion que deseas realizar
                  </Text>
                  </Grid>       </Grid.Container> </TabPanel>





              <TabPanel value="2" sx={{ color: green[800] }}>         Constancia     <Grid xs={6} sm={2} justify="center">   <Button auto ghost color="success" onClick={() => borrar()}>
                Borrar Pestaña
              </Button></Grid>
              </TabPanel>
              <TabPanel value="3">Cambio de Carrera        <Grid xs={6} sm={2} justify="center">  <Button auto ghost color="success" onClick={() => borrar()}>
                Borrar Pestaña
              </Button></Grid></TabPanel>
              <TabPanel value="4"> Carrer Simultanea        <Grid xs={6} sm={2} justify="center">  <Button auto ghost color="success" onClick={() => borrar()}>
                Borrar Pestaña
              </Button></Grid></TabPanel>
            </TabContext>
          </Box>

        </Grid>



      </Grid.Container>



    </div>

  )
}
/*


 

*/
