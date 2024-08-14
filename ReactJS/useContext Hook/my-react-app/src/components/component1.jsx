import {React, useContext} from 'react'
import { counterContext } from '../context/context'
import button from './button';

const component1 = () => {
  const value  = useContext(counterContext);
  return (
    <button>{value.count}</button>
  )
}

export default component1
