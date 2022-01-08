import React from 'react';

function Links(props) {
    return (
        <div className="urls">
            {props.links.map((link, i) => {
                return (
                    <a
                    key={i}
                    href={link.url}
                    className="btn btn-url mr-2"
                    target="_blank"
                    rel="noreferrer">
                        {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
                    </a>
                )
            })
            }
        </div>
    )
}

export default Links;