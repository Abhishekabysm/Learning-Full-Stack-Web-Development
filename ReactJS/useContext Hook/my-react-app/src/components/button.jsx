import {React, useContext} from 'react'
import { counterContext } from '../context/context'

const button = () => {
  const value = useContext(counterContext);
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}>I am a button</button>
    </div>
  )
}

export default button
