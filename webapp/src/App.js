import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainView from "./routes/MainView";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainView />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
