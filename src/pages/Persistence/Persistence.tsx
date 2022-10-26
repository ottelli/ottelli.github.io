import React from 'react';

import './Persistence.css';

function Persistence() {
  return (
    <div className="p-8 bg-green-50">
      <img src="assets/persistence-brand.svg" alt="Persistence" width="220" />
      <p>How can I train well?</p>
      <p>If you give some activity data from your sports watch, we'll take a look and put it all on a calendar, where you can plan what to do next.</p>
      <p>Tag your activites, and find out what really makes a difference to your training.<br /> Do you really run faster in the morning? When it's cold? Or just in your lucky socks?</p>
      <hr />
      <a className="persistence-out-link" href="https://persistence.rhotech.app"><h4>Check out the Persistence App</h4></a>
      <img 
        src="assets/img/persistence-screenshot.png" 
        alt="Persistence App Screenshot"
        height="380"
      />
    </div>
  )
}

export default Persistence;