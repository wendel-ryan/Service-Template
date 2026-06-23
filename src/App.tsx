import './App.css'
import Navbar from './components/navbar.tsx'


function App() {
  let sections = ['About','Services','Location','Contact']
  return (
    <>
      <Navbar sections={sections}/>
    </>
  )
}

export default App
