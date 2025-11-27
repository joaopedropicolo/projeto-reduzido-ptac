import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div>
      <div className="hero card">
        <h1>Bem-vindo ao Reservas de Mesas</h1>
        <p className="small">Reserve sua mesa de forma rápida e segura.</p>
        <div style={{marginTop:12}}>
          <Link to="/reservas" className="btn">Fazer Reserva</Link>
          <Link to="/cardapio" style={{marginLeft:10}} className="btn secondary">Ver Cardápio</Link>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Como funciona</h3>
          <p className="small">Preencha o formulário de reserva, confirme e nossa equipe validará — tudo localmente para esta versão.</p>
        </div>

        <div className="card">
          <h3>Contato</h3>
          <p className="small">Telefone: (99) 99999-9999</p>
        </div>
      </div>
    </div>
  );
}
