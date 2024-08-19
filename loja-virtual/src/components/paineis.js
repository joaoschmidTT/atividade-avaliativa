import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Painel({ roupa }) {
    const navigate = useNavigate();

    const adicionarAoCarrinho = () => {
        
        navigate('/carrinho'); 
    };

    return (
        <div className="painel">
            <img src={roupa.imagem} alt={roupa.nome} />
            <h3>{roupa.nome}</h3>
            <p>{roupa.preco}</p>
            <button onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</button>
        </div>
    );
}