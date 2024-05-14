import React, {useState, useEffect} from 'react';

const Filter = ({ onSortChange, onTimeChange, articleNumChange, sortTitleChange, timeTitleChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(inputValue > 15 || inputValue < 1){
      alert('Please enter a value between 1-15');
      return;
    }
    articleNumChange(inputValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="filter">
      <div id="filter-title">Filter</div>
      <form onSubmit={handleSubmit}>
        <input
          class="searchbox"
          type="text"
          name="search"
          placeholder="Enter a value 1-15"
          value={inputValue}
          onChange={handleInputChange}
        />
        <input class="searchbox" type="submit" value="Search" />
      </form>
      <br />
      <div id="sort-by">
        <strong>Sort By:</strong>
        <form>
          <input
            type="radio"
            name="sort"
            value="0"
            defaultChecked
            onChange={() => {
              onSortChange(0);
              sortTitleChange('Most Viewed');
            }}
          />
          <label>Most Viewed</label>
          <br />
          <input
            type="radio"
            name="sort"
            value="1"
            onChange={() => {
              onSortChange(1);
              sortTitleChange('Most Shared');
            }}
          />
          <label>Most Shared</label>
          <br />
          <input
            type="radio"
            name="sort"
            value="2"
            onChange={() => {
              onSortChange(2);
              sortTitleChange('Most Emailed');
            }}
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
            onChange={() => {
              onTimeChange(1)
              timeTitleChange('Day')
            }}
          />
          <label>Day</label>
          <br />
          <input
            type="radio"
            name="time"
            value="7"
            onChange={() => {
              onTimeChange(7)
              timeTitleChange('Week')
            }}
          />
          <label>Week</label>
          <br />
          <input
            type="radio"
            name="time"
            value="30"
            onChange={() => {
              onTimeChange(30)
              timeTitleChange('Month')
            }}
          />
          <label>Month</label>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Filter;
