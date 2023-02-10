import React, { useState } from "react";

const Contact = () => {
  const [charactersLeft, setCharactersLeft] = useState(600);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    setCharactersLeft(600 - value.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setCharactersLeft(600);
  };

  return (
    <div className="container mt-5 p-5">
      <h2 className="text-center mb-5">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control mb-1"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control mb-1"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control mb-2"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            maxLength={600}
            required
          />
          {charactersLeft >= 0 ? (
            <small className="border rounded p-1">{charactersLeft} characters left</small>
          ) : (
            <small className="text-danger">Maximum length reached</small>
          )}
        </div>
        <button type="submit" className="btn btn-outline-secondary m-2 text-decoration-none text-white mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

