import React, { useState, useEffect } from "react";
import { getReservations } from "../data";

export default function MinhasReservas(){
  const [reservas, setReservas] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [resultado, setResultado] = useState([]);

  useEffect(()=> {
    setReservas(getReservations());
    setResultado(getReservations());
  }, []);

  function handleConsultar(e){
    e.preventDefault();
    const q = filtro.trim().toLowerCase();
    if(!q){
      setResultado(reservas);
      return;
    }
    const r = reservas.filter(r => 
      (r.mesa && r.mesa.toString().toLowerCase().includes(q)) ||
      r.numeroReserva && r.numeroReserva.toString().toLowerCase().includes(q)
    );
    setResultado(r);
  }

  return (
    <div>
      <div className="card">
        <h2>Minhas Reservas</h2>
        <form onSubmit={handleConsultar}>
          <div className="form-row">
            <div className="field">
              <label>Nº da mesa ou Nº da reserva</label>
              <input value={filtro} onChange={e=>setFiltro(e.target.value)} placeholder="Ex.: 12 ou 3456" />
            </div>
            <div style={{display:"flex", alignItems:"flex-end"}}>
              <button className="btn" type="submit">Consultar</button>
            </div>
          </div>
          <div className="small note">Deixe em branco e clique Consultar para ver todas as reservas.</div>
        </form>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Nº Mesa</th>
              <th>Nº Reserva</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Nome</th>
              <th>Contato</th>
              <th>Qtde</th>
            </tr>
          </thead>
          <tbody>
            {resultado.length === 0 && (
              <tr><td colSpan="7" className="center small">Nenhuma reserva encontrada.</td></tr>
            )}
            {resultado.map(r => (
              <tr key={r.id}>
                <td>{r.mesa}</td>
                <td>{r.numeroReserva}</td>
                <td>{r.data}</td>
                <td>{r.horario}</td>
                <td>{r.nome}</td>
                <td>{r.contato}</td>
                <td>{r.qtde}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
