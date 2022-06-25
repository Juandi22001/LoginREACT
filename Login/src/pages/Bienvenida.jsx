import { useForm } from "../hooks/useForm";

import { Image } from "@nextui-org/react";

import { Input, Grid, Row, Button, Text, Modal, useModal,Spacer } from "@nextui-org/react";
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';

import { useBienvenida } from '../hooks/UseBienvenenida';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
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
        <Image src="https://github.com/Juandi22001/LoginREACT/blob/main/Imagenes/Sistema1.gif?raw=true" width={400} margin-left={200} maxDelay={10000} height={200} alt="efe?" />

      </div>
      

      <Grid.Container justify="center" align="center" bordered={2}>

      <Grid xs={8}>




      <Text
            h1
            size={110}
            css={{
              textGradient: "45deg, $green600 -20%, $green600 100%",
            }}
            weight="bold"
          >
            Bienvenido
          </Text>





          </Grid>

<Spacer y={2.5} />
        <Grid xs={4} sm={8} >

          <Box sx={{ width: '125%', maxWidth: 720, bgcolor: 'background.paper' }}>
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
                  <AccessibilityNewIcon />
                </ListItemIcon>
                <ListItemText primary="Actividades" />
              </ListItemButton>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemText primary="Trash" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 3}

              >
                <ListItemText primary="Spam" />
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
                size={140}
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
            <Button onClick={() => Mover()}>Sistema 2</Button>
          </Button.Group>







        </Grid>
      </Grid.Container>


    </div>

  )
}
/*


 

*/
