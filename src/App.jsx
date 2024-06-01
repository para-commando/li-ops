import './App.css';
import React from 'react'
import Navbar from './componets/NavbarComponent';
import BodyComponent from './componets/BodyComponent';
import FooterComponent from './componets/FooterComponent'

function App() {
 
  return (
    <>
      <Navbar />
      <BodyComponent/>
   <FooterComponent />
    </>
  );
}

export default App;
