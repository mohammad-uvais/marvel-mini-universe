import React from 'react';

function Description(props) {
   return (
      <p className="card-text">
         {props.description|| "No Description Available"}
      </p>
   )
}

export default Description;