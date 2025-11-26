import React from "react";
import { getMenu } from "../data";

export default function Cardapio(){
  const menu = getMenu();

  return (
    <div>
      <h2>Cardápio</h2>
      <div className="grid">
        {menu.map(item => (
          <div key={item.id} className="menu-item card">
            <h3>{item.name}</h3>
            <div className="small">{item.desc}</div>
            <div style={{marginTop:8, fontWeight:700}}>{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
