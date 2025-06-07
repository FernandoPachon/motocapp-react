import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import React from 'react'; // ¡Esta línea debe estar presente!
import Login from './login';
import Register from './Register';
import Dashboard from './dashboard';
import MapaGoogle from './MapaGoogle';
import PopupGoogle from './PopupGoogle';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Login />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/MapaGoogle' element={<MapaGoogle/>}/>
        <Route path='/PopupGoogle' element={<PopupGoogle/>}/>
      </Routes>
    </Router>
  );
}

export default App;