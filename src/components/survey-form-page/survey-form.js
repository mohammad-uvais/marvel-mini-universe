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
          <label htmlFor="name" id="name-label">
            Name:
          </label>
          <input id="name" className="form-control" type="text" name="name" placeholder="Enter your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email" id="email-label">
            Email:
          </label>
          <input id="email" className="form-control" type="email" name="email" placeholder="Enter your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="number" id="number-label">
            Age:
          </label>
          <input id="number" className="form-control" type="number" name="age" min="10" max="90" placeholder="Age" />
        </div>
        <div className="form-group">
          <p>Which part of the App did you liked the most?</p>
          <select id="dropdown" className="form-control" name="age-group">
            <option selected disabled>Select group</option>
            <option value="child">Characters Section</option>
            <option value="adult">Comics Section</option>
            <option value="old">The overall Theme and Style of the App</option>
          </select>
        </div>
        <div className="form-group">
          <p>Would you recommend any suggestions for this React App?</p>
          <label htmlFor="recommend">
            <input id="recommend" className="input-radio" type="radio" name="recommend" value="definitely" />
            Definitely
          </label>
          <label htmlFor="recommend">
            <input id="recommend" className="input-radio" type="radio" name="recommend" value="May be" />
            May be
          </label>
          <label htmlFor="recommend">
            <input id="recommend" className="input-radio" type="radio" name="recommend" value="Not Sure" />
            Not Sure
          </label>
        </div>
        <div className="form-group">
          <p>What would you like to see improved?</p>
          <label htmlFor="checkbox">
            <input id="checkbox" className="input-checkbox" type="checkbox" name="prefer" value="challenges" />
            Characters Page
          </label>
          <label htmlFor="checkbox">
            <input id="checkbox" className="input-checkbox" type="checkbox" name="prefer" value="open-source-community" />
            Comics Page
          </label>
          <label htmlFor="checkbox">
            <input id="checkbox" className="input-checkbox" type="checkbox" name="prefer" value="videos" />
            The overall Theme and Style of the App
          </label>
        </div>
        <div className="form-group">
          <p>Comments or Feedback (if any)</p>
          <textarea id="comments" className="input-textarea" name="comment" placeholder="Enter your comment here..."></textarea>
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