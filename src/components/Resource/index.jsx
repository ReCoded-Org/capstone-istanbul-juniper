import React from "react";
import "./index.css";
import { firebaseStorage } from "../../firebaseConfig";

const handleDownloadFileFromFirebaseStorage = async (resource) => {
  try {
    let url = await firebaseStorage
      .storage()
      .refFromURL(resource)
      .getDownloadURL();
    window.open(url);
  } catch (e) {
    console.error(e);
    alert(`Couldn't get the download link`);
  }
};

const Resource = ({ resource }) => {
  if (!resource) {
    return <h2>Loading</h2>;
  } else {
    return (
      <div className="resource__body">
        <div className="resource__body__picContainer">
          <img
            src={resource.pic}
            alt={resource.title}
            onClick={() => {
              handleDownloadFileFromFirebaseStorage(resource.url);
            }}
          />
        </div>
        <div className="resource__body__content">
          <div className="resource__body__content__title">{resource.title}</div>
          <div className="resource__body__content__description">
            {resource.body}
          </div>
          <div className="resource__body__content__footer">
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
  }
};

export default Resource;
