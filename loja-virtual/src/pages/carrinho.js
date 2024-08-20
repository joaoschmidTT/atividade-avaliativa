
import camisa from '../components/images/camisa.png';
import saia from '../components/images/saia.png';
import tenis from '../components/images/tenis.png';
import vestido from '../components/images/vestido.png';



import React from 'react';

export default function Carrinho() {
    return (
        <div className="carrinho">
            <h1>Seu Carrinho</h1>
            <p>Itens adicionados </p>
           
            <img src={camisa} id='camisa' />  
            <img src={saia} id='saia'/>  
            <img src={tenis} id='tenis'/>  
            <img src={vestido} id='vestido'/>  
            
            
        </div>
    );
}


