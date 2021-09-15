import React from 'react';

class Pagination extends React.Component {
  render() {
     return (
         <ul class="pagination pagination-lg justify-content-center">
             <li class="page-item">
                 <button type="button"
                     className="page-link btn-page"
                     onClick={this.props.prev}>Prev
                 </button>
             </li>
             <li class="page-item">
                 <button type="button"
                     className="page-link btn-page"
                     onClick={this.props.next}>Next
                 </button>
             </li>
         </ul>
     )
  }
}

export default Pagination;