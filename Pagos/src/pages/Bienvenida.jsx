import { useForm } from "../hooks/useForm";


import Barra from "../Components/AppBar";
import { Grid, Row, Card, Button, Text, Modal, useModal, Spacer } from "@nextui-org/react";
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
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


import AccountBalanceIcon from '@mui/icons-material/AccountBalance';




export const Bienvenida = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const { auth } = useContext(AuthContext)
  const { setVisible, bindings } = useModal();

  const { Desloggear, Mover } = useBienvenida()

  const [value, setValue] = useState('0');
  const [Titulo, setTitulo] = useState('....');


  const { values, handleInputChange } = useForm({


    ruta: '',
    Titulo: ''









  });
  useEffect(() => {

    console.log(auth.element)


  });



  const AgregarCard = (Titulo, indice) => {


    setTitulo(Titulo)
    setValue(indice)
  }

  return (
    <div >

      <Barra></Barra>


      <Grid.Container gap={2} justify="flex-start">
        <Grid xs={8} sm={13} justify="center">

          <Text
            h1
            size={85}
            css={{
              textGradient: "45deg, $green800 -20%, $green900 100%",
            }}
            weight="bold"
          >
            Pagos   <Text
              p
              size={15}
              css={{
                textGradient: "45deg, $green800 -20%, $green900 100%",
              }}
              weight="bold"
            >
              Escoja el pago que deseas realizar
            </Text>

          </Text>







        </Grid>
      </Grid.Container>


      <Grid.Container gap={2} justify="flex-start">




        <Grid xs={8} sm={3.5}>






          <Box sx={{ width: '400px', maxWidth: '900px' }}>

            <List component="nav" aria-label="main mailbox folders">
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={() => AgregarCard("Pago Matricula", 1)}

              >
                <ListItemIcon>
                  <AccountBalanceIcon sx={{ color: green[900], fontSize: 40 }} />
                </ListItemIcon>
                <ListItemText sx={{ color: green[900] }} primary=" Pago Matrícula" />

              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 1}

                onClick={() => AgregarCard("Pago Parqueo", 2)}
              >
                <ListItemIcon>
                  <LocalParkingIcon fontSize="large" sx={{ color: green[900], fontSize: 40 }} />
                </ListItemIcon>
                <ListItemText sx={{ color: green[900] }} primary=" Pago parqueo" />
              </ListItemButton>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
              <ListItemButton
                selected={selectedIndex === 2}

                onClick={() => AgregarCard(" Prestamos", 3)}
              >        <ListItemIcon>
                  <AttachMoneyIcon sx={{ color: green[900], fontSize: 40 }} />
                </ListItemIcon >
                <ListItemText sx={{ color: green[900] }} primary=" Prestamos" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 3}


              >
                <ListItemText sx={{ color: green[900] }} primary="Ver más.." />
              </ListItemButton>



            </List>
          </Box>

        </Grid>


        <Grid xs={8} sm={8.5}>

          <Card isPressable css={{ w: "2400px", h: "600px", color: "$green400" }}>

            <Card.Header css={{ p: 5, justifyItems: "center" }}>
              <div class="center">


                <Text
                  h1
                  size={35}
                  css={{
                    textGradient: "45deg, $green800 -20%, $green900 100%",
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

                      <Text css={{ lineHeight: "$xs", color: "$green800" }}>
                        Realiza el pago de la matricula
                      </Text>
                    </div>
                  </>

                  : (<h3> </h3>)}

                {value === 2 ?

                  <>
                    <div class="center">

                      <Text css={{ lineHeight: "$xs", color: "$green800" }}>
                        Haz  el pago del parqueo
                      </Text>
                    </div>
                  </>

                  : (<h3> </h3>)}


{value === 3?

<>
  <div class="center">

    <Text css={{ lineHeight: "$xs", color: "$green800" }}>
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



        </Grid>




      </Grid.Container>

    </div>

  )
}
/*

Fui al baño :V 
 

*/
