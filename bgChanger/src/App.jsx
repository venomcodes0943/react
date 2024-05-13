import { useState } from 'react'
import './index.css'

function App() {
  const [color, setColor] = useState("#581845")
  return (
    <>
      <div className="w-full h-screen duration-300" style={{ background: color }}>
        <div className="flex text-white fixed left-10 top-3 justify-around container mx-auto rounded-md shadow-md p-3 bg-zinc-900">
          <button style={{ backgroundColor: "red" }} onClick={() => setColor("red")} className="tracking-wide px-4 py-1 rounded font-bold outline-none">Red</button>
          <button style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")} className="tracking-wide px-4 py-1 rounded font-bold outline-none">Yellow</button>
          <button style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")} className="tracking-wide px-4 py-1 rounded font-bold outline-none">Blue</button>
          <button style={{ backgroundColor: "green" }} onClick={() => setColor("green")} className="tracking-wide px-4 py-1 rounded font-bold outline-none">Green</button>
          <button style={{ backgroundColor: "#FF69B4" }} onClick={() => setColor("#FF69B4")} className="tracking-wide px-4 py-1 rounded font-bold outline-none">Hotpink</button>
          <button style={{ backgroundColor: "black" }} onClick={() => setColor("black")} className="tracking-wide px-4 py-1 font-bold rounded outline-none">Black</button>
          <button style={{ backgroundColor: "fuchsia" }} onClick={() => setColor("fuchsia")} className="tracking-wide px-4 py-1 rounded font-bold outline-none">Fuchsia</button>
          <button style={{ backgroundColor: "#FF8C00" }} onClick={() => setColor("#FF8C00")} className="tracking-wide px-4 py-1 rounded font-bold outline-none">Orange</button>
          <button style={{ backgroundColor: "#4B0082" }} onClick={() => setColor("#4B0082")} className="tracking-wide px-4 py-1 rounded font-bold outline-none">Indigo</button>
        </div>
      </div>
    </>
  )
}

export default App
