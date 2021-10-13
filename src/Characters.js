import React from 'react';
import CryptoJS from 'crypto-js';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Name from './components/Name';
import Description from './components/Description';
import Details from './components/Details';
import Links from './components/Links';
import Pagination from './components/Pagination';

class Characters extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         characters: [],
         limit:18,
         offset: 50, 
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
      this.setState({offset: this.state.offset + 50}, this.apiCall);
      
   }
   handlePrevClick = () => {
      if (this.state.offset !== 0) {
         this.setState({offset: this.state.offset - 50}, this.apiCall);
      } else {
         this.setState({offset: 100})
      }      
   }
   render() {
      console.log(this.state.characters);   
      return (
         <>
         <Navbar />
         <div className="full-container">
            <h1>
               C H A R A C T E R S
            </h1>
            {this.state.loading ?
            <Loader /> :
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
                                       <Name name={characters.name} />
                                       <Description desc={characters.description} />
                                       <Details
                                       type="Comics"
                                       avail={characters.comics.available}
                                       item={characters.comics.items} />
                                       <Details
                                       type="Series"
                                       avail={characters.series.available}
                                       item={characters.series.items} />
                                       <Details
                                       type="Stories"
                                       avail={characters.stories.available}
                                       item={characters.stories.items} />
                                       <Links link={characters.urls} />
                                    </div>
                                 </div>
                              </div>
                           )
                        })}
                     </div>
                  </div>
               </div>
            }
            <Pagination prev={this.handlePrevClick} next={this.handleNextClick}/>
         </div>
         </>
      )
   }
}
export default Characters;