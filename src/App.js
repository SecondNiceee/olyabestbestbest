import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState("")
  const [isShow, setShow] = useState({message : ""})
  const handler = () => {
    if (state.toLocaleLowerCase().includes("коля")){
      setShow({message : "Нет, но она его Хозяйка!!"})
    }
    else{

      if (state.toLocaleLowerCase().includes("оля")){
        setShow({message : "Да!!, она самая лучшая!"})
      }
      else{
        setShow(null)
      }
    }
    
  }
  return (
    <div className="App">

        <div className='container'>
          <h2 className='title'>Кто лучший??</h2>
          <input value={state} onChange={(e) => {setState(e.target.value)}} className='input' />
          <button className='button' onClick={handler}>Проверить</button>
          <p className= {`${state.toLocaleLowerCase() === "коля" ? 'active' : ''} is-show`}>{"Нет, но она его Хозяйка!! А он просто песик"}</p>
          <p className= {`${state.toLocaleLowerCase() === "оля" ? 'active' : ''} is-show`}>{"Да!! Это она Чудо!"}</p>

        </div>
    </div>
  );
}

export default App;
