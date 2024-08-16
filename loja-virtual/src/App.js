
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login';
import Contador2 from './pages/calculadora';
import Login from './pages/login';


function App() {
  return (

    <BrowserRouter>
      <Routes>
<Route path='/' element={<Login/>} />
<Route path='/deucerto' element={<Contador2/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
