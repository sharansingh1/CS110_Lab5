import React from 'react';

const PageCounter = ({ totalArticles }) => {
    const totalPages = Math.ceil(totalArticles / 6);

    return (
        <div id='paginator'>
            {Array.from({ length: totalPages }, (_, index) => (
                <span key={index}>{index + 1}</span>
            ))}
        </div>
    );
};

export default PageCounter;