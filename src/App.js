// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light'); // weather dark mode is enabled or not

  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= 'grey';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
    }

  }

  return (
    <>
{/* <Navbar title= "TextUtlis"  AboutText= "AboutTextUtlis" /> */}
<Navbar title= "TextUtlis" mode={mode} toggleMode= {toggleMode} />

<div className="container my-3" >
<TextForm heading= "Enter the text To analyze below" />
{/*<About/> */}
</div>

    </>
  );
}

export default App;
