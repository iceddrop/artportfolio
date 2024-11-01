
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import ArtGrid from './pages/Homepage/PageOverview/ArtGrid'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/ArtGrid" element={<ArtGrid/>}/>
      </Routes>
    </>
  )
}

export default App
