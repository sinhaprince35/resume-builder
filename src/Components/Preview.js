import React from "react";
import "./Style/preview.css";
import { jsPDF } from "jspdf";

const generatePDF = (formData) => {
  const doc = new jsPDF();
  if (formData.name) {
    doc.text(formData.name.toUpperCase(), 20, 20);
  }

  if (formData.image) {
    const imgData = URL.createObjectURL(formData.image);
    doc.addImage(imgData, "JPEG", 20, 30, 50, 50);
  }

  if (formData.bio) {
    doc.text(20, 90, formData.bio);
  }

  if (formData.email) {
    doc.text(20, 110, `Email: ${formData.email}`);
  }

  if (formData.phone) {
    doc.text(20, 120, `Phone: ${formData.phone}`);
  }

  if (formData.linkedin) {
    doc.text(20, 130, `LinkedIn: ${formData.linkedin}`);
  }

  if (formData.github) {
    doc.text(20, 140, `GitHub: ${formData.github}`);
  }

  if (formData.address) {
    doc.text(20, 150, `Address: ${formData.address}`);
  }
  doc.save("resume.pdf");
};

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
            <hr />
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
          <hr />
          <h3>Education Details</h3>
          {formData.education && (
            <>
              {formData.education}
              <br />
            </>
          )}
          <h3>Experience</h3>
          {formData. experience && (
            <>
              {formData.experience}
              <br />
            </>
          )}
          <h3>Add Skills</h3>
          {formData.skills && (
            <>
              {formData.skills}
              <br />
            </>
          )}
        </div>
        
        <button
          style={{ fontSize: "16px", padding: "10px 20px", margin: "10px" }}
          onClick={() => generatePDF(formData)}
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default Preview;
