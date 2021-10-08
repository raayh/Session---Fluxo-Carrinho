import { useEffect, useState } from "react";
import { Container} from './styled';

export default function Contador(props) {
    const [qtd, setQtd] = useState(props.value);
  
    return (
        <Container>
          <div className="menos" onClick={decrementar}>
            -
          </div>
    
          <div className="quantidade">
            {qtd}
          </div>
    
          <div className="mais" onClick={incrementar}>
            +
          </div>
        </Container>
      )
}