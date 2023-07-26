import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import IconButton from '@mui/material/IconButton';
import tinder from './tinder.png';
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css';

function Header() {
  return (
    <div className='header'>
     <IconButton>
        <Person2Icon />
      </IconButton>
        <img className='header_logo' src={tinder} alt='logo'/> 
      <IconButton>
        <ForumIcon  fontSize='large' className='header_icon'/>
      </IconButton> 
    </div>
  )
}

export default Header
