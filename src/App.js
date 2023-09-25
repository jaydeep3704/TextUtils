import "./App.css"
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React,{useState} from 'react'
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);
  const[btnColor,setBtnColor]=useState("primary");
 let showAlert=(message,type)=>{
    setAlert(
      {
        message:message,
        type:type
      } )
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }

  
  



  let toggleMode=(cls)=>{
    document.body.className="";
    document.body.classList.add(`bg-${cls}`);
    if(cls==='primary')
    {
      setBtnColor("light")
    }
    else if(cls==='success' || cls==='danger')
    {
      setBtnColor('primary')
    }
    
   
    if(mode==='light')
    {
      console.log(cls)
      setMode('dark');
      document.title="TextUtils-Dark Mode"
      document.body.style.color='white'
      showAlert("Dark mode is enabled","success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      document.title="TextUtils-Light Mode"
      showAlert("Light mode is enabled","success")
    }
  }

  return (
    
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div style={{height:"60px", width:'100%'}}><Alert alert={alert}/></div>
      
     
        <Routes>
          <Route exact path="/About" element={<div className="container"><About/></div>}/>
          <Route exact path="/" element={<div className="container"><TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} btnColor={btnColor}/>   </div>}/>
        </Routes>
        </Router>
      
  );
}

export default App;
