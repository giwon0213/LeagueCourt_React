import { BrowserRouter, Route, Routes } from "react-router-dom";


import Layout from "./layouts/Layout";
import MainPage from "./pages/MainPage";
import "./layouts/Default.css"


function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="/" element={<Layout />}>

          <Route path="/" element={<MainPage />}></Route>
          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;