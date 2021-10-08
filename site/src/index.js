import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import './styles.css'
import App from './infox/home'
import DetalheProduto from './infox/ProductDetail'
import Carrinho from './infox/Cart'


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />
        </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);