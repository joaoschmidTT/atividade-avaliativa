

import Nomedaloja from "../components/h1loja";
import Lupa from "../components/lupa";
import Catalogo from "../components/catalago";
import './loja.css';
import Carrinho from '../components/images/carrinho.png';
import { Link } from "react-router-dom";



export default function Loja() {
    return (
        <div className="Containerloja">

            <Catalogo />
            <Lupa />
            <Nomedaloja />


            <img src={Carrinho} id="carrinho"/>   
                                                      
            <Link to='/carrinho'>carrinho</Link>
           
        


        </div>
    );
}

