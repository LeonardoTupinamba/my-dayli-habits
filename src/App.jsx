import Contador from "./componentes/contador";
import Header from "./componentes/Header";
import BemVindo from "./componentes/Bemvindo";
import Footer from "./componentes/Footer";
import SecaoHabitos from "./componentes/SecaoHabitos";
import HabitList from "./componentes/HabitList";
import "./App.css";

function App() {
  const habits = [
    { id: 1, titulo: "Exercício", meta: 5, ativo: true, diasFeitos: 5 },
    { id: 2, titulo: "Leitura", meta: 7, ativo: true, diasFeitos: 3 },
    { id: 3, titulo: "Meditação", meta: 7, ativo: false, diasFeitos: 0 },
    { id: 4, titulo: "Hidratação", meta: 7, ativo: true, diasFeitos: 6 },
  ];

  return (
    <div>
      <Contador />
      <Header />
      <BemVindo nomeUsuario="turma iteam" totalHabitos={habits.length} />
      <SecaoHabitos titulo="Meus Hábitos">
        <HabitList habits={habits} />
      </SecaoHabitos>
      <Footer />
    </div>
  );
}

/*function App() {
  return (
    <div>
      <h1>My Daily Habits</h1>
      <p>Gerencie seus hábitos diários de forma simples e visual</p>
      <Footer />
    </div>
  );
}*/

export default App;
