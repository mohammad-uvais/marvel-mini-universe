import React from 'react';

class Loader extends React.Component {
  render() {
     return (
        <div className="d-flex justify-content-center loader">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
     )
  }
}

export default Loader;