import React, {useState } from "react";
import "./Style/form.css";


const Form = ({formData, setFormData}) => {
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  const [progress, setProgress] = useState(0);

  const calculateProgress = () => {
    const fields = Object.values(formData);
    const filledFields = fields.filter((field) => field !== "").length;
    const totalFields = fields.length;
    const calculatedProgress = (filledFields / totalFields) * 100;
    setProgress(calculatedProgress);
  };

  React.useEffect(() => {
    calculateProgress();
  }, [formData,calculateProgress]);

  return (
    <div className="container">

      <div>
        <label>Progress: {progress.toFixed(2)}%</label>
        <progress value={progress} max="100"></progress>
      </div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Details</legend>
          <label>
            Name:
            <br />
            <input
              type="text"
              name="name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <label>
            Upload Image:
            <br />
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageChange}
            />
          </label>
          <br />
          <label>
            E-mail:
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            LinkeIn:
            <br />
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Git Hub:
            <br />
            <input
              type="url"
              name="github"
              value={formData.github}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Mobile Number:
            <br />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Add Bio:
            <br />
            <input
              type="text"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            />
          </label>
          <br />
        </fieldset>
        <fieldset>
          <legend>Communication</legend>
          <label>
            Address:
            <br />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Country Name:
            <br />
            <input
              type="text"
              name="countryName"
              value={formData.countryName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            City Name:
            <br />
            <input
              type="text"
              name="cityName"
              value={formData.cityName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            State Name:
            <br />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </label>
          <br />
        </fieldset>
        <fieldset>
          <legend>Qualification and Experience</legend>
          <label>
            Education Details:
            <br />
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Experience:
            <br />
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </label>
          <br />
        </fieldset>
        <fieldset>
          <legend>Skills and other Details</legend>
          <label>
            Skills:
            <br />
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </label>
          <br />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
