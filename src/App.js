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
        <Route path='/bichon_maltes' Component={Bichon_maltes}/>
        <Route path='/bulldog' Component={Bulldog}/>
        <Route path='/chihuahua' Component={Chihuahua}/>
        <Route path='/chow_chow' Component={Chow_chow}/>
        <Route path='/cocker_spaniel' Component={Cocker_spaniel}/>
        <Route path='/doberman' Component={Doberman}/>
        <Route path='/golden_retriever' Component={Golden_retriever}/>
        <Route path='/husky_siberiano' Component={Husky_siberiano}/>
        <Route path='/labrador' Component={Labrador}/>
        <Route path='/schnauzer' Component={Schnauzer}/>
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
