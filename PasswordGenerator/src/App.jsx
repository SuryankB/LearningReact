import { useState,useCallback,useEffect,useRef} from 'react';
function App() {

  //here we are using the useState hook to manage the state of the password generator one for the length of the password, one for whether to include numbers, and one for whether to include characters and one for the password itself.
  //useState is a React hook that allows you to add state to functional components.


  const [length,setLength] = useState(8);
  const [numbersNo,setNumbers] = useState(false);  
  const [CharNo,setChar] = useState(false);
  const [password,setPassword] = useState("");

  const passwordRef = useRef(null)

  //useRef is a React hook that allows you to create a mutable object that persists for the full lifetime of the component.
  //It is often used to access DOM elements directly, without causing re-renders when the reference changes.

  const passwordGenerator=useCallback(()=>{
    let pass='';
    let string='ANCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numbersNo) string+='0123456789';
    if(CharNo) string+='!@#$%^&*()_+[]{}|;:,.<>?';

    for(let i=0;i<=length;i++){
      const randomindex=Math.floor(Math.random()*string.length+1);
      pass+=string.charAt(randomindex);
    }
    //Math.random() generates a random number between 0 and 1, and Math.floor() rounds it down to the nearest integer.
    setPassword(pass);
    //setPassword is a function that updates the password state with the newly generated password.
  },
    [length,numbersNo,CharNo,setPassword]);

    const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, CharNo, numbersNo, passwordGenerator])

  return (
    <>
    <h1 className="bg-black px-4 py-6 text-2xl text-center text-red-300 font-thin">Password Generator</h1>
    <div className=" text-xl w-full max-w-xl mx-auto shadow-md rounded-lg px-10 py-10 my-8 bg-amber text-orange-500">
    <div className="flex shadow rounded-lg overflow-hidden mb-4 text-xl">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center  text-xl gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center text-xl gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numbersNo}
          id="numberInput"
          onChange={() => {
              setNumbers((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center text-xl  gap-x-1">
          <input
              type="checkbox"
              defaultChecked={CharNo}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
      <div className='flex flex-col items-center justify-center mt-4'>
        <button onClick={()=>window.location.reload()}
        className='border border-black bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 '>
                Generate a new passwoword
        </button>
      </div>
</div>
    
    </>
  )
}

export default App
