import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./routes/InicioView";
import Header from "./components/Header/Header";
import NovedadesView from "./routes/NovedadesView";
import UltimasOfertasView from "./routes/UltimasOfertasView";
import SobreNosotrosView from "./routes/SobreNosotrosView";
import AutosView from "./routes/PostView";

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
      </Routes>
    </BrowserRouter>
  );
}
export default App;
