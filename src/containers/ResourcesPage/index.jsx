import React, { useContext, useState } from "react";

import Resource from "../../components/Resource";

import "./index.css";


// TODO: Store these resources on firebase, and fetch them from there
const initResources = [

  {
    id: 1,
    title: 'Testing 123 ',
    body: 'Sed facilisis cursus leo, a placerat dolor gravida nec. Ut vitae orci mauris. Aenean porttitor lacus ac magna faucibus bibendum. Praesent vehicula ipsum ante, luctus posuere augue lacinia eu.',
    pic: 'https://live.staticflickr.com/2912/13981352255_fc59cfdba2_b.jpg',
    url: 'https://www.google.com',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    body: 'Sed facilisis cursus leo, a placerat dolor gravida nec. Ut vitae orci mauris. Aenean porttitor lacus ac magna faucibus bibendum. Praesent vehicula ipsum ante, luctus posuere augue lacinia eu.',
    pic: 'https://live.staticflickr.com/2912/13981352255_fc59cfdba2_b.jpg',
    url: 'https://www.google.com',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    body: 'Sed facilisis cursus leo, a placerat dolor gravida nec. Ut vitae orci mauris. Aenean porttitor lacus ac magna faucibus bibendum. Praesent vehicula ipsum ante, luctus posuere augue lacinia eu.',
    pic: 'https://live.staticflickr.com/2912/13981352255_fc59cfdba2_b.jpg',
    url: 'https://www.google.com',
  },

];

const ResourcesPage = () => {

  const [resources, setResources] = useState(initResources);
  return (
    <div className="ResourcesPage">
      <div className="ResourcesPage__HeaderContainer">
        <div className="ResourcesPage__HeaderContainer__Title">Resources</div>
        <div className="ResourcesPage__HeaderContainer__SubTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>

      </div>
      <div className="ResourcesPage__ResourcesContainer">
        {resources.map((resource) => {
          return <Resource key={`resource_${resource.id}`} resource={resource} />
        })}
      </div>
    </div>
  );
};

export default ResourcesPage;
