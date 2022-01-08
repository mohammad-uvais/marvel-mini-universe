import React from 'react';

function Details(props) {
    return (
        <details>
            <summary className="dtl-name">
                {props.quantity} {props.type} Available
            </summary>
            <ol className="dtl-container">
                {props.items.map((item, i) => {
                    return (
                        <li key={i}>{item.name} ({item.role})</li>
                    )
                })
                }
            </ol>
        </details>
    )
}

export default Details;