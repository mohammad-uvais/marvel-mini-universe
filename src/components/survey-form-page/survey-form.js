import React from "react";
import './survey-form.css';

function Form() {
  return (
    <div className="form-container">
      <header className="form-header">
        <h2 id="title">Marvel Fans Survey Form</h2>
        <p id="description">
          Thank you for taking the time to help us knowing your interests
        </p>
      </header>
      <form id="survey-form">
        <div className="form-group">
          <label htmlFor="name" id="name-label">Name:</label>
          <input
          id="name"
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email" id="email-label">Email:</label>
          <input
          id="email"
          type="email"
          name="email" 
          className="form-control"
          placeholder="Enter your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="number" id="number-label">Age:</label>
          <input
          id="number"
          type="number"
          name="age"
          min="10"
          max="90"
          placeholder="Age"
          className="form-control" />
        </div>
        <div className="form-group">
          <p>Which part of the App did you liked the most?</p>
          <select id="dropdown" className="form-control" name="age-group">
            <option value="" disabled>Select Group</option>
            <option value="child">Characters Section</option>
            <option value="adult">Comics Section</option>
            <option value="old">The overall Theme and Style of the App</option>
          </select>
        </div>
        <div className="form-group">
          <p>Would you recommend any suggestions for this React App?</p>
          <label htmlFor="recommend">
            <input
            id="recommend"
            type="radio"
            name="recommend"
            value="definitely"
            className="input-radio" />
            Definitely
          </label>
          <label htmlFor="recommend">
            <input
            id="recommend"
            type="radio"
            name="recommend"
            value="May be" 
            className="input-radio" />
            May be
          </label>
          <label htmlFor="recommend">
            <input
            id="recommend"
            type="radio"
            name="recommend"
            value="Not Sure"
            className="input-radio" />
            Not Sure
          </label>
        </div>
        <div className="form-group">
          <p>What would you like to see improved?</p>
          <label htmlFor="checkbox">
            <input
            id="checkbox"            
            type="checkbox"
            name="prefer"
            value="characters"
            className="input-checkbox" />
            Characters Page
          </label>
          <label htmlFor="checkbox">
            <input
            id="checkbox"            
            type="checkbox"
            name="prefer"
            value="comics"
            className="input-checkbox" />
            Comics Page
          </label>
          <label htmlFor="checkbox">
            <input
            id="checkbox"            
            type="checkbox"
            name="prefer"
            value="overall"
            className="input-checkbox" />
            The overall Theme and Style of the App
          </label>
        </div>
        <div className="form-group">
          <p>Comments or Feedback (if any)</p>
          <textarea
          id="comments"
          name="comment"
          className="input-textarea"
          placeholder="Enter your comment here..." />
        </div>
        <div className="form-group">
          <button type="submit" id="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form;