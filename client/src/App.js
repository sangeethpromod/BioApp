import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Frontpage from "./pages/frontpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App