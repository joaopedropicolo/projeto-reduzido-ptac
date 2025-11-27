import React, { useState } from "react";
import { saveUser, getUsers } from "../data";

export default function Cadastro(){
  const [form, setForm] = useState({
    nome:"", sobrenome:"", email:"", rua:"", numero:"", bairro:"", cidade:"", uf:""
  });
  const [msg,setMsg] = useState("");

  function updateField(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    const users = getUsers();
    if(users.some(u => u.email === form.email)){
      setMsg("Email já cadastrado.");
      return;
    }
    saveUser({...form, id: Date.now()});
    setMsg("Cadastro realizado com sucesso!");
    setForm({nome:"", sobrenome:"", email:"", rua:"", numero:"", bairro:"", cidade:"", uf:""});
  }

  return (
    <div className="card">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="field">
            <label>Nome</label>
            <input name="nome" value={form.nome} onChange={updateField} required />
          </div>
          <div className="field">
            <label>Sobrenome</label>
            <input name="sobrenome" value={form.sobrenome} onChange={updateField} required />
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label>E-mail</label>
            <input name="email" type="email" value={form.email} onChange={updateField} required />
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label>Rua</label>
            <input name="rua" value={form.rua} onChange={updateField} required />
          </div>
          <div className="field">
            <label>Nº</label>
            <input name="numero" value={form.numero} onChange={updateField} required />
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label>Bairro</label>
            <input name="bairro" value={form.bairro} onChange={updateField} required />
          </div>
          <div className="field">
            <label>Cidade</label>
            <input name="cidade" value={form.cidade} onChange={updateField} required />
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label>UF</label>
            <input name="uf" value={form.uf} onChange={updateField} required />
          </div>
        </div>

        <button className="btn" type="submit">Cadastrar</button>
        {msg && <p className="small" style={{marginTop:10}}>{msg}</p>}
      </form>
    </div>
  );
}
