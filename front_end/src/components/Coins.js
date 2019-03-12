import React, { Component } from 'react'


class Coins extends Component {
  render(){
    return(
      <div className="coin">
        <ul>
          <li>{this.props.coin.name}</li>
          <li></li>
        </ul>
      </div>
    )
  }
}

export default Coins;
