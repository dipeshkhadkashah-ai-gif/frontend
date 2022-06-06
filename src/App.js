import React from "react"; //importing react from react
import "./App.css"; //importing app.css for stylesheets
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; //import router-dom for routers,routes and route
import { Navbar } from "./Components"; //importing navbar
import { Home, About, Gallery, Contact } from "./Pages"; //importing home from pages
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/SignUp";
import Booking from "./Pages/Booking/booking";
import Reservations from "./Pages/Reservations/Reservations";
import Dashboard from "./Components/Admin/Dashboard";
// import ReactYouTubeExample from './Pages/Home/home';  //using a background youtube video player

const App = () => {
  //creating a function for App
  const user = localStorage.getItem("token");

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <ReactYouTubeExample videoId='4OiXfDdbtnM' /> */}
          {user && <Route path="/" exact element={<Home />} />}
          <Route path="/about" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/reservation" element={<Reservations />} />
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
