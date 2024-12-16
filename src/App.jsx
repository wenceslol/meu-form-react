import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FormInput from './components/FormInput.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const isLoggedStatus = true;

  return (
    <Router>
      <div className="app">
        <div className="backgroundImage"></div>
          <Routes>
            <Route exact path="/" element={
              <Login></Login>
              }>
            </Route>
            <Route path="/register" element={
              <Register></Register>
            }>
            </Route>
          </Routes>
        
      </div>
      </Router>
  )
}

export default App
