import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Register from './Register';
import dashboard from './dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/dashboard' element={<dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;