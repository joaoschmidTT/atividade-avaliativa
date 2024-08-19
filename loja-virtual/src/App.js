
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login';
import Loja from './pages/loja';
import Carrinho from './pages/carrinho';

function App() {
  return (

    <BrowserRouter>
      <Routes>
<Route path='/' element={<Login/>} />
<Route path='/deucerto' element={<Loja/>} />
<Route path='/carrinho' element={<Carrinho />} /> 

      </Routes>
    </BrowserRouter>
  );
}


export default App;
