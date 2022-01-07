import React from 'react';
import CryptoJS from 'crypto-js';

import Name from '../components/Name';
import Links from '../components/Links';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import Images from '../components/Images';
import Details from '../components/Details';
import Pagination from '../components/Pagination';
import Description from '../components/Description';

class Comics extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         comics: [],
         limit: 15,
         offset: 0,
         loading: false,
      }
   }

   componentDidMount() {
      this.setState({ loading: true }, this.getComicsData);
   }

   getComicsData = () => {
      this.setState({ loading: true });

      const time = new Date().getTime();
      const PUB_KEY = "9b662066630464683985ed94abf300ea";
      const PVT_KEY = "85d5ef6d9b4be521ef9cac57ff61c6bcd5dd11bc";
      const API_KEY = "9b662066630464683985ed94abf300ea";
      const message = time + PVT_KEY + PUB_KEY;
      const crypto = CryptoJS.MD5(message);
      const hash = crypto.toString();

      fetch(`https://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${API_KEY}&hash=${hash}&limit=${this.state.limit}&offset=${this.state.offset}`)
         .then((resp) => resp.json())
         .then((resp) => {
            this.setState({ comics: resp.data.results, loading: false })
         })
         .catch((err) => console.error(err))
   }

   handleNextClick = () => {
      this.setState({ offset: this.state.offset + 150 }, this.getComicsData);

   }

   handlePrevClick = () => {
      if (this.state.offset) {
         this.setState({ offset: this.state.offset - 150 }, this.getComicsData);
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
               <h1>C O M I C S</h1>

               {this.state.loading
               ? <Loader />
               : <div className="main-container">
                     {this.state.comics.map((comic, i) => {
                        return (
                           <div key={i} className="card mb-3 card-comics">
                              <div className="row no-gutters">
                                 <div className="col-md-3">
                                    <img
                                    src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt="thumbnail"
                                    className="card-img" />
                                 </div>
                                 <div className="col-md-6">
                                    <div className="card-body">
                                       <Name name={comic.title} />
                                       <Description description={comic.description} />
                                       {/* <p className="card-text">
                                       {(comics.description !== null) ?
                                          comics.description :
                                          "No Description Available"}
                                    </p> */}
                                       <p>
                                          Series: <a href={comic.series.resourceURI}>
                                             {comic.series.name}
                                             </a>
                                       </p>
                                       <Details
                                          type="Variants"
                                          items={comic.variants} />
                                       <Details
                                          quantity={comic.creators.available}
                                          type="Creator/s"
                                          items={comic.creators.items} />
                                       <Details
                                          quantity={comic.stories.available}
                                          type="Storie/s"
                                          items={comic.stories.items} />
                                       <Links links={comic.urls} />
                                       <p className="card-text"><small className="text-muted">Number of Pages: {comic.pageCount}</small></p>
                                    </div>
                                 </div>
                                 <Images images={comic.images} />
                              </div>
                           </div>
                        )
                     })}
                  </div>
               }
               
               <Pagination prevClick={this.handlePrevClick} nextClick={this.handleNextClick} />
            </div>
         </>
      )
   }
}
export default Comics;