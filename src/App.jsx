import React, { useState } from 'react';
import Availability from './components/Availability';
import Friends from './components/Friends';
import './App.css'

const App = () => {
  const [availability, setAvailability] = useState([
    { weekNumber: 1, available: 0 },
    { weekNumber: 2, available: 4 },
    { weekNumber: 3, available: 1 },
    // Add more weeks as needed
  ]);

  const [friends, setFriends] = useState([
    { name: 'Best friend 1', availableWeek: 2 },
    { name: 'Best friend 2', availableWeek: 3 },
    // Add more friends as needed
  ]);

    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (category) => {
      setActiveCategory(category);
    }
  return (
    <div>
      <h2>My best friend</h2>

      <div className='categories'>
        <button className={activeCategory === 'Category1' ? 'active' : ''} onClick={() => handleCategoryClick('Category1')}>Just for fun</button>
        <button className={activeCategory === 'Category2' ? 'active' : ''} onClick={() => handleCategoryClick('Category2')}>More serious</button>
      </div>

      <div className='availabilities'>
        <Availability availability={availability} />
      </div>

      <Friends friends={friends} />

    </div>
  );
};

export default App;
