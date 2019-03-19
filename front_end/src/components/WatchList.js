import React, { Component } from 'react'

class WatchList extends Component {
  constructor(props){
    super(props)
    this.state = {
      createdBy: this.props.currentUser.id,
    }
  }

  render(){
    return(
      <div>
      {this.props.currentUser ?
        <div>
          <div>
            <span>{this.props.listing.name} ({this.props.listing.symbol})</span> ${this.props.listing.quote.USD.price}
          </div>
          <div>
            <button onClick={() => {this.props.handleDeleteWatchList(this.props.arrayIndex, this.props.currentArray)}}><i className="fas fa-trash-alt"></i></button>
          </div>
          <br/>
        </div>
        : <div></div>
      }
      </div>
    )
  }
}

export default WatchList;
