
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Poneys from './pages/Poneys';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/poneys" element={<Poneys/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
