import { useState } from 'react'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className="bg-red-600">
        Red background
      </div>
    </div>
    </>
  )
}

export default App
