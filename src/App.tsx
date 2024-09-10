import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { DefaultLayout } from "./paginas/DefaultLayout";
import { Configuracao } from "./paginas/Configuracao";
import { Sorteio } from "./paginas/Sorteio";


function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Configuracao />} />
            <Route path="sorteio" element={<Sorteio />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
