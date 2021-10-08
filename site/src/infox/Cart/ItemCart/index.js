import Cookie from 'js-cookie'
import { useState } from 'react';

import { Container, RemoverIcon } from './styled'

export default function CarrinhoItem(props) {
// Carrega a Variável de Estado com o parâmetro recebido da tela Carrinho
    const [produto, setProduto] = useState(props.info);
  
return (
    <Container>
      
      <div>
        <img className="capa" src={produto.imagem} alt="" />
        <Contador onChange={alterarQtd} value={produto.qtd} />
      </div>

      <div className="titulo"> 
        {produto.titulo} 
      </div>
      
      <div className="preco"> 
        <span>Preço unitário</span> <br /> 
        {produto.preco} 
      </div>

      <div className="qtd"> 
        <span>Qtd</span> <br /> 
        {produto.qtd} 
      </div>

      <div className="remover"> <RemoverIcon onClick={remover} /> </div>

    </Container>
  )
}