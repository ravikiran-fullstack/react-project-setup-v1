import React, { useState } from 'react';

import './index.css';

function App () {
  const [searchTerm, setSearchTerm] = useState('');

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  // write code to utilize debounce function
  const debounceFunc = debounce((value) => {
    // console.log(value);
    setSearchTerm(value);
    // write code to call API here

  }, 175);

  const handleInputChange = (event) => {
    debounceFunc(event.target.value);
  };

  return (
    <div className="container">
      <header>
        <p>Search functionality with debounce function</p>
        <input data-testid="input" type="text" onChange={handleInputChange} value={searchTerm} />
      </header>
    </div>
  );
}

export default App;
