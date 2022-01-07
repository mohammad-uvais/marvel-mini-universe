import React from 'react';

function Images(props) {
    return (
        <div className="col-md-3">
            <div className="card-columns">
                {props.images.map((image, i) => {
                    return (
                        <div key={i} className="card">
                            <img
                            src={image.path + "." + image.extension}
                            alt="thumbnail"
                            className="card-img comics-img" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Images;