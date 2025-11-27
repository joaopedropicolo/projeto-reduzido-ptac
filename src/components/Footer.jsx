import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className="note">xxxxxx (99) 99999-9999 - Rua Exemplo, 123 - Cidade - UF</div>
        <div style={{marginTop:6}}>&copy; {new Date().getFullYear()} Reservas de Mesas</div>
      </div>
    </footer>
  );
}
