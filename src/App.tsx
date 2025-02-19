import { Route, Routes } from "react-router";
import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Users from "./pages/Users";
import NewUser from "./pages/NewUser";
import MyUser from "./pages/MyUser";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      {/* login page */}
      <Route path="/" element={<Login />} />

      {/* layout-> Home incloude aside */}
      <Route path="/Home" element={<Home />}>
        <Route index element={<div>hi home index</div>}></Route>

        <Route path="services" element={<Services />}></Route>
        <Route path="users" element={<Users />}></Route>

        <Route path="newuser" >
          <Route index element={<NewUser />}></Route>
          <Route path="myuser" element={<MyUser />}></Route>
        </Route>
        <Route path="profile" element={<Profile />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
