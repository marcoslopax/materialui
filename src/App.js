import React from "react";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/tarefa/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <ListarTarefa />
        </div>
  );
}

export default App;
