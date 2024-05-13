import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';

export const Header = () => {
  return (
    <div className="w-full h-12 grid grid-cols-3 bg-zinc-800 hover:text-zinc-200">
      <img className="max-h-12" src={logo} alt="logo" />
      <div className="w-full flex justify-center items-center">
        <NavLink to="/" className="text-xl">
          Home
        </NavLink>
      </div>
    </div>
  );
};
