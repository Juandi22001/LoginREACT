import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import { AuthContext } from '../Context/AuthContext';
import { Bienvenida } from '../pages/Bienvenida';
import { Rutas } from './Rutas';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRouter';
import { PublicRoute } from './PublicRouter';
import { UserRouter } from './UserRouter';
export const AppRouter = () => {


    const { auth, verificarToken } = useContext(AuthContext);

    useEffect(() => {

        verificarToken();


    }, [verificarToken]);



    return (
        <Router>
            <Routes>

                <Route path="/" element={
                    <PublicRoute isAuthenticated={auth.logged}>
                
                    </PublicRoute>
                } />
               
                <Route path="/auth/*" element={
                    <PrivateRoute isAuthenticated={auth.logged}>
                 
                        <AuthRouter />
                    </PrivateRoute>
                } />

                <Route path="*" element={<Navigate to={<h1>hola</h1>} />} />
            </Routes>
        </Router>
    );
};
