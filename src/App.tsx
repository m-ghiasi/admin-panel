import { Route, Routes } from "react-router";
import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
  return (
    <Routes>
      {/* login page */}
      <Route path="/" element={<Login />} />

      {/* layout-> Home incloude aside */}
      <Route path="/Home" element={<Home />}>
        <Route index element={<div>hi home index</div>}></Route>

        <Route path="services" element={<Services />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
