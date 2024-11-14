import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState("")
  const [isShow, setShow] = useState({message : ""})
  const handler = () => {
    if (state.toLocaleLowerCase() === "коля"){
      setShow({message : "Нет, но она его Хозяйка!!"})
    }
    else{

      if (state.toLocaleLowerCase() === "оля"){
        setShow({message : "Да!!, она самая лучшая!"})
      }
      else{
        setShow(null)
      }
    }
    
  }
  console.log(isShow)
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <h2 className='title'>Кто лучший??</h2>
          <input value={state} onChange={(e) => {setState(e.target.value)}} className='input' />
          <button className='button' onClick={handler}>Проверить</button>
          {state.toLocaleLowerCase() === "коля" && <p className='is-show'>{"Нет, но она его Хозяйка!!"}</p>}
          {state.toLocaleLowerCase() === "оля" && <p className='is-show'>{"Да!!, она самая лучшая"}</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
