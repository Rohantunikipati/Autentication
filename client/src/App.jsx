import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Header from "./componets/Header";
import About from "./Pages/About";
import Private_Route from "./componets/Private_Route";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/about" element={<About />} exact />
        <Route element={<Private_Route />}>
          <Route path="/profile" element={<Profile />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
