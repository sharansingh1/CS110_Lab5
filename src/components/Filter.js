// src/Filter.js
import React from 'react';

const Filter = ({ onSortChange, onTimeChange }) => {
  return (
    <div className="filter">
      <div id="filter-title">Filter</div>
      <br />
      <div id="sort-by">
        <strong>Sort By:</strong>
        <form>
          <input
            type="radio"
            name="sort"
            value="0"
            defaultChecked
            onChange={() => onSortChange(0)}
          />
          <label>Most Viewed</label>
          <br />
          <input
            type="radio"
            name="sort"
            value="1"
            onChange={() => onSortChange(1)}
          />
          <label>Most Shared</label>
          <br />
          <input
            type="radio"
            name="sort"
            value="2"
            onChange={() => onSortChange(2)}
          />
          <label>Most Emailed</label>
          <br />
          <br />
          <strong>Time Frame:</strong>
          <br />
          <input
            type="radio"
            name="time"
            value="1"
            defaultChecked
            onChange={() => onTimeChange(1)}
          />
          <label>Day</label>
          <br />
          <input
            type="radio"
            name="time"
            value="7"
            onChange={() => onTimeChange(7)}
          />
          <label>Week</label>
          <br />
          <input
            type="radio"
            name="time"
            value="30"
            onChange={() => onTimeChange(30)}
          />
          <label>Month</label>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Filter;
