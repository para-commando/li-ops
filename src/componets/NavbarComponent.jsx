import React from 'react';
import { FaJetFighterUp } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import { GiTank } from 'react-icons/gi';
import { LiaFighterJetSolid } from 'react-icons/lia';

function Navbar() {
  return (
    <nav className='bg-camoflage bg-cover flex justify-center items-center text-white py-9 text-white w-[99vw] sticky top-0  max-[1100px]:text-black max-[1100px]:py-10'>
      <div className='logo flex justify-center items-center absolute '>
        <h1 className='flex text-3xl font-bold text-white text-center justify-center gap-2 max-[1100px]:flex-col max-[1100px]:items-center max-[1100px]:text-[23px]'>
          li-ops: made for your special ops{' '}

          <span className='fighterJetLogo  max-[1100px]:hidden '>
            <LiaFighterJetSolid size={40} />
          </span>
        <span className='fighterJetLogo  min-[1100px]:hidden'>
            <FaJetFighterUp size={35} />
          </span>
        </h1>
      </div>
      <div className='navigationSection absolute right-8'>
        <ul className='flex gap-5 text-xl my-1 max-[1100px]:hidden'>
          <li className='flex gap-2 items-center cursor-pointer hover:font-bold transition-all duration-200'>
            <a href=''>Home </a>
            <FaHome size={25} />
          </li>
          <li className='flex gap-2 items-center cursor-pointer hover:font-bold transition-all duration-200'>
            <a href=''>Ops</a>
            <GiTank size={25} />
          </li>
        </ul>
      </div>

      {/* Li-ops: execute missions like a commando  */}
    </nav>
  );
}

export default Navbar;
