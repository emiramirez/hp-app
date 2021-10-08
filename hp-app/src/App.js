import logo from './files/images/logo.png';
import './styles.scss';
import Title from "./components/Title"
import Button from './components/Button';
import Card from './components/Card';
import MenuTop from './components/MenuTop';
import Favorites from './components/Favorites';
import { useState, useEffect } from 'react';
import {helpHttp} from "./helpers/helper"
function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [data,setData] =useState([])
  const handleDrawerToggle =()=> {
     setMobileOpen(!mobileOpen)
      console.log("chenged :-")
  };
  let api=helpHttp();
  let source="http://localhost:8000/characters"

  useEffect(() => {
    
   api.get(source).then((res)=>{
     console.log(res)
     
     if(!res.error){
       setData(res)
      }else{
        setData(null)
      }
   });
  }, []);
  

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
          {data[0].map?(data[0].map((name) =>
    <Card key={name.toString()} homeHouse={name.house} image={name.image} name={name.name} student={name.hogwartsStudent} alive={name.alive} />)):(<div>no trae</div>)}
 
  )
          {/* <Card homeHouse="sliherin"/>
          <Card homeHouse="gryffindor"/>
          <Card homeHouse="ravenclaw"/>
          <Card homeHouse="hufflepuff"/> */}
            
          </div>
      </div>
    </div>

  );
}

export default App;
