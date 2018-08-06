import React from 'react';

const MyHeader = ({ title, color }) => (

  <header>
    <h1>
      {title}
    </h1>
    <h3>
      <span>
        Your favorite color is: {color}
      </span>
    </h3>
  </header>
);

export default MyHeader;
