import { useState } from 'react';
import Navbar from './componets/Navbar';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl bg-gray-800 text-white">
      its 23:00 hours
      </div>
    </>
  );
}

export default App;
