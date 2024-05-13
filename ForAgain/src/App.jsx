import './App.css'
import { useState } from 'react';
import './index.css';
function Greeting(props) {

  // useState Hook with increase and decrease counter
  let [count, setcount] = useState(0);
  const name = props.myname;
  if (count < 0) { // dont goes to negative value on pressing decrease button
    count = 0;
  }

  return (
    <>
      <div className="h-screen bg-[#252525] flex justify-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className='text-6xl font-bold text-center'>Hello, {name}!</h1>
          <p className='font-bold text-xl text-white'>You clicked {count} times</p >
          <button className='border border-[#2f2ff2] underline px-4 py-2 rounded-md font-bold text-white' onClick={() => setcount(count + 1)}>Increase</button>
          <button className='border border-[#2f2ff2] underline px-4 py-2 rounded-md font-bold text-white' onClick={() => setcount(count - 1)}>Decrease</button>
        </div>
      </div>
    </>
  )
}
export default Greeting
