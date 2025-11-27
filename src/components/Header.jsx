import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">

          <div>
            <div style={{fontWeight:800}}>Reservas</div>
            <div style={{fontSize:12,color:"#666"}}>Faça sua reserva online</div>
          </div>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/cardapio">Cardápio</Link>
          <Link to="/reservas">Reservas</Link>
          <Link to="/minhas-reservas">Minhas Reservas</Link>
          <Link to="/cadastro">Cadastro</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}