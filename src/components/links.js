import React from 'react';

function Links(props) {
    return (
        <div className="urls">
            {props.link.map((urls, i) => {
                return (
                    <a href={urls.url} className="btn btn-url mr-2" target="_blank" rel="noreferrer">
                        {urls.type.charAt(0).toUpperCase() + urls.type.slice(1)}
                    </a>
                )
            })
            }
        </div>
    )
}

export default Links;