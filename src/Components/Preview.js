import React from "react";
import "./Style/preview.css";

const Preview = ({ formData }) => {
  return (
    <div className="preview-container">
      <div className="left-side">
        {formData?.image && (
          <>
            <img
              className="image"
              src={URL.createObjectURL(formData.image)}
              alt="User Avatar"
            />
            <hr/>
          </>
        )}

        {formData?.bio && (
          <>
            <p className="bio">{formData.bio}</p>
          </>
        )}
      </div>
      <div className="right-side">
        {formData?.name && (
          <>
            <p className="title">{formData.name.toUpperCase()}</p>
          </>
        )}
        <br />
        <div className="communication-details">
          {formData?.email && (
            <>
              {formData.email}
              <br />
            </>
          )}
          {formData.phone && (
            <>
              {formData.phone}
              <br />
            </>
          )}
          {formData.linkedin && (
            <>
              {formData.linkedin}
              <br />
            </>
          )}
          {formData.github && (
            <>
              {formData.github}
              <br />
            </>
          )}
          <p>{formData.address && <>{formData.address}</>}</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Preview;
