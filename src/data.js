export const LS_KEYS = {
  USERS: "rm_users_v1",
  RESERVATIONS: "rm_reservations_v1",
  MENU: "rm_menu_v1"
};

// Cardápio com espaço para imagens
const sampleMenu = [
  { 
    id: "m1",
    name: "Prato do Dia — Filé com batata",
    desc: "Carne grelhada, batata rústica",
    price: "R$ 28,90",
    img: "https://sabores-new.s3.amazonaws.com/public/2024/11/file-com-batatas-coradas.jpg"
  },
  { 
    id: "m2",
    name: "Risoto de Cogumelos",
    desc: "Risoto cremoso com mix de cogumelos",
    price: "R$ 32,50",
    img: "https://guiadacozinha.com.br/wp-content/uploads/2023/04/Risoto-de-cogumelos.jpg"
  },
  { 
    id: "m3",
    name: "Salada Tropical",
    desc: "Alface, frutas e molho especial",
    price: "R$ 21,00",
    img: "https://www.receiteria.com.br/wp-content/uploads/salada-tropical-simples.jpg"
  }
];

export function ensureInitialData(){
  if(!localStorage.getItem(LS_KEYS.MENU)){
    localStorage.setItem(LS_KEYS.MENU, JSON.stringify(sampleMenu));
  }
  if(!localStorage.getItem(LS_KEYS.USERS)){
    localStorage.setItem(LS_KEYS.USERS, JSON.stringify([]));
  }
  if(!localStorage.getItem(LS_KEYS.RESERVATIONS)){
    localStorage.setItem(LS_KEYS.RESERVATIONS, JSON.stringify([]));
  }
}

export function getMenu(){
  return JSON.parse(localStorage.getItem(LS_KEYS.MENU) || "[]");
}

export function getUsers(){
  return JSON.parse(localStorage.getItem(LS_KEYS.USERS) || "[]");
}

export function saveUser(user){
  const arr = getUsers();
  arr.push(user);
  localStorage.setItem(LS_KEYS.USERS, JSON.stringify(arr));
}

export function getReservations(){
  return JSON.parse(localStorage.getItem(LS_KEYS.RESERVATIONS) || "[]");
}

export function saveReservation(res){
  const arr = getReservations();
  arr.push(res);
  localStorage.setItem(LS_KEYS.RESERVATIONS, JSON.stringify(arr));
}
