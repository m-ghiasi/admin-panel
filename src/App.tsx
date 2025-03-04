import { Route, Routes, useLocation } from "react-router";
import "./App.css";

import Login from "./pages/Login";

import Services from "./pages/Services";
import Users from "./pages/Users";
import NewUser from "./pages/NewUser";
import MyUser from "./pages/MyUser";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Aside from "./components/Aside";

function App() {

  const location = useLocation()
  const hideAside:boolean = location.pathname ==="/";
  return (
    
      <div className="overflow-x-hidden flex h-screen flex-col md:flex-row">
        {!hideAside && <Aside />}
        <Routes>
          {/* login page */}
          <Route path="/" element={<Login />} />

          {/* layout-> dashboard incloude aside */}
          <Route path="/Dashboard" element={<Dashboard />}>
          </Route>
          {/* <Route path="dashboard">
          <Route index element={<Dashboard />}></Route>
        </Route> */}

          <Route path="services" element={<Services />}></Route>
          <Route path="users" element={<Users />}></Route>

          <Route path="newuser">
            <Route index element={<NewUser />}></Route>
            <Route path="myuser" element={<MyUser />}></Route>
          </Route>
          <Route path="profile" element={<Profile />}></Route>
          
        </Routes>
      </div>
    
  );
}

export default App;
