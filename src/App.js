import logo from './files/images/logo.png';
import './styles.scss';
import Title from "./components/Title"
import Button from './components/Button';
import Card from './components/Card';
import MenuTop from './components/MenuTop';
import Favorites from './components/Favorites';
import { useState, useEffect } from 'react';
import {helpHttp} from "./helpers/helper"
import Add from './components/Add';
import { Provider } from 'react-redux';
import store from "./store"

  let source="http://localhost:8000/characters"
function App() {
  const [menu, setMenu] = useState(false);
  const [data,setData] =useState([])
  const [form, setForm]=useState(false)
  const changeForm =()=> {
    setForm(!menu)
 };
  const handleDrawerToggle =()=> {
     setMenu(!menu)
  };
  const getStudents=()=>{
    fetch(source)
    .then(response => response.json())
    .then(data =>(
      setData(data[0].filter(name=>name.hogwartsStudent==true))
      
      )
    ) 
  }
  const getStaff=()=>{
    fetch(source)
    .then(response => response.json())
    .then(data =>(
      setData(data[0].filter(name=>name.hogwartsStaff==true))
      )
    ) 
  }

  useEffect(() => {
  fetch(source)
  .then(response => response.json())
  .then(data =>(
    setData(data[0])
    )
  ) 

  }, []);
  return (
    <Provider store={store}>
    <div className="container"> 
    <MenuTop id="mybutton"action={handleDrawerToggle} action2={()=>setForm(true)}/>
      {form ?<Add form={form} onClose={()=>setForm(false)} /> :null}
      <div className="box">
        {menu ?<Favorites /> :null}
      </div>  
      <div className="wrapper">
        <img src={logo} className="harry" alt="logo"  />
        <Title title="Selecciona tu filtro"/>
        <div className="container__buttons">
          <Button title="ESTUDIANTES" onClick={getStudents} />
          <Button title="STAFF" onClick={getStaff}/>
        </div>
        
        <div className="container__cards">
          {data.map?(data.map((name, index) =>   
          <Card key={index} props={name}/>)):(<div>no trae</div>)} 
        </div>
      </div>
    </div>
    </Provider>
  );
}
export default App;
