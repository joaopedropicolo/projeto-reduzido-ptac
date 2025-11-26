import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Cardapio from "./pages/Cardapio";
import Reservas from "./pages/Reservas";
import MinhasReservas from "./pages/MinhasReservas";
import { ensureInitialData } from "./data";

ensureInitialData(); // garante menu de exemplo ao iniciar

export default function App(){
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/minhas-reservas" element={<MinhasReservas />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
