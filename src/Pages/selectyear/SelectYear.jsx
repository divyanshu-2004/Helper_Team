import React, { useState } from 'react';
import './SelectYear.css';
import Pyq from '../pyq/Pyq';

const SelectYear = () => {
  const [selectedYear, setSelectedYear] = useState(null); 

  const handleYearClick = (year) => {
    setSelectedYear(year); 
  };

  return (
    <div>
      {!selectedYear ? (
        <div className="select-year-fullscreen">
          <h1>Select a Year</h1>
          <div className="container">
            <button className="box" onClick={() => handleYearClick('1 Year')}>
              1 Year
            </button>
            <button className="box" onClick={() => handleYearClick('2 Year')}>
              2 Year
            </button>
            <button className="box" onClick={() => handleYearClick('3 Year')}>
              3 Year
            </button>
            <button className="box" onClick={() => handleYearClick('4 Year')}>
              4 Year
            </button>
          </div>
        </div>
      ) : (
        <div className="year-page">
          
            <Pyq/>
        </div>
      )}
      
    </div>
    
  );
};

export default SelectYear;
