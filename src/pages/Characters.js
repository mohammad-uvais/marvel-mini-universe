import React from 'react';
import CryptoJS from 'crypto-js';

import Name from '../components/Name';
import Links from '../components/Links';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import Details from '../components/Details';
import Description from '../components/Description';
import Pagination from '../components/Pagination';

class Characters extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         characters: [],
         limit: 18,
         offset: 0,
         loading: false,
      }
   }

   componentDidMount() {
      this.setState({ loading: true }, this.getCharactersData);
   }

   getCharactersData = () => {
      this.setState({ loading: true });

      const time = new Date().getTime();
      const PUB_KEY = "9b662066630464683985ed94abf300ea";
      const PVT_KEY = "85d5ef6d9b4be521ef9cac57ff61c6bcd5dd11bc";
      const API_KEY = "9b662066630464683985ed94abf300ea";
      const message = time + PVT_KEY + PUB_KEY;
      const crypto = CryptoJS.MD5(message);
      const hash = crypto.toString();

      fetch(`https://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${API_KEY}&hash=${hash}&limit=${this.state.limit}&offset=${this.state.offset}`)
         .then((resp) => resp.json())
         .then((resp) => {
            this.setState({ characters: resp.data.results, loading: false })
         })
         .catch((err) => console.error(err))
   }

   handleNextClick = () => {
      this.setState({ offset: this.state.offset + 100 }, this.getCharactersData);

   }
   
   handlePrevClick = () => {
      if (this.state.offset) {
         this.setState({ offset: this.state.offset - 100 }, this.getCharactersData);
      } else {
         alert("No More Previous Page")
         // this.setState({ offset: 0 })
      }
   }

   render() {
      return (
         <>
            <Navbar />

            <div className="full-container">
               <h1>C H A R A C T E R S</h1>

               {this.state.loading ?
                  <Loader /> :
                  <div className="main-container">
                     <div className="container mx-auto mt-4">
                        <div className="row">
                           {this.state.characters.map((character, i) => {
                              return (
                                 <div key={i} className="col-md-4" >
                                    <div className="card-characters">
                                       <img
                                       className="character-img"
                                       src={character.thumbnail.path + "." + character.thumbnail.extension}
                                       alt="thumbnail" />
                                       <div className="card-body">
                                          <Name name={character.name} />
                                          <Description description={character.description} />
                                          <Details
                                             type="Comics"
                                             quantity={character.comics.available}
                                             items={character.comics.items} />
                                          <Details
                                             type="Series"
                                             quantity={character.series.available}
                                             items={character.series.items} />
                                          <Details
                                             type="Stories"
                                             quantity={character.stories.available}
                                             items={character.stories.items} />
                                          <Links links={character.urls} />
                                       </div>
                                    </div>
                                 </div>
                              )
                           })}
                        </div>
                     </div>
                  </div>
               }
               <Pagination prevClick={this.handlePrevClick} nextClick={this.handleNextClick} />
            </div>
         </>
      )
   }
}
export default Characters;