import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Coffee from './pages/Coffee';
import Maker from './pages/Maker';
import Form from './pages/Form';
import Support from './pages/Support';

function App() {
  return (
    <>
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/contact' element={<Contact />} /> 
      <Route path='/portfolio' element={<Portfolio />} /> 
      <Route path='/portfolio/content/coffee' element={<Coffee />} /> 
      <Route path='/portfolio/content/maker' element={<Maker />} /> 
      <Route path='/portfolio/content/form' element={<Form />} /> 
      <Route path='/portfolio/content/support' element={<Support />} /> 
    </Routes>
     </Router>
    </>
  )
}

export default App;
