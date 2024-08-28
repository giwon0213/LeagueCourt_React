import { BrowserRouter, Route, Routes } from "react-router-dom";


import Layout from "./layouts/Layout";
import MainPage from "./pages/MainPage";
import "./layouts/Default.css"
import Login from "./pages/Login";
import Signup from "./pages/SignUp";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route path="/" element={<MainPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<Signup />}></Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;