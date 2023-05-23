import { Navigate, Route, Routes } from 'react-router-dom'
import Styleguide from './Styleguide/Styleguide'
import Buttons from './Styleguide/views/Buttons'

import './scss/global.scss'
import Colors from './Styleguide/views/Colors'
import Typography from './Styleguide/views/Typography'
import Icons from './Styleguide/views/Icons'
import Home from './Styleguide/views/Home'

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Styleguide />} >
            <Route path="" element={<Home />} />
            <Route path="buttons" element={<Buttons />} />
            <Route path="colors" element={<Colors />} />
            <Route path="typography" element={<Typography />} />
            <Route path="icons" element={<Icons />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
