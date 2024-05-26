import React from 'react';

function Navbar() {
  return (
    <nav className='bg-camoflage bg-cover flex justify-between align-middle text-white py-4 text-white'>
      <div className='logo'>
        <span className='text-2xl font-bold text-xl mx-9 '>
          li-ops: execute your ops
        </span>
      </div>
      <ul className='flex gap-10 mx-9 text-xl'>
        <li className='cursor-pointer hover:font-bold transition-all duration-200'>
          <a href=''>Home</a>
        </li>
        <li className='cursor-pointer hover:font-bold transition-all duration-200'>
          <a href=''>Your Tasks</a>
        </li>
      </ul>
      {/* Li-ops: execute missions like a commando  */}
    </nav>
  );
}

export default Navbar;
