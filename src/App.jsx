import { useState ,useCallback ,useEffect ,useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed,setNumberallowed]= useState(false)
  const [charallowed,setCharallowed] =useState(false)
  const [password,setpassword] =useState("")
  const passwordRef= useRef(null)

  const passwordgenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "0123456789"
    if (charallowed) str += "!@#$%^&*-_+=[]{}~`"
    for (let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setpassword(pass)
  },[length,numberallowed,charallowed,setpassword])
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(()=>{
    passwordgenerator()
  },[length,numberallowed,charallowed,passwordgenerator])

  
    
 

  return (
    
   <div >
     <div  className="w-full justify-center align-center max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text"
      value={password}
      className="outline-none w-full py-1 px-3"
      placeholder='password'
      readOnly
      ref={passwordRef}

       />
       <button onClick={copyPasswordToClipboard} 
       className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'

       >
        copy

       </button>
       
        
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>[setLength(e.target.value)]}
         />
         <label>length:{length}</label>

       
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked={numberallowed}
        id="numberInput"
        onChange={()=>{setNumberallowed((prev)=>!prev)}}
         />
         <label htmlFor="numberInput">Number</label>
     
      
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked={charallowed}
        id="charInput"
        onChange={()=>{
          setCharallowed((prev)=>!prev)
        }}
         />
         <label htmlFor="charInput">Characters</label>
        
      </div>
    </div>
</div>

   </div>

  
   
  )
}

export default App
