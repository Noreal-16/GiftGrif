import React from 'react';

const GiftItem = ({title, url}) => {
    
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img alt='img' src={url}></img>
            <p>{title}</p>
        </div>
    );
};

export default GiftItem;