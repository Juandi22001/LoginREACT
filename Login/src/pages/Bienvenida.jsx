import { useForm } from "../hooks/useForm";

import { Image } from "@nextui-org/react";

import {  Grid, Row, Button, Text, Modal, useModal,Spacer } from "@nextui-org/react";
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { green } from '@mui/material/colors';
import { useBienvenida } from '../hooks/UseBienvenenida';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import DescriptionIcon from '@mui/icons-material/Description';
export const Bienvenida = () => {
  const { auth } = useContext(AuthContext)
  const { setVisible, bindings } = useModal();
  const { Desloggear, Mover } = useBienvenida()
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const { values, handleInputChange } = useForm({


    ruta: '',









  });
  useEffect(() => {

    console.log(auth.element)


  });
  return (
    <div >

      <div class="imagen">
        <Image src="https://github.com/Juandi22001/LoginREACT/blob/main/Imagenes/logoAsignaciones.gif?raw=true" width={400} margin-left={200} maxDelay={10000} height={200} alt="efe?" />

      </div>
      

      <Grid.Container justify="center" align="center" bordered={2}>

      <Grid xs={12}>




      <Text
            h1
            size={65}
            css={{
              textGradient: "45deg, $green600 -20%, $green600 100%",
            }}
            weight="bold"
          >
           Portal Asignaciones <BorderColorIcon  fontSize ="large"   sx={{ fontSize: 85 ,color: green[500]}}/>   
          </Text>



          </Grid>
  

<Spacer y={2.5} />
        <Grid  xs={12} >

     
        <Box sx={{ width: '1800px', maxWidth: '2000px', bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={() => setVisible(true)}
              >
                <ListItemIcon>
                  <PersonOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Info" />
              </ListItemButton>


              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemIcon>
                  <LaptopChromebookIcon />
                </ListItemIcon>
                <ListItemText primary="Cursos" />
              </ListItemButton>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                        <ListItemIcon>
                  <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary="Constancia" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 3}

              >



                <ListItemText primary="Spam" />
              </ListItemButton>

         
            </List>
          </Box>

          </Grid>



          <Modal
            scroll
            width="600px"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            {...bindings}
          >
            <Modal.Header>


              <Text
                h1
                size={80}
                css={{
                  textGradient: "45deg, $green600 -20%, $green600 100%",
                }}
                weight="bold"
              >
                {auth.Nombre}
              </Text>

            </Modal.Header>
            <Modal.Body align="center">


              <Row justify='center' align="center">
                <Text color="success" id="modal-title" size={18}>
                  Edad                 :
                </Text>

                <Text color="success" id="modal-title" size={18}>

                  {auth.Edad}
                </Text>
              </Row>
              <Row justify='center' align="center">
                <Text color="success" id="modal-title" size={18}>
                  Telefono                      :
                </Text>
                <Text color="success" id="modal-title" size={18}>
                  {auth.Telefono}
                </Text>
              </Row>
            </Modal.Body>
            <Modal.Footer>

              <Button auto ghost color="success" onClick={() => setVisible(false)}>
                Ok
              </Button>
            </Modal.Footer>
          </Modal>
     


          <Grid xs={6}>






          <Button.Group color="success" bordered >
            <Button onClick={() => Desloggear()} >Salir</Button>
            <Button onClick={() => Mover()}>Inicio </Button>
          </Button.Group>







        </Grid>
      </Grid.Container>


    </div>

  )
}
/*

Fui al baño :V 
 

*/
