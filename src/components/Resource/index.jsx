import { Button } from 'antd';
import React from 'react';
import './index.css';

const Resource = ({resource}) => {

    return (<div className="Resource__Body">
        <div className="Resource__body__picContainer">
            <a target="_blank" rel="noopener noreferrer" href={resource.url}>
                <img src={resource.pic} alt={resource.title} className="" />
            </a>
        </div>
        <div className="Resource__body__content">
            <div className="Resource__body__content__title">
                {resource.title}
            </div>
            <div className="Resource__body__content__description">{resource.body}</div>
            <div className="Resource__body__content__footer">
                <a target="_blank" rel="noopener noreferrer" href={resource.url}>
                    <button>Visit Resource</button>
                </a>
            </div>
        </div>
    </div>);
}

export default Resource;