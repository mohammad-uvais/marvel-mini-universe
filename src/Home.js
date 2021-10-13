import React from 'react';
import Navbar from './components/Navbar';

class Home extends React.Component {
    render() {
       return (
          <>
          <Navbar />
          <div className="full-container bg-wrap">
             <img src="https://media.wired.com/photos/5955ceabcbd9b77a41915cf6/191:100/w_1280,c_limit/marvel-characters.jpg" alt="hero" className="bg-img"/>
             <div className="bg-content container">
                <h1>Welcome To Marvel's Mini Universe</h1>
                <div>
                   <p>
                      Marvel's Mini Universe is an SPA created using React, a JS library. Here you can explore various Characters and Comics of Marvel's Universe.
                      These Characters and Comics are displayed using the data obtained by fetching Marvel's API (RESTful). In addition to that you can also find a survey form where you can connect with us and tell us what you liked amongst these Characteres, Comics or about the Whole App.
                   </p>
                   <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent tristique magna sit. Id volutpat lacus laoreet non. Sed tempus urna et pharetra pharetra massa massa. Vitae congue eu consequat ac felis donec et odio. Arcu non sodales neque sodales ut etiam sit amet nisl. Quis varius quam quisque id. Purus faucibus ornare suspendisse sed. In dictum non consectetur a erat nam at lectus urna. In hendrerit gravida rutrum quisque non tellus orci. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Sapien eget mi proin sed libero enim sed. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Orci porta non pulvinar neque laoreet. Mauris a diam maecenas sed enim ut sem. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Orci dapibus ultrices in iaculis nunc sed augue. Ut diam quam nulla porttitor massa id neque.</p>
                </div>
             </div>
          </div>
          </>
       )
    }
  }

export default Home;