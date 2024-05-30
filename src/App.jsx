import { useEffect, useState } from 'react';
import Navbar from './componets/Navbar';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [count, setCount] = useState(0);
  const [newOperation, setNewOperation] = useState('');
  const [allOperations, setAllOperations] = useState([]);
  const [showFinishedOps, setShowFinishedOps] = useState(true);

  useEffect(() => {
    let allOpsFromLocalStorage = localStorage.getItem('allOperations');

    if (allOpsFromLocalStorage) {
      const allOpsFromStorage = JSON.parse(allOpsFromLocalStorage);
      setAllOperations(allOpsFromStorage);
    }
  }, []);

  const handleAddOpsFunctionality = (e) => {
    const aa = [
      ...allOperations,
      { id: uuidv4(), newOperation, isDone: false },
    ];
    localStorage.setItem('allOperations', JSON.stringify(aa));
    setAllOperations(aa);
    setNewOperation('');
    // saveToLocalStorage();
  };

  const handleCheckBoxFunctionality = (e) => {
    {
      // This approach is followed instead of just iterating through the existing array bcs we want to re render the array objects and that happens when a new array array reference is assigned
      let index = allOperations.findIndex(
        (operation) => operation.id === e.target.name
      );
      let newAllOps = [...allOperations];
      newAllOps[index].isDone = !newAllOps[index].isDone;
      localStorage.setItem('allOperations', JSON.stringify(newAllOps));

      setAllOperations(newAllOps);
      // saveToLocalStorage();
    }
  };

  const handleEditOpsFunctionality = (e, id) => {
    let index = allOperations.filter((operation) => operation.id === id);
    setNewOperation(index[0].newOperation);
    let newAllOps = allOperations.filter((operation) => operation.id !== id);
    localStorage.setItem('allOperations', JSON.stringify(newAllOps));
    setAllOperations(newAllOps);
  };

  const handleDeleteOpsFunctionality = (e, id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      {
        let newAllOps = allOperations.filter(
          (operation) => operation.id !== id
        );
        localStorage.setItem('allOperations', JSON.stringify([...newAllOps]));
        setAllOperations([...newAllOps]);
        }
    }
  };
  const handleNewOpsDataEntry = (element) => {
    setNewOperation(element.target.value);
  };
  const handleShowFinishedOps = (params) => {
    if (params.target.value) {
    }
  };
  return (
    <>
      <Navbar />
      <div className='container  my-5 rounded-xl p-5 bg-camoflage bg-cover text-white min-h-[80vh] w-[90vw]'>
        <div className='addOps'>
          <h2 className='text-lg font-bold py-3'>Add an Operation</h2>
          <input
            type='text'
            className='w-1/2 text-black'
            name='newOps'
            value={newOperation}
            onChange={handleNewOpsDataEntry}
          />
          <button
            onClick={(e) => {
              handleAddOpsFunctionality(e);
            }}
            className=' bg-white text-black mx-4 hover:bg-black hover:text-white px-3 py-1 rounded-md text-sm font-bold active:bg-slate-600 disabled:bg-gray-400'
            disabled={newOperation?.length < 2}
          >
            Add
          </button>
        </div>
        <div className='finishedOps flex  my-3 gap-2  py-6'>
          <input
            type='checkbox'
            className='text-black'
            name='finishedOps'
            checked={showFinishedOps}
            onChange={handleShowFinishedOps}
          />
          <span>Show Finished Ops</span>
        </div>

        <h2 className='text-xl font-bold py-4'> Your Ops</h2>
        <div className='ops'>
          {allOperations.length == 0 && (
            <p className='text-white px-6'>No Ops</p>
          )}
          {allOperations.map((operation) => {
            return (
              <div
                key={operation.id}
                className='op flex w-1/2 my-3 justify-between px-6'
              >
                <div className='flex gap-5'>
                  <input
                    name={operation.id}
                    type='checkbox'
                    onChange={handleCheckBoxFunctionality}
                    id=''
                    checked={operation.isDone}
                  />
                  <div
                    className={
                      operation.isDone
                        ? 'line-through text-white text-wrap'
                        : 'text-white text-wrap'
                    }
                  >
                    {operation.newOperation}
                  </div>
                </div>

                <div className='buttons flex mx-2 h-full'>
                  <button
                    onClick={(e) => {
                      handleEditOpsFunctionality(e, operation.id);
                    }}
                    className=' bg-white text-black mx-1 hover:bg-black hover:text-white px-3 py-1 rounded-md text-sm font-bold active:bg-slate-600'
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      handleDeleteOpsFunctionality(e, operation.id);
                    }}
                    className=' bg-white text-black mx-1 hover:bg-black hover:text-white px-3 py-1 rounded-md text-sm font-bold active:bg-slate-600'
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
