import React from 'react';
import ActionBtns from './ActionBtns';
import './Friends.css';

const Friends = ({ friends }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Friends</th>
            <th>Availability</th>
            <th>Action Options</th>
          </tr>
        </thead>
        <tbody>
          {friends.map((friend, index) => (
            <tr key={index}>
              <td>{friend.name}</td>
              <td>Week {friend.availableWeek}</td>
              <td><ActionBtns /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default Friends
