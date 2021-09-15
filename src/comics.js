import React from 'react';
import CryptoJS from 'crypto-js';
import Loader from './components/loader';
import Pagination from './components/pagination';

class Comics extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         comics: [],
         limit:20,
         offset: 0, 
         loading: false,
      }  
   }
   apiCall = () => {
      this.setState({loading: true});
      let ts = new Date().getTime();
      let pubkey = "9b662066630464683985ed94abf300ea";
      let pvtkey = "85d5ef6d9b4be521ef9cac57ff61c6bcd5dd11bc";
      let apikey = "9b662066630464683985ed94abf300ea";
      let message = ts + pvtkey + pubkey;
      var a = CryptoJS.MD5(message);
      let hash = a.toString();
      fetch(`https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=${this.state.limit}&offset=${this.state.offset}`)
         .then(resp => resp.json()).then(resp => {this.setState({comics: resp.data.results, loading: false})
         }).catch(err => console.err(err))
   }
   componentDidMount() {
      this.setState({loading: true}, this.apiCall);
   }
   handleNextClick = () => {
      this.setState({offset: this.state.offset + 20}, this.apiCall);
      
   }
   handlePrevClick = () => {
      if (this.state.offset !== 0) {
         this.setState({offset: this.state.offset - 20}, this.apiCall);
      } else {
         this.setState({offset: 0})
      }      
   }
   render() {
      console.log(this.state.comics);   
      return (
         <div>
            <h1>
               C O M I C S
            </h1>
            {this.state.loading ?
            <Loader /> :
               <div className="main-container">
                  {this.state.comics.map((comics, index) => {
                     return (
                        <div className="card mb-3 card-comics">
                           <div className="row no-gutters">
                              <div className="col-md-3">
                                 <img src={comics.thumbnail.path + "." + comics.thumbnail.extension} alt="thumbnail" className="card-img comics-img" />
                              </div>
                              <div className="col-md-6">
                                 <div className="card-body">
                                    <h3 className="card-title">{comics.title}</h3>
                                    <p className="card-text">{comics.description !== null ? comics.description : "No Description Available"}</p>
                                    <p>Series: <a href={comics.series.resourceURI}>
                                       {comics.series.name}
                                    </a>
                                    </p>
                                    <details>
                                       <summary className="dtl-name">
                                          Variants
                                       </summary>
                                       <ol className="dtl-container">
                                          {comics.variants.map((variants, i) => {
                                             return (
                                                <li key={i} >
                                                   <a href={variants.resourceURI}
                                                      target="_blank"
                                                      rel="noreferrer">
                                                      {variants.name}
                                                   </a>
                                                </li>
                                             )
                                          })
                                          }
                                       </ol>
                                    </details>
                                    <details>
                                       <summary className="dtl-name">
                                          {comics.creators.available} Creator/s Available
                                       </summary>
                                       <ol className="dtl-container">
                                          {comics.creators.items.map((items, i) => {
                                             return (
                                                <li key={i} >
                                                   <a href={items.resourceURI}
                                                      target="_blank"
                                                      rel="noreferrer">
                                                      {items.name}({items.role})
                                                   </a>
                                                </li>
                                             )
                                          })
                                          }
                                       </ol>
                                    </details>
                                    <details>
                                       <summary className="dtl-name">
                                          {comics.stories.available} Storie/s Available
                                       </summary>
                                       <ol className="dtl-container">
                                          {comics.stories.items.map((items, i) => {
                                             return (
                                                <li key={i} >
                                                   <a href={items.resourceURI}
                                                      target="_blank"
                                                      rel="noreferrer">
                                                      {items.name}
                                                   </a>
                                                </li>
                                             )
                                          })
                                          }
                                       </ol>
                                    </details>
                                    <div className="urls">
                                       {comics.urls.map((urls, i) => {
                                          return (
                                             <a href={urls.url} className="btn btn-url mr-2" target="_blank" rel="noreferrer">
                                                {urls.type.charAt(0).toUpperCase() + urls.type.slice(1)}
                                             </a>
                                          )
                                       })
                                       }
                                    </div>
                                    <p class="card-text"><small class="text-muted">Number of Pages: {comics.pageCount}</small></p>
                                 </div>
                              </div>
                              <div className="col-md-3">
                                 <div class="card-columns">
                                    {comics.images.map((images, i) => {
                                       return (
                                          <div key={i} class="card">
                                             <img src={images.path + "." + images.extension} class="card-img comics-img" alt="thumbnail" />
                                          </div>
                                       )
                                    })}
                                 </div>
                                 </div>
                           </div>
                        </div>
                     )
                  })}
               </div>
            }
            <Pagination prev={this.handlePrevClick} next={this.handleNextClick}/>
         </div>
      )
   }
}
export default Comics;