import { useState } from 'react';
import Navbar from './componets/Navbar';
import './App.css';
function App() {
  const [count, setCount] = useState(0);
  const [newOperation, setNewOperation] = useState('');
  const [allOperations, setAllOperations] = useState([]);

  const handleAddOpsFunctionality = () => {
    setAllOperations([...allOperations, { newOperation, isDone: false }]);
    console.log(
      '🚀 ~ handleAddOpsFunctionality ~ allOperations:',
      allOperations
    );
    setNewOperation('');
  };
  const handleEditOpsFunctionality = () => {};
  const handleDeleteOpsFunctionality = () => {};
  const handleNewOpsDataEntry = (element) => {
    setNewOperation(element.target.value);
  };
  return (
    <>
      <Navbar />
      <div className='container  my-5 rounded-xl p-5 bg-camoflage bg-cover text-white min-h-[80vh] w-[90vw]'>
        <div className='addOps'>
          <h2 className='text-lg font-bold'>Add an Operation</h2>
          <input
            type='text'
            className='w-1/2 text-black'
            name='newOps'
            value={newOperation}
            onChange={handleNewOpsDataEntry}
          />
          <button
            onClick={handleAddOpsFunctionality}
            className=' bg-white text-black mx-4 hover:bg-black hover:text-white px-3 py-1 rounded-md text-sm font-bold active:bg-slate-600'
          >
            Add
          </button>
        </div>
        <h2 className='text-xl font-bold'> Your Ops</h2>
        <div className='ops'>
          {allOperations.map((operation) => {
           { console.log("🚀 ~ {allOperations.map ~ operation:", operation)}
            <div className='op flex'>
              <div className='text-white'>operation.newOperation</div>
              <div className='buttons'>
                <button
                  onClick={handleEditOpsFunctionality}
                  className=' bg-white text-black mx-1 hover:bg-black hover:text-white px-3 py-1 rounded-md text-sm font-bold active:bg-slate-600'
                >
                  Edit
                </button>
                <button
                  onClick={handleDeleteOpsFunctionality}
                  className=' bg-white text-black mx-1 hover:bg-black hover:text-white px-3 py-1 rounded-md text-sm font-bold active:bg-slate-600'
                >
                  Delete
                </button>
              </div>
            </div>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
