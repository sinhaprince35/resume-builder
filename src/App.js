import "./App.css";
import Form from "./Components/Form";
import Preview from "./Components/Preview";
import Header from "./Components/Header";
import { useState } from "react";


function App() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    email: "",
    phone: "",
    address: "",
    countryName: "",
    cityName: "",
    State: "",
    education: "",
    experience: "",
    skills: "",
    linkedin: "",
    github: "",
    image: null,
  });

  return (
    <>
      <Header />
      <div className="divider"></div>
      <div className="App">
        <div className="Form">
          <Form formData={formData} setFormData={setFormData} />
        </div>
        <div className="Preview">
          <Preview formData={formData} />
        </div>
      </div>
    </>
  );
}

export default App;
