import React from 'react';

import { Routes, Route } from "react-router-dom"
import { Login } from '../pages/Login';
import { Bienvenida } from '../pages/Bienvenida';
import { UserRouter } from './UserRouter';
export const AuthRouter = () => {
    return (

        <div >
            <div >
                <div>
                    <Routes>
                
                        <Route path="/login" element={<Login/>} />
                        
                        <Route path="/bienvenida" element={<Bienvenida />} />
                        <Route path="/prueba" element={<UserRouter/>} />

                        <Route path="*" element={<h>La página no existe</h>} />
                    </Routes>
                </div>
            </div>
        </div>

    );
};