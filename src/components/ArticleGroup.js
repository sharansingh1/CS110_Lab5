import React, { useState, useEffect } from 'react';
import Filter from './Filter'; 
import Article from './Article'; 

const apiKey = "yeuwcaGRFJAcbKKCZ3cJkRalCMl6OoC3";
const apiURLs = [
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/",
  "https://api.nytimes.com/svc/mostpopular/v2/shared/",
  "https://api.nytimes.com/svc/mostpopular/v2/emailed/"
];

const ArticleGroup = ({sortTitleChange, timeTitleChange}) => {
  const [sortNum, setSortNum] = useState(0);
  const [timePeriod, setTimePeriod] = useState(1);
  const [sortTitle, setSortTitle] = useState("Most Viewed");
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(6); 
  const [maxArticles, setMaxArticles] = useState(15);

  useEffect(() => {
    const getArticles = async () => {
      const url = `${apiURLs[sortNum]}${timePeriod}.json?api-key=${apiKey}`;
      const data = await fetch(url);
      const response = await data.json();
      setArticles(response.results.slice(0, maxArticles));
    };

    getArticles();
  }, [sortNum, timePeriod, maxArticles]);

  const handleSortChange = (num) => {
    setSortNum(num);
    setCurrentPage(1);
  };
  
  const handleTimeChange = (time) => {
    setTimePeriod(time);
    setCurrentPage(1);
  };

  const handleArticleNumChange = (num) => {
    setArticlesPerPage(Math.min(Math.max(parseInt(num, 10), 1), maxArticles)); 
    setCurrentPage(1);
  };
  const handleMaxArticlesChange = (num) => setMaxArticles(num);

  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const paginatedArticles = articles.slice(startIndex, endIndex);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageChange = (page) => setCurrentPage(page);



  return (
      <><div className="all-content">
          <Filter
              onSortChange={handleSortChange}
              onTimeChange={handleTimeChange}
              sortTitleChange={sortTitleChange}
              timeTitleChange={timeTitleChange}
              articleNumChange={handleMaxArticlesChange} />
          <div className="article-group">
              {paginatedArticles.map((article, index) => (
                  <Article key={index} article={article} index={startIndex + index + 1} />
              ))}
          </div>

      </div>
      <div className="pagination-controls">
              {Array.from({ length: totalPages }, (_, i) => (
                  <button
                      key={i + 1}
                      onClick={() => handlePageChange(i + 1)}
                      className={i + 1 === currentPage ? 'active' : ''}
                  >
                      {i + 1}
                  </button>
              ))}
          </div></>
  );
};

export default ArticleGroup;
