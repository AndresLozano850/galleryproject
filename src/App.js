import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bichon_maltes from './components/Bichon_maltes'
import Bulldog from './components/Bulldog'
import Chihuahua from './components/Chihuahua'
import Chow_chow from './components/Chow_chow'
import Cocker_spaniel from './components/Cocker_spaniel'
import Doberman from './components/Doberman'
import Golden_retriever from './components/Golden_retriever'
import Husky_siberiano from './components/Husky_siberiano'
import Labrador from './components/Labrador'
import Schnauzer from './components/Schnauzer'
import Navigation from './components/Navigation';
function App() {
  return (
    <Router>
      <div className='container'>
        <h1 id="title" className='text-center my-3'>Galeria Razas de Perros</h1>
      </div>
      <Routes>
        <Route path='/bichon_maltes' element={<Bichon_maltes className="image-size" />}/>
        <Route path='/bulldog' element={<Bulldog className="image-size" />}/>
        <Route path='/chihuahua' element={<Chihuahua className="image-size" />}/>
        <Route path='/chow_chow' element={<Chow_chow className="image-size" />}/>
        <Route path='/cocker_spaniel' element={<Cocker_spaniel className="image-size" />}/>
        <Route path='/doberman' element={<Doberman className="image-size" />}/>
        <Route path='/golden_retriever' element={<Golden_retriever className="image-size" />}/>
        <Route path='/husky_siberiano' element={<Husky_siberiano className="image-size" />}/>
        <Route path='/labrador' element={<Labrador className="image-size" />}/>
        <Route path='/schnauzer' element={<Schnauzer className="image-size" />}/>
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
