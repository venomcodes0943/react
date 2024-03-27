import './index.css'

function App() {
  return (
    <>
      <div className="flex justify-around container mx-auto rounded-md my-5 shadow-md p-3 bg-zinc-900">
        <button className="tracking-wide px-4 py-1 bg-red-600 rounded font-bold outline-none">Red</button>
        <button className="tracking-wide px-4 py-1 bg-yellow-500 rounded font-bold outline-none">Yellow</button>
        <button className="tracking-wide px-4 py-1 bg-blue-700 rounded font-bold outline-none">Blue</button>
        <button className="tracking-wide px-4 py-1 bg-green-700 rounded font-bold outline-none">Green</button>
        <button className="tracking-wide px-4 py-1 bg-pink-600 rounded font-bold outline-none">Pink</button>
        <button className="tracking-wide px-4 py-1 bg-black rounded font-bold outline-none">Black</button>
        <button className="tracking-wide px-4 py-1 bg-fuchsia-900 rounded font-bold outline-none">Fuchsia</button>
      </div>
    </>
  )
}

export default App
