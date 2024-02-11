import {Route, Routes} from 'react-router-dom'
import RatingCard from './pages/RatingCard'
import ThanksCard from './pages/ThanksCard'

function App() {
  return (
    <div className='bg-neutral-900 h-screen flex justify-center items-center'>
      <Routes>
        <Route path='/' element={<RatingCard />} />
        <Route path='/thanks/:rating' element={<ThanksCard />} />
      </Routes>
    </div>
  )
}

export default App
