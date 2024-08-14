import { useState } from 'react'
import AppRouter from './AppRouter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='page-wrapper'>
       <AppRouter></AppRouter>
    </div>
  )
}

export default App;
