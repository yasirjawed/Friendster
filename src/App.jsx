import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './header';

import Tindercards from './Tindercards';
import Person2Icon from '@mui/icons-material/Person2';
import IconButton from '@mui/material/IconButton';
import tinder from './tinder.png';
import ForumIcon from '@mui/icons-material/Forum';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        
        {/*  header  */ } 
          <Header />
        {/* header end */}

        {/* tindercards */}
        <Tindercards />
        {/* tindercards end */}
      </div>

    


    </>
  )
}







    

export default App
