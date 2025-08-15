import { useState } from "react";
function App() {
  const [color, setColor] = useState("Beige");   
  return (
    <>

    <div className="flex justify-center items-center flex-col"
      style = {{backgroundColor:color, height: "100vh"}}>

         <h1 className="text-3xl font-bold text-yellow-500 drop-shadow-lg">
        Background Color Changer
      </h1>

    <div className="flex  border border-black py-2 px-5 rounded-3xl gap-4 mt-40 bg-black ">
      <button onClick={() => setColor("Blue")}
      className="bg-blue-400 border border-black py-2 px-5 rounded-full
      transition-colors duration-500 ease-in-out">Blue</button>
      
      <button onClick={() => setColor("Red")}
      className="bg-red-600 border border-black py-2 px-5 rounded-full transition-colors duration-500 ease-in-out">Red</button>
      
      <button  onClick={() => setColor("Orange")}
      className="bg-orange-600 border border-black py-2 px-5 rounded-full transition-colors duration-500 ease-in-out ">Orange</button>

      <button onClick={() => setColor(" Green")}
      className="bg-green-400 border border-black py-2 px-5 rounded-full transition-colors duration-500 ease-in-out">Green</button>
      
      <button onClick={() => setColor("Black")}
      className="bg-black text-white border border-white py-2 px-5 rounded-full transition-colors duration-500 ease-in-out">Black</button>

    </div>
    </div>
    </>
    
  );
}

export default App;
