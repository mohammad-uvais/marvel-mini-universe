import React from 'react';
import CryptoJS from 'crypto-js';
import Loader from './components/loader';
import Pagination from './components/pagination';

class Characters extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         characters: [],
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
      fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=${this.state.limit}&offset=${this.state.offset}`)
         .then(resp => resp.json()).then(resp => {this.setState({characters: resp.data.results, loading: false})
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
      console.log(this.state.characters);   
      return (
         <div>
            <h1>
               C H A R A C T E R S
            </h1>
            {this.state.loading ? <Loader /> :
               <div className="main-container">
                  <div className="container mx-auto mt-4">
                     <div className="row">
                        {this.state.characters.map((characters, index) => {
                           return (
                              <div key={index} className="col-md-4" >
                                 <div className="card-characters">
                                    <img className="character-img" src={ characters.thumbnail.path + "." + characters.thumbnail.extension }
                                    alt="thumbnail" />
                                    <div className="card-body">
                                       <h4 className="card-title">{ characters.name }</h4>
                                       <p className="card-text">{ characters.description !== "" ? characters.description : "No Description Available" }</p>
                                       <details>
                                          <summary className="dtl-name">
                                             { characters.comics.available } Comics Available
                                          </summary>
                                          <ol className="dtl-container">
                                             { characters.comics.items.map((items, i) => {
                                                return (
                                                   <li key={i}>
                                                      {items.name}
                                                   </li>
                                                )
                                                })
                                             }
                                          </ol>
                                       </details>
                                       <details>
                                          <summary className="dtl-name">
                                             { characters.series.available } Series Available
                                          </summary>
                                          <ol className="dtl-container">
                                             { characters.series.items.map((items, i) => {
                                                return (
                                                   <li key={i}>
                                                      {items.name}
                                                   </li>
                                                )
                                                })
                                             }
                                          </ol>
                                       </details>
                                       <details>
                                          <summary className="dtl-name">
                                             {characters.stories.available} Stories Available
                                          </summary>
                                          <ol className="dtl-container">
                                             {characters.stories.items.map((items, i) => {
                                                return (
                                                   <li key={i} >
                                                      {items.name}
                                                   </li>
                                                )
                                             })
                                             }
                                          </ol>
                                       </details>
                                       <div className="urls">
                                             { characters.urls.map((urls, i) => {
                                                return (
                                                   <a href={urls.url} className="btn btn-url mr-2" target="_blank" rel="noreferrer">
                                                      {urls.type.charAt(0).toUpperCase() + urls.type.slice(1)}
                                                   </a>
                                                )
                                                })
                                             }
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           )
                        })}
                     </div>
                  </div>
               </div>
            }
            <Pagination />
         </div>
      )
   }
}
export default Characters;