import { useState } from 'react'
import Copy from './components/Copy'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Copy/>
  </div>
  )
}

export default App
