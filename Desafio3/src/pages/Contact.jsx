import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [charCount, setCharCount] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setCharCount(event.target.value.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      setError(true);
      return;
    }

    console.log(formData);

    setSuccess(true);
    setError(false);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setCharCount(0);
  };

  return (
    <>
      {error && (
        <div className="alert alert-danger text-center" role="alert">
          Completa toda la informacion solicitada!.
        </div>
      )}
      {success && (
        <div className="alert alert-success text-center" role="alert">
          Mensaje enviado de forma exitosa!
        </div>
      )}
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            maxLength={300}
          />
        </div>
        <div className="mt-2">
          <small className="form-text text-right text-white">
            {charCount}/300
          </small>
          <br />
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
