
import React, {useState} from "react"
import './App.css';
import ColorChangeButton from './ColorChangeButton'

function App() {
  const [color, setColor] = useState("")
  return (
    <div className={"react-root " + color }>
      <div className="centered">
        <h1>Pick a color!</h1>
        <ColorChangeButton color="BLUE" setColor={setColor} />
        <ColorChangeButton color="RED" setColor={setColor} />
        <ColorChangeButton color="ORANGE" setColor={setColor} />
      </div>
    </div>
  )
}

export default App;
