import React from 'react'
import Hamlogo from "../assets/hamburger.svg";
import Profile from "../assets/profile.svg";

import Ytlogo from '../assets/ytlogoold.svg';
import Searchbar from './search/Searchbar';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../redux/sidebarVisibilitySlice';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();


  return (
    <div className='flex w-100 h-[50px] p-2 justify-between shadow-md '>
       <div className=' flex'>
       <img 
       onClick={() => {
        dispatch(toggleSidebar())
    }} className='w-8 h-8 ml-3' src={Hamlogo} alt="hamlogo" />
    <Link to="/">
         <img className="mt-1 h-6 ml-3" src={Ytlogo} alt="video-icon" />
   </Link>

         </div>
       <Searchbar/>
       <div className='mx-2 flex '>
        
                <img className="w-8 h-8 text-black-900 " src={Profile} alt="profile-icon" />
            </div>
    </div>
  )
}

export default Header