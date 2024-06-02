// import './App.css';
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { RiChatDeleteLine } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { MdFormatListBulletedAdd } from 'react-icons/md';
import { useEffect, useState } from 'react';

function BodyComponent() {
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
    setShowFinishedOps(!showFinishedOps);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && newOperation.length >= 2) {
      handleAddOpsFunctionality();
    }
  };

  return (
        <div className='container my-5 rounded-xl p-5 bg-camoflage bg-cover text-white min-h-[80vh] w-[85vw]'>
        <h2 className='text-lg font-bold py-3'>Add an Operation</h2>
        <div className='flex addOps'>
          <input
            type='text'
            className='w-1/2 h-7 text-black rounded-xl text-center'
            name='newOps'
            value={newOperation}
            onChange={handleNewOpsDataEntry}
            onKeyDown={handleKeyDown}
          />
          <button
            title='Add'
            onClick={(e) => {
              handleAddOpsFunctionality(e);
            }}
            className=' bg-white rounded-xl text-black mx-4 hover:bg-black hover:text-white px-9  h-7 rounded-md text-sm font-bold active:bg-slate-600 disabled:bg-gray-400 flex items-center'
            disabled={newOperation?.length < 2}
          >
            <MdFormatListBulletedAdd size={22} />
          </button>
        </div>
        <div className='finishedOps flex  my-1 gap-2  py-6'>
          <input
            type='checkbox'
            className='text-black cursor-pointer'
            name='finishedOps'
            checked={showFinishedOps}
            onChange={handleShowFinishedOps}
          />
          <span>Show Finished Ops</span>
        </div>

        <h2 className='text-xl font-bold py-1'> Your Operations</h2>
        <div className='ops flex flex-col min-h-36 justify-center'>
          {allOperations.length == 0 && (
            <p className='text-white px-6'>No Ops</p>
          )}

          {allOperations.map((operation) => {
            //  in the below condition when showFinishedOps is true it doesnt matter on the status of the ops as we need to show all of them and when showFinishedOps is false we need to show only the ones that are not done so we used ! not operator
            return (
              (showFinishedOps || !operation.isDone) && (
                <div key={operation.id} className='op my-4 px-6'>
                  <div className='flex gap-5 w-1/2'>
                    <input
                      name={operation.id}
                      type='checkbox'
                      onChange={handleCheckBoxFunctionality}
                      id=''
                      checked={operation.isDone}
                      className='cursor-pointer'
                    />
                    <div
                      className={
                        operation.isDone
                          ? 'line-through text-white text-wrap break-words w-full'
                          : 'text-white text-wrap break-words w-full'
                      }
                    >
                      {operation.newOperation}
                    </div>
                  </div>

                  <div className='buttons flex my-1 mx-10 h-full'>
                    <button
                      title='Edit'
                      onClick={(e) => {
                        handleEditOpsFunctionality(e, operation.id);
                      }}
                      className=' bg-white text-black mx-1 hover:bg-black hover:text-white px-5 py-1 rounded-md text-sm font-bold active:bg-slate-600'
                    >
                      <FaEdit size={20} />
                    </button>
                    <button
                      title='Delete'
                      onClick={(e) => {
                        handleDeleteOpsFunctionality(e, operation.id);
                      }}
                      className=' bg-white text-black mx-1 hover:bg-black hover:text-white px-5 py-1 rounded-md text-sm font-bold active:bg-slate-600'
                    >
                      <RiChatDeleteLine size={20} />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
   )
}

export default BodyComponent
