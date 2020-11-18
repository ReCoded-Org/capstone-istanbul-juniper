import React from "react";
import "./index.css";
import { storage } from "../../firebaseConfig";

const handleDownloadFileFromFirebaseStorage = async (resource) => {
  try {
    let url = await storage.refFromURL(resource).getDownloadURL();
    window.open(url);
  } catch (e) {
    console.error(e);
    alert(`Couldn't get the download link`);
  }
};
const Resource = ({ resource }) => {
  return (
    <div className="Resource__Body">
      <div className="Resource__body__picContainer">
        <img
          src={resource.pic}
          alt={resource.title}
          className=""
          onClick={() => {
            handleDownloadFileFromFirebaseStorage(resource.url);
          }}
        />
      </div>
      <div className="Resource__body__content">
        <div className="Resource__body__content__title">{resource.title}</div>
        <div className="Resource__body__content__description">
          {resource.body}
        </div>
        <div className="Resource__body__content__footer">
          <button
            onClick={() => {
              handleDownloadFileFromFirebaseStorage(resource.url);
            }}
          >
            Visit Resource
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resource;
