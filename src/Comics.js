import React from 'react';
import CryptoJS from 'crypto-js';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Name from './components/Name';
import Description from './components/Description';
import Details from './components/Details';
import Links from './components/Links';
import Pagination from './components/Pagination';
import Images from './components/Images';

class Comics extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         comics: [],
         limit:15,
         offset: 150,
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
      this.setState({offset: this.state.offset + 100}, this.apiCall);
      
   }
   handlePrevClick = () => {
      if (this.state.offset !== 0) {
         this.setState({offset: this.state.offset - 100}, this.apiCall);
      } else {
         this.setState({offset: 0})
      }      
   }
   render() {
      console.log(this.state.comics);   
      return (
         <>
         <Navbar />
         <div className="full-container">
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
                                 <img src={comics.thumbnail.path + "." + comics.thumbnail.extension} alt="thumbnail" className="card-img" />
                              </div>
                              <div className="col-md-6">
                                 <div className="card-body">
                                    <Name name={comics.title} />
                                    <Description desc={comics.description} />
                                    {/* <p className="card-text">
                                       {(comics.description !== null) ?
                                          comics.description :
                                          "No Description Available"}
                                    </p> */}
                                    <p>
                                       Series: <a href={comics.series.resourceURI}>
                                          {comics.series.name}</a>
                                    </p>
                                    <Details
                                       type="Variants"
                                       item={comics.variants} />
                                    <Details
                                       avail={comics.creators.available}
                                       type="Creator/s"
                                       item={comics.creators.items} />
                                    <Details
                                       avail={comics.stories.available}
                                       type="Storie/s"
                                       item={comics.stories.items} />
                                    <Links link={comics.urls} />
                                    <p class="card-text"><small class="text-muted">Number of Pages: {comics.pageCount}</small></p>
                                 </div>
                              </div>
                              <Images image={comics.images} />
                           </div>
                        </div>
                     )
                  })}
               </div>
            }
            <Pagination prev={this.handlePrevClick} next={this.handleNextClick}/>
         </div>
         </>
      )
   }
}
export default Comics;