
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login';
import Loja from './pages/loja';


function App() {
  return (

    <BrowserRouter>
      <Routes>
<Route path='/' element={<Login/>} />
<Route path='/deucerto' element={<Loja/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
