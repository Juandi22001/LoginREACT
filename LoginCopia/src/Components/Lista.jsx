
import { useForm } from "../hooks/useForm";

import Box from '@mui/material/Box';
import { useContext, useEffect, useState } from 'react'
import { Input, Grid, Row, Button, Text, Modal, useModal, Spacer } from "@nextui-org/react";
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
    return (






        <Grid  >

            <Box sx={{ width: '300px', maxWidth: '900px', bgcolor: 'background.paper' }}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                        selected={selectedIndex === 0}
             
                    >
                        <ListItemIcon>
                            <PersonOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Info" />
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

        </Grid>


    )




}