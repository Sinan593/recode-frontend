import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CodeConvertor from './components/CodeConvertor';
import CliGuide from './components/CliGuide';
import Documentation from './components/Documentation';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/code-convertor" element={<CodeConvertor />} />
          <Route path="/cli-guide" element={<CliGuide />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

