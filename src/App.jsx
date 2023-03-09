import { useState } from 'react'
import Form from './Components/Form/Form'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [application, setApplication] = useState('')

  return (
    <div className="App">
      <Form />
    </div>
  )
}

export default App
