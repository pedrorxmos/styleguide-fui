import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Styleguide from './Styleguide/Styleguide'
import Topbar from './components/Topbar/Topbar'

function App() {

  return (
    <>
      <Topbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/styleguide" element={<Styleguide />} />
        </Routes>
      </main>
    </>
  )
}

export default App
