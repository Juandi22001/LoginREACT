
import { useForm } from "../hooks/useForm";
import { AuthContext } from "../Context/AuthContext";
import Box from '@mui/material/Box';
import { useContext, useEffect, useState } from 'react'
import { Card, Grid, Row, Col, Button, Text, Modal, useModal, Image, Avatar } from "@nextui-org/react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useBienvenida } from '../hooks/UseBienvenenida';

import Swal from 'sweetalert2'
export const Lista = () => {
  const { auth } = useContext(AuthContext)
  const { setVisible, bindings } = useModal();
  const { Mover, Desloggear } = useBienvenida()
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
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

  const { values, handleInputChange } = useForm({


    Password: '',
    USER: '',
    showPassword: false,
    Nombre: '',

    ConfirmarPassword: '',
    EDAD: '',
    Telefono: ''








  });
  return (






    <Grid  >

      <Box sx={{ width: '300px', maxWidth: '900px', bgcolor: 'background.paper' }}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton onClick={() => setVisible(true)}
            selected={selectedIndex === 0}

          >
            <ListItemIcon>
              <PersonOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Info Usuario" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}

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

          >
            <ListItemText primary="Trash" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={() => Salir()}

          >
            <ListItemText primary="Salir" />
          </ListItemButton>



        </List>
      </Box>


      <Modal



        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <div class="modal">
          <Modal.Header css={{ xs: 2 }}   >

            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              css={{ size: "$25" }}
              color="primary"
              bordered
            />



          </Modal.Header>
          <Modal.Body align="center">



            <Row justify='center' align="center" css={{ m: 0 }} >



              <Text
                h1
                size={35}
                css={{
                  textGradient: "45deg,black -20%, black 100%",
                }}
                weight="bold"
              > @{auth.USER}

              </Text>
            </Row>


            <Grid.Container gap={2} justify="flex-start">
              <Grid xs={4} sm={6} align="center">



                <Card isPressable css={{ p: "$2", mw: "300px" }} >

                  <Card.Body css={{ p: 5, justifyItems: "center" }}>
                    <Row wrap="wrap" justify="space-between" align="center">


                      <Text
                        h1
                        size={18}
                        css={{
                          width: '1000px', textGradient: "45deg, black -20% ,black 100%", padding: '$2 $2'
                        }}
                        weight="bold"
                      >
                        Nombre
                      </Text>
                      <Text css={{ lineHeight: "$xs", color: "$cyan700", padding: '$2 $2' }}>
                        {auth.Nombre}
                      </Text>





                    </Row>


                  </Card.Body>

                </Card>

              </Grid>   <Grid xs={4} sm={6} align="center">



                <Card isPressable css={{ p: "$2", mw: "300px" }} >

                  <Card.Body css={{ p: 5, justifyItems: "center" }}>
                    <Row wrap="wrap" justify="space-between" align="center">


                      <Text
                        h1
                        size={18}
                        css={{
                          width: '1000px', textGradient: "45deg ,black -20%,  black 100%", padding: '$2 $2'
                        }}
                        weight="bold"
                      >
                        Edad
                      </Text>
                      <Text css={{ lineHeight: "$xs", color: "$cyan700", padding: '$2 $2' }}>
                        {auth.Edad}
                      </Text>





                    </Row>


                  </Card.Body>

                </Card>

              </Grid>

              <Grid xs={4} sm={6} align="center">



                <Card isPressable css={{ p: "$2", mw: "300px" }} >

                  <Card.Body css={{ p: 5, justifyItems: "center" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                      <Text
                        h1
                        size={18}
                        css={{
                          width: '1000px', textGradient: "45deg, black -20%, black 100%", padding: '$2 $2'
                        }}
                        weight="bold"
                      >
                        Telefono
                      </Text>
                      <Text css={{ lineHeight: "$xs", color: "$cyan700", padding: '$2 $2' }}>
                        5709666
                      </Text>





                    </Row>


                  </Card.Body>

                </Card>

              </Grid>
            </Grid.Container>




          </Modal.Body>
          <Modal.Footer>

            <Button auto ghost color="primary" onClick={() => setVisible(false)}>
              salir
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </Grid>



  )




}