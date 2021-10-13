import React from 'react';
import Navbar from './components/Navbar';
import Form from './components/survey-form-page/survey-form';


class Connect extends React.Component {
    render() {
       return (
          <>
          <Navbar />
          <div className="full-container">
             <h1>Connect With Us</h1>
             <Form />
          </div>
          </>
       )
    }
  }

export default Connect;