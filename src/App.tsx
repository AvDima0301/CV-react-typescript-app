import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Example from "./components/Example";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/" style={{margin: '10px'}}>Home</Link>
        <Link to="/about_me" style={{margin: '10px'}}>About me</Link>
        <Link to="/example" style={{margin: '10px'}}>Example</Link>
      </div>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/about_me" element={<AboutMe />}/>
        <Route path="/example" element={<Example />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;