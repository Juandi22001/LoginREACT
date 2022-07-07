
import { useForm } from "../hooks/useForm";
import { blue } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { useContext, useEffect, useState } from 'react'

import { Pestaña } from "../hooks/UsePestaña";
import { Input, Grid, Row, Button, Text, Modal, useModal, Spacer } from "@nextui-org/react";
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
export const Lista = () => {
    const { setVisible, bindings } = useModal();
    const { Mover, Desloggear } = useBienvenida()
    const [selectedIndex, setSelectedIndex] = useState(1);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    const { AgregarPestaña } = Pestaña()

    const Agregar = (nombre,valor) => {
        const pestaña= {

            "nombre":nombre ,"valor":valor
        }

        AgregarPestaña(pestaña)







    }

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
    return (






        <Grid >

            <Box sx={{ width: '400px', maxWidth: '900px', bgcolor: 'background.paper' }}>

                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={() => Agregar("constancia","1")}

                    >
                        <ListItemIcon>
                            <AccountBalanceIcon sx={{ color: blue[900] }} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: blue[900] }} primary="Constancia de Cursos" />

                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={() => Agregar("cambio","2")}

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
                        onClick={() => Agregar("simultanea","3")}

                    >        <ListItemIcon>
                            <BookmarksIcon sx={{ color: blue[900] }} />
                        </ListItemIcon >
                        <ListItemText sx={{ color: blue[900] }} primary="Carrera Simultanea" />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={() => Salir()}

                    >
                        <ListItemText sx={{ color: blue[900] }} primary="Ver mas.." />
                    </ListItemButton>



                </List>
            </Box>

        </Grid>


    )




}