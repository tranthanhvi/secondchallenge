import React, { useState } from 'react';
import './Availability.css';


const Availability = ({ availability }) => {
  const totalAvailable = availability.reduce((sum, week) => sum + week.available, 0);
  const thisWeekAvailable = availability.find(week => week.weekNumber === 1).available;
  const nextWeekAvailable = availability.find(week => week.weekNumber === 2).available;
  const bestWeekAvailable = Math.max(...availability.map(week => week.available));
  const weekOptions = availability.map((week, index) => `Week ${week.weekNumber} (${week.available})`);

  const [selectedWeek, setSelectedWeek] = useState(weekOptions[0]);
  
  return (
    <div>
      <div>
        <button>All: {totalAvailable}</button>
        <button>This week: {thisWeekAvailable}</button>
        <button>Next week: {nextWeekAvailable}</button>
        <button>Best week: {bestWeekAvailable}</button>
      </div>
      
      <div className='weekOptions'>

        <label htmlFor="weekSelect">Select week:</label>

        <select id="weekSelect" value={selectedWeek} onChange={(e) => setSelectedWeek(e.target.value)}>

            {weekOptions.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
            ))}

        </select>
            
        </div>
    </div>
  );
};

export default Availability
