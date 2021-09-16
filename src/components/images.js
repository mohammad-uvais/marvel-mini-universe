import React from 'react';

function Images(props) {
    return (
        <div className="col-md-3">
            <div class="card-columns">
                {props.image.map((images, i) => {
                    return (
                        <div key={i} class="card">
                            <img src={images.path + "." + images.extension} class="card-img comics-img" alt="thumbnail" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Images;