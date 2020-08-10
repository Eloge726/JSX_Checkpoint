import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css'

function App() {
  return (<div>
    <div style = {{border: "solid 1px black", maxWidth: "100vw"}}>   
 
    <h1 className ="title red" > Votre nom ici </h1>   


         <img src={logo} alt='im'/> 

         <img src='logo512.png' alt='im2'/>   

  </div>   

  <video width="320" height = "240" contrôles >   

      <source src = "myVideo.mp4" type = "video / mp4"/> 

  </video>
  </div>
  );
}

export default App;
