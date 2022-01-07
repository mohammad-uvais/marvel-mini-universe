import React from 'react';

function Pagination(props) {
    return (
        <ul className="pagination pagination-lg justify-content-center fixed-bottom">
            <li className="page-item">
                <button type="button"
                    className="page-link btn-page"
                    onClick={props.prevClick}>Prev
                </button>
            </li>
            <li className="page-item">
                <button type="button"
                    className="page-link btn-page"
                    onClick={props.nextClick}>Next
                </button>
            </li>
        </ul>
    )
}

export default Pagination;