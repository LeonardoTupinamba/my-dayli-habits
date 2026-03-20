import { Routes, Route } from "react-router-dom";
import PaginaInicio from "./pages/PaginaInicio";
import PaginaHabitos from "./pages/PaginaHabitos";
import PaginaDetalhes from "./pages/PaginaDetalhes";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada";
import "./App.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/habitos" element={<PaginaHabitos />} />
        <Route path="/habito/:id" element={<PaginaDetalhes />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
