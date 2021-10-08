import { Link } from "react-router-dom";
import { Container } from './styled'
import { useEffect, useState } from "react"

import Cookie from 'js-cookie'
import CarrinhoItem from './ItemCart'

export default function Carrinho() {
    const [produtos, setProdutos] = useState([]);

    return (
        <Container>
          <h1> Carrinho </h1>
    
          <Link to="/"> Voltar </Link>
    
          <div className="itens">
            {produtos.map(item => 
                <CarrinhoItem key={item.id} 
                    info={item} 
                    onUpdate={alterarProduto} 
                    onRemove={removerProduto} />
            )}
          </div>
    
        </Container>
      )
    
    
    }