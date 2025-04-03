import { useState ,useCallback } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[numberallowed,setNumberallowed]= useState(false)
  const [charallowed,setCharallowed] =useState(false)
  const [password,setPassword] =useState("")
  const passwordgenerator = useCallback(fn ,[length,numberallowed,charallowed])=>{

  }

  return (

  
    <>
      <h1 className="text-4xl text-center text-white">
        password generator
      </h1>
    </>
  )
}

export default App
