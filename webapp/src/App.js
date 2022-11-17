import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./routes/InicioView";
import Header from "./components/Header/Header";
import NovedadesView from "./routes/NovedadesView";
import UltimasOfertasView from "./routes/UltimasOfertasView";
import SobreNosotrosView from "./routes/SobreNosotrosView";
import AutosView from "./routes/PostView";
import LoginView from "./routes/LoginView";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/novedades" element={<NovedadesView />} />
        <Route path="/ultimas_ofertas" element={<UltimasOfertasView />} />
        <Route path="/sobre_nosotros" element={<SobreNosotrosView />} />
        <Route path="/autos/:id" element={<AutosView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
