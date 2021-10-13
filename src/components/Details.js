import React from 'react';

function Details(props) {
    return (
        <details>
            <summary className="dtl-name">
                {props.avail} {props.type} Available
            </summary>
            <ol className="dtl-container">
                {props.item.map((item, i) => {
                    return (
                        <li key={i}>
                            {item.name} ({item.role})
                        </li>
                    )
                })
                }
            </ol>
        </details>
    )
}

export default Details;