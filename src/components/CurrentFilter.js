import React, { useState, useEffect } from 'react';

const CurrentFilter = ({sortTitle, timeTitle}) => {
    return (
        <div className="current-filter">
            <h1>{sortTitle} - {timeTitle}</h1>
        </div>
     
    );

};

export default CurrentFilter;