import { useForm } from "../hooks/useForm";

import { blue } from '@mui/material/colors';
import Barra from "../Components/AppBar";
import { Grid, Row, Button, Text, Modal, useModal, Spacer } from "@nextui-org/react";
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { Pestaña } from "../hooks/UsePestaña";
import BarraTab from "../Components/BarrarTab";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

import TabPanel from '@mui/lab/TabPanel';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { useBienvenida } from '../hooks/UseBienvenenida';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Swal from 'sweetalert2'
export const Bienvenida = () => {


  let pestañaList = []
  const { auth } = useContext(AuthContext)
  const { setVisible, bindings } = useModal();
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

  const borrarALL = () => {

    EliminarPestañas()
    setProductosFiltrados([])
    setValue('1')

  }

  const borrar = () => {

    EliminarPestaña(value)
    if(pestaña.length===1){
      setValue('1')
      setProductosFiltrados([])

    }
    else{
      setValue('1')

      setProductosFiltrados(pestaña)

    }
    
  }
  const Agregar = (nombre, valor) => {
    const pestañaUnica = {

      "nombre": nombre, "valor": valor
    }





    AgregarPestaña(pestañaUnica)
    console.log("pestaña antes",pestaña)


    setProductosFiltrados(pestaña)
    console.log("pestañas...", ProductosFiltrados)






  }
  useEffect(() => {



   
    setProductosFiltrados(pestaña)


  });
  return (
    <div >
      <Barra></Barra>




      
      <Grid.Container gap={2} justify="flex-start">

        <Grid xs={1} sm={2} justify="center"> 
         <Button auto ghost sx={{ color: blue[900] }} onClick={() => borrarALL()}>
          Borrar Pestañas
        </Button>
        </Grid>

        <Grid xs={12} sm={12} justify="center">

          <Text
            h1
            size={65}
            css={{
              textGradient: "45deg, $blue900 -20%, $blue900 100%",
            }}
            weight="bold"
          >
            Tramites   <Text
              p
              size={15}
              css={{
                textGradient: "45deg, $blue900 -20%, $blue900 100%",
              }}
              weight="bold"
            >
              Escoja el tramite que deseas  realizar
            </Text>

          </Text>

     





        </Grid>
        </Grid.Container>
        <Grid.Container gap={2} justify="flex-start">
        <Grid xs={8} sm={3.5}>




  

            <Box sx={{ width: '400px', maxWidth: '900px', bgcolor: 'background.paper' }}>

              <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                  selected={selectedIndex === 0}
                  onClick={() => Agregar("constancia", "2")}

                >
                  <ListItemIcon>
                    <AccountBalanceIcon sx={{ color: blue[900] }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: blue[900] }} primary="Constancia de Cursos" />

                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 1}
                  onClick={() => Agregar("cambio", "3")}

                >
                  <ListItemIcon>
                    <MenuBookIcon fontSize="large" sx={{ color: blue[900] }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: blue[900] }} primary="Cambio de Carrera" />
                </ListItemButton>
              </List>
              <Divider />
              <List component="nav" aria-label="secondary mailbox folder">
                <ListItemButton
                  selected={selectedIndex === 2}
                  onClick={() => Agregar("simultanea", "4")}

                >        <ListItemIcon>
                    <BookmarksIcon sx={{ color: blue[900] }} />
                  </ListItemIcon >
                  <ListItemText sx={{ color: blue[900] }} primary="Carrera Simultanea" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 3}


                >
                  <ListItemText sx={{ color: blue[900] }} primary="Ver mas.." />
                </ListItemButton>



              </List>
            </Box>


        </Grid>



        <Grid xs={8} sm={8.5}>

          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">

                  {



                    ProductosFiltrados.map((item, i) => (



                      <Tab label={item.nombre} value={item.valor} />





                    ))


                  }

                </TabList>
              </Box>
              <TabPanel value="1">....Escoja lo que desea hacer....</TabPanel>
              <TabPanel value="2">         Constancia     <Grid xs={6} sm={2} justify="center">  <Button auto ghost sx={{ color: blue[900] }} onClick={() => borrar()}>
                Borrar Pestaña
              </Button></Grid>
              </TabPanel>
              <TabPanel value="3">Cambio de Carrera        <Grid xs={6} sm={2} justify="center">  <Button auto ghost sx={{ color: blue[900] }} onClick={() => borrar()}>
                Borrar Pestaña
              </Button></Grid></TabPanel>
              <TabPanel value="4"> Carrer Simultanea        <Grid xs={6} sm={2} justify="center">  <Button auto ghost sx={{ color: blue[900] }} onClick={() => borrar()}>
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
