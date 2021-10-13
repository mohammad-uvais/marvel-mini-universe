import React from 'react';
import Navbar from './components/navbar';

class About extends React.Component {
    render() {
       return (
         <>
         <Navbar />
          <div className="full-container">
             <h1>About...</h1>
          </div>
         </>
       )
    }
  }

export default About;