import React, { useState } from 'react';  //importando 
import Painel from './paineis';
 

export default function Catalogo() {
    const roupas = [
        { id: 1, nome: 'vestido', preco: 'R$ 100,00', imagem: '/img/roupa.png' },   //criando a fun
        { id: 2, nome: 'Calça', preco: 'R$ 70,00', imagem: '' },
        { id: 3, nome: 'camisa', preco: 'R$ 60,00', imagem: '' },
        { id: 4, nome: 'tenis', preco: 'R$ 160,00', imagem: '' },
        { id: 5, nome: 'saia', preco: 'R$ 70,00', imagem: ''},
        { id: 6, nome: 'bermuda', preco: 'R$ 40,00', imagem: '' },

    ];

    const [carrinho, setCarrinho] = useState([]);

    const adicionarAoCarrinho = (roupa) => {
        setCarrinho([...carrinho, roupa]);
    };

    return (
        <div className="catalogo">
            {roupas.map(roupa => (
                <Painel key={roupa.id} roupa={roupa} adicionarAoCarrinho={adicionarAoCarrinho} />
            ))}
        </div>
    );
}