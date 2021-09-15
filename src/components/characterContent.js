import React from 'react';

class CharacterContent extends React.Component {
  render() {
      return (
          <div className="main-container">
              <div className="container mx-auto mt-4">
                  <div className="row">
                      {this.state.characters.map((characters, index) => {
                          return (
                              <div key={index} className="col-md-4" >
                                  <div className="card-characters">
                                      <img className="character-img" src={characters.thumbnail.path + "." + characters.thumbnail.extension}
                                          alt="thumbnail" />
                                      <div className="card-body">
                                          <h4 className="card-title">{characters.name}</h4>
                                          <p className="card-text">{characters.description !== "" ? characters.description : "No Description Available"}</p>
                                          <details>
                                              <summary className="dtl-name">
                                                  {characters.comics.available} Comics Available
                                              </summary>
                                              <ol className="dtl-container">
                                                  {characters.comics.items.map((items, i) => {
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
                                                  {characters.series.available} Series Available
                                              </summary>
                                              <ol className="dtl-container">
                                                  {characters.series.items.map((items, i) => {
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
                                              {characters.urls.map((urls, i) => {
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
     )
  }
}

export default CharacterContent;