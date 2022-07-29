import logo from './logo.svg';
import './App.css';

import AuthProvider from './Context/AuthContext';

import { AppRouter } from './Routes/AppRouter';
function App() {
  return (

    <>
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      <AuthProvider>
      <AppRouter/>


 
      </AuthProvider>
    </>
  );
}

export default App;
