import React, { useState } from "react";

const CreateProject = () => {
  const [form, setForm] = useState({
    title: "",
    content: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create New Project</h5>

        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            name="content"
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighted-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
