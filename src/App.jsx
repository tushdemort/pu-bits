import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PS2 from './Components/PS2'
import Company from './Components/Company'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="ps2" element={<PS2 />} />
          <Route path="c" element={<Company />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App
