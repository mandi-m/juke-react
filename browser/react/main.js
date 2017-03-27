import React from 'react'
import ReactDOM from 'react-dom'
import Sidebar from './sidebar'
import Footer from './footer'

class Main extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {}
  }

  mapping() {
    const albumItems = this.state.albums.map(function (album, index) {
      return (
        <div className="col-xs-4" key={index} >
          <a className="thumbnail" href="#">
            <img src={album.imageUrl} />
            <div className="caption">
              <h5>
                <span>{album.name}</span>
              </h5>
              <small>{album.songs.length} songs</small>
            </div>
          </a>
        </div>
      );
    })
    return albumItems;
  }

  render() {
    return (
      <div id="main"
        className="container-fluid">
        <Sidebar />
        <div className="col-xs-10">
          <h3>Albums</h3>
          <div className="row">
            {this.mapping()}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main
