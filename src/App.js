import React, { useContext } from "react";
import { Home } from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Reclamos from "./components/Reclamos/Reclamos";
import NuevoReclamo from "./components/Reclamos/NuevoReclamo";
import ListaEdificios from "./pages/edificio/ListaEdificios";
import UnidadesEdificio from "./pages/unidad/UnidadesEdificio";
import ListarPersonas from "./pages/persona/ListarPersonas";
import ReclamosAdmin from "./pages/reclamo/ReclamosAdmin";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <Router>
      <div className="container">
        <MainHeader />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && (
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/reclamos" element={<Reclamos />} />
              <Route exact path="/reclamo" element={<NuevoReclamo />} />

              <Route exact path="/ReclamosAdmin" element={<ReclamosAdmin />} />

              <Route
                exact
                path="/listaEdificios"
                element={<ListaEdificios />}
              />
              <Route
                exact
                path="/edificio/:codigo/unidad"
                element={<UnidadesEdificio />}
              />

              <Route
                exact
                path="/edificio/:codigo/unidad/persona/:identificador/:codigo/:piso/:numero"
                element={<ListarPersonas />}
              />
            </Routes>
          )} 
        </main>
      </div>
    </Router>
  );
}

export default App;
