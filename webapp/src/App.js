import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemCar from "./components/itemCar/itemCar";
import MainView from "./routes/MainView";
import styled from "styled-components";
import Header from "./components/Header/Header";

const Main = styled.div`
  min-width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Header />
        <Routes>
          <Route path="/main" element={<MainView />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}
export default App;
