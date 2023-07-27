import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </>
  );
}

export default App;
