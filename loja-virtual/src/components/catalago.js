import React, { useState } from 'react';  
import Painel from './paineis';        //importando o painel
import camisa from './images/camisa.png';
import vestido from './images/vestido.png';
import calça from './images/calça.png';                     //importando as roupas
import tenis from './images/tenis.png';
import saia from './images/saia.png';
import bermuda from './images/bermuda.png';

 
export default function Catalogo() {
    const roupas = [
        { id: 1, nome: 'camisa', preco: 'R$ 100,00', imagem: camisa },   // Aqui usamos a variável camisa diretamente 
        { id: 2, nome: 'Calça', preco: 'R$ 70,00', imagem: calça },           
        { id: 3, nome: 'vestido', preco: 'R$ 60,00', imagem: vestido },
        { id: 4, nome: 'tênis', preco: 'R$ 160,00', imagem: tenis },
        { id: 5, nome: 'saia', preco: 'R$ 70,00', imagem: saia },
        { id: 6, nome: 'bermuda', preco: 'R$ 40,00', imagem: bermuda },
    ];

    const [carrinho, setCarrinho] = useState([]);
 
    const adicionarAoCarrinho = (roupa) => {      //a conste adicionar ao carrinho esta recebendo a variavel roupa
        setCarrinho([...carrinho, roupa]);        //ataualizar o carrinho 
    };

    return (
        <div className="catalogo">  
            {roupas.map(roupa => (                
                <Painel key={roupa.id} roupa={roupa} adicionarAoCarrinho={adicionarAoCarrinho} /> //permitindo com que eles aparesam e uando import do painel
            ))}
        </div>
    );
}
