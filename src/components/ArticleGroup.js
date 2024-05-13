// src/ArticleGroup.js
import React, { useState, useEffect } from 'react';
import Filter from './Filter'; // Import the Filter component
import Article from './Article'; // Import the Article component

const apiKey = "yeuwcaGRFJAcbKKCZ3cJkRalCMl6OoC3";
const apiURLs = [
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/",
  "https://api.nytimes.com/svc/mostpopular/v2/shared/",
  "https://api.nytimes.com/svc/mostpopular/v2/emailed/"
];

const ArticleGroup = () => {
  const [sortNum, setSortNum] = useState(0);
  const [timePeriod, setTimePeriod] = useState(1);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const url = `${apiURLs[sortNum]}${timePeriod}.json?api-key=${apiKey}`;
      const data = await fetch(url);
      const response = await data.json();
      setArticles(response.results);
    };

    getArticles();
  }, [sortNum, timePeriod]);

  const handleSortChange = (num) => setSortNum(num);
  const handleTimeChange = (time) => setTimePeriod(time);

  return (
    <div>
      <Filter onSortChange={handleSortChange} onTimeChange={handleTimeChange} />
      <div className="article-group">
        {articles.slice(0, 5).map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleGroup;
