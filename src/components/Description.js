import React from 'react';

function Description(props) {
   return (
      <p className="card-text">
         {props.desc || "No Description Available"}
      </p>
   )
 }

export default Description;