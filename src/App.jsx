import "./App.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import BemVindo from "./componentes/BemVindo";
import SecaoHabitos from "./componentes/SecaoHabitos";
import HabitList from "./componentes/HabitList";
import { HabitsProvider } from "./contexts/HabitsContext";
import Contador from "./componentes/contador";

function App() {
  return (
    <HabitsProvider>
      <div>
        <Header
          titulo="My Daily Habits"
          descricao="Construindo uma rotina melhor"
        />
        <BemVindo nomeUsuario="turma iteam" />
        <SecaoHabitos titulo="Meus Hábitos" />
        <HabitList />
        <Footer />
        <Contador />
      </div>
    </HabitsProvider>
  );
}

export default App;
