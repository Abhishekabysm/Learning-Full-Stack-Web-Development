import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({email: "Anish", phone: "8181"})

  const handleClick = ()=>{
    alert("Hey! I am Clicked!!")
  }

  const valueChanged = (e)=>{
    setForm({...form, [e.target.name]:e.target.value});
  }
  return (
    <>
      <div className='parent'>
        <button onClick={handleClick}>Click Me</button> <br />
        <input type="text" name="email" value={form.email} onChange={valueChanged}/> <br />
        <input type="text" name='phone' value={form.phone} onChange={valueChanged}/>
      </div>

    </>
  )
}

export default App
