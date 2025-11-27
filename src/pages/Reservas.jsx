import React, { useState } from "react";
import { saveReservation } from "../data";
import { useNavigate } from "react-router-dom";

export default function Reservas(){
  const [form, setForm] = useState({
    data:"", horario:"", nome:"", contato:"", qtde:"", mesa:""
  });
  const [msg,setMsg] = useState("");
  const nav = useNavigate();

  function updateField(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    // validações mínimas
    if(!form.data || !form.horario || !form.nome || !form.contato || !form.qtde){
      setMsg("Preencha todos os campos obrigatórios.");
      return;
    }
    // criar número da reserva e salvar
    const reserva = {
      id: Date.now(),
      numeroReserva: Math.floor(1000 + Math.random()*9000),
      mesa: form.mesa || "A definir",
      data: form.data,
      horario: form.horario,
      nome: form.nome,
      contato: form.contato,
      qtde: form.qtde
    };
    saveReservation(reserva);
    setMsg(`Reserva confirmada! Nº ${reserva.numeroReserva}`);
    setForm({data:"", horario:"", nome:"", contato:"", qtde:"", mesa:""});
    setTimeout(()=> nav("/minhas-reservas"), 1200);
  }

  return (
    <div className="card">
      <h2>Fazer Reserva</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="field">
            <label>Data da reserva</label>
            <input type="date" name="data" value={form.data} onChange={updateField} required />
          </div>
          <div className="field">
            <label>Horário</label>
            <input type="time" name="horario" value={form.horario} onChange={updateField} required />
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label>Nome do cliente</label>
            <input name="nome" value={form.nome} onChange={updateField} required />
          </div>
          <div className="field">
            <label>Contato</label>
            <input name="contato" value={form.contato} onChange={updateField} required placeholder="(99) 99999-9999" />
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label>Qtde de pessoas</label>
            <input name="qtde" type="number" min="1" value={form.qtde} onChange={updateField} required />
          </div>
          <div className="field">
            <label>Nº da mesa (opcional)</label>
            <input name="mesa" value={form.mesa} onChange={updateField} />
          </div>
        </div>

        <button className="btn" type="submit">Confirmar Reserva</button>
        {msg && <p className="small" style={{marginTop:10}}>{msg}</p>}
      </form>
    </div>
  );
}
