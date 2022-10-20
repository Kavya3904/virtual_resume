import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import Sidebartwo from '../components/Sidebartwo';

const Hometwo = () => {
  return (
    <div className='home'>
      <div className="container">
      <Sidebartwo/>
        <Chat/>
      </div>
    </div>
  )
}

export default Hometwo;