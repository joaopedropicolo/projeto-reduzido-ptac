import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className="note">Telefone: (67) 99609-0360 - Rua Luane Sena Picolo 666 - Rio De Janeiro - RJ</div>
        <div style={{marginTop:6}}>&copy; {new Date().getFullYear()} Trio Parada Dura </div>
      </div>
    </footer>
  );
}
