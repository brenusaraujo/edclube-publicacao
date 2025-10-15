import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Produto.css';
import ImagemCamisa1 from '../Assets/camisa1.jpg';
import ImagemCamisa2 from '../Assets/camisa2.jpg';

const produtos = {
    '1': {
        nome: 'Produto de Teste 1',
        imagem: ImagemCamisa1,
        descricao: 'Esta é a descrição para o produto de teste 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        preco: 'R$ 49,99'
    },
    '2': {
        nome: 'Produto de Teste 2',
        imagem: ImagemCamisa2,
        descricao: 'Esta é a descrição para o produto de teste 2. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie.',
        preco: 'R$ 59,99'
    }
};

const Produto = () => {
    const { id } = useParams();
    const produto = produtos[id];

    if (!produto) {
        return (
            <div className="produto-nao-encontrado">
                <h1>Produto Não Encontrado</h1>
                <p>O produto que você está a procurar não existe.</p>
                <Link to="/">Voltar para a Página Inicial</Link>
            </div>
        );
    }

    return (
        <div className="produto-container">
            <div className="produto-card">
                <div className="produto-imagem-container">
                    <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
                </div>
                <div className="produto-detalhes">
                    <h1 className="produto-nome">{produto.nome}</h1>
                    <p className="produto-preco">{produto.preco}</p>
                    <p className="produto-descricao">{produto.descricao}</p>
                    <button className="produto-botao-comprar">Adicionar ao Carrinho (Teste)</button>
                </div>
            </div>
        </div>
    );
};

export default Produto;
