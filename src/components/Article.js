// src/Article.js
import React from 'react';

const Article = ({ article }) => {
  const hasImage = article.media.length > 0 && article.media[0].type === "image";
  const articleImage = hasImage ? article.media[0]["media-metadata"][2].url : '';
  const articleTitle = article.title;
  const articleAbstract = article.abstract;
  const articleDate = article.published_date;

  return (
    <div className="article">
      <div className="article-heading">
        <span className="article-title">{articleTitle}</span>
        <span className="article-date">{articleDate}</span>
      </div>
      <div className="article-content">
        {hasImage && <img className="article-image" src={articleImage} alt="Article" />}
        <p className="article-abstract">{articleAbstract}</p>
      </div>
    </div>
  );
};

export default Article;
