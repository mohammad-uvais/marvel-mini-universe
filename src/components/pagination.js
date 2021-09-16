import React from 'react';

function Pagination(props) {
    return (
        <ul class="pagination pagination-lg justify-content-center fixed-bottom">
            <li class="page-item">
                <button type="button"
                    className="page-link btn-page"
                    onClick={props.prev}>Prev
                </button>
            </li>
            <li class="page-item">
                <button type="button"
                    className="page-link btn-page"
                    onClick={props.next}>Next
                </button>
            </li>
        </ul>
    )
 }

export default Pagination;