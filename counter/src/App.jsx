import { useState } from "react";
function App() {

  let [counter, setConter] = useState(0);

  const addValue = () => {
    setConter(counter + 1);
  }

  const decValue = () => {
    setConter(counter - 1);
  }

  const resValue = () => {
    setConter(counter = 0);
  }


  return (
    <>
      <h1 className="heading">Counter With React</h1>
      <h3 className="conterVale">Counter Value Is: {counter}</h3>
      <button className="btn_add" onClick={addValue}>Add Value</button>
      <button className="btn_rm" onClick={decValue}>Decrease Value</button>
      <button className="btn_rm" onClick={resValue}>Reset Value</button>
    </>
  )
}

export default App
