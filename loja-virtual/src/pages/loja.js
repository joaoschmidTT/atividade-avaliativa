// src/pages/loja.js

import Nomedaloja from "../components/h1loja";
import Lupa from "../components/lupa";
import Catalogo from "../components/catalago";
import './loja.css';

export default function Loja() {
    return (
        <div className="Containerloja">
            
            <Catalogo /> 

            
                <Lupa />
                <Nomedaloja />


            
        </div>
    );
}
