import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Register from './Register';
import Dashboard from './dashboard';
import MapaGoogle from './MapaGoogle';
import PopupGoogle from './PopupGoogle';

function App() {
  return (
    <Router>
      <Routes>
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