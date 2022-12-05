import React, { useContext } from "react";
import { Home } from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Reclamos from "./components/Reclamos/Reclamos";
import NuevoReclamo from "./components/Reclamos/NuevoReclamo";

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
            </Routes>
<<<<<<< HEAD
            )}  
=======
          )}
>>>>>>> 2e46ac9ebcaf70c29ff04cd39a55aa128f572048
        </main>
      </div>
    </Router>
  );
}

export default App;
