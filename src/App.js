import Header from "./components/Header/Header";

import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import { Route, Routes } from "react-router-dom";
import Service from "./components/Service/Service";
import Reg from "./components/Reg/Reg";
import SignIn from "./components/Signin/Signin";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/service"
          element={
            <RequireAuth>
              <Service />
            </RequireAuth>
          }
        />
        <Route path="/reg" element={<Reg />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
