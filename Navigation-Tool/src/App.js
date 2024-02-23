import React from 'react';
import Navbar from './components/Navbar'; 
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ShortestPath from './components/ShortestPath/ShortestPath';
import Blockers from './components/Blockers/Blockers'
 

function App() { 

  return ( 
    //Routing through all the components
    <Router> 
      <Navbar /> 
      <Routes> 
        <Route path='/' element={<ShortestPath />} /> 
        <Route path='/blockers' element={<Blockers />} /> 
        <Route path='/maps' element={<ShortestPath />} /> 
      </Routes> 
    </Router> 
    
  ); 
} 

export default App; 
