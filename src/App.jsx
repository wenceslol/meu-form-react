import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FormInput from './components/FormInput.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="app">
        <h1>Meu formulario React</h1>
        <form>
        <FormInput type="text" placeholder="Usuário"></FormInput>
        <FormInput type="password" placeholder="Senha"></FormInput>
        <button>Login</button>
        </form>
      </div>
  )
}

export default App
