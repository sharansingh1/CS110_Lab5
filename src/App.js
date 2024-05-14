import React,{useState} from 'react';
import './App.css';
import ArticleGroup from './components/ArticleGroup';
import CurrentFilter from './components/CurrentFilter';

function App() {
  const [sortTitle, setSortTitle] = useState("Most Viewed");
  const [timeTitle, setTimeTitle] = useState("1 Day");

  const handleSortTitleChange = (title) => setSortTitle(title) 
  const handleTimeTitleChange = (title) => setTimeTitle(title)
  return (
    <div className="App">
      <CurrentFilter sortTitle={sortTitle} timeTitle={timeTitle} />
      <ArticleGroup sortTitleChange={handleSortTitleChange} timeTitleChange={handleTimeTitleChange} />
    </div>
  );
}

export default App;
