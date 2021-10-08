import logo from './files/images/logo.png';
import './styles.scss';
import Title from "./components/Title"
import Button from './components/Button';
import Card from './components/Card';
import MenuTop from './components/MenuTop';
import Favorites from './components/Favorites';
import { useState } from 'react';
function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle =()=> {
     setMobileOpen(!mobileOpen)
      console.log("chenged :-")
  };
  

  return (
    <div className="container"> 
      <MenuTop />  
      <div className="box">
      <Favorites active={mobileOpen}/>
     
      </div>  
      
      
      <div className="wrapper">
        <img src={logo} className="harry" alt="logo"  />
        <Title title="Selecciona tu filtro"/>
        <div className="container__buttons">
          <Button title="ESTUDIANTES"/>
          <Button title="STAFF"/>
        </div>
        <div className="container__cards">
          <Card homeHouse="sliherin"/>
          <Card homeHouse="gryffindor"/>
          <Card homeHouse="ravenclaw"/>
          <Card homeHouse="hufflepuff"/>
            
          </div>
      </div>
    </div>

  );
}

export default App;
