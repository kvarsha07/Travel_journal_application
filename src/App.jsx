import React from 'react'
import './App.css'
import {BrowserRouter as Router ,Routes, Route,Link} from 'react-router-dom'
import Home from './Component/Home'
import AddEntries from './Component/AddEntries'; // Check this path
import ViewEntries from './Component/ViewEntries'
import Navbar from './Component/Navbar';

function App() {
  

  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddEntries />} />
         <Route path="/view" element={<ViewEntries/>}/>
      </Routes>
     
    </Router>
    
  )


}
   

export default App
