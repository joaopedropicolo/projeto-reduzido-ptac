import React, { useState } from "react";
import { getUsers } from "../data";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");
  const [msg,setMsg] = useState("");
  const nav = useNavigate();

  function handleLogin(e){
    e.preventDefault();
    const users = getUsers();
    const user = users.find(u => u.email === email);
    if(!user){
      setMsg("Email não cadastrado. Faça um cadastro primeiro.");
      return;
    }
    // versão leve: senha não é verificada (pode comparar se quiser)
    setMsg("Login efetuado com sucesso!");
    // salvar usuário "logado" no sessionStorage
    sessionStorage.setItem("rm_current_user", JSON.stringify(user));
    setTimeout(()=> nav("/"), 600);
  }

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-row">
          <div className="field">
            <label>Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label>Senha</label>
            <input value={senha} onChange={e=>setSenha(e.target.value)} type="password" required />
          </div>
        </div>

        <button className="btn" type="submit">Acessar</button>
        {msg && <p className="small" style={{marginTop:10}}>{msg}</p>}
      </form>
    </div>
  );
}
