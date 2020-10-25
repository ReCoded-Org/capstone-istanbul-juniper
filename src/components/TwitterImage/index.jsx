import React from 'react';
import './index.css';

const TwitterImage = ({ src, href, alt }) => {
    return (
        <a href={href} target='_blank' rel='noopener noreferrer'>
            <img src={src} alt={alt} className='twitterImage' />
        </a>
    );
};

export default TwitterImage;
