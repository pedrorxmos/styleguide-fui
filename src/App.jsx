import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Styleguide from './Styleguide/Styleguide'
import Topbar from './components/Topbar/Topbar'
import Buttons from './Styleguide/views/Buttons'

import './scss/global.scss'

function App() {

  return (
    <>
      <Topbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/styleguide" element={<Styleguide />}>
            <Route path="./buttons" element={<Buttons/>} />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
