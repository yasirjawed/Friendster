import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './header';
import Person2Icon from '@mui/icons-material/Person2';
import IconButton from '@mui/material/IconButton';
import tinder from './tinder.png';
import ForumIcon from '@mui/icons-material/Forum';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        {/*  header  */ } 
          <IconButton>
            <Person2Icon />
          </IconButton>
          <img className='header_logo' src={tinder} alt='logo'/> 
          <IconButton>
            <ForumIcon  fontSize='large' className='header_icon'/>
          </IconButton> 
        {/* tinder cards*/ }
        {/* swipe buttons*/ }
      </div>
    </>
  )
}







    

export default App
