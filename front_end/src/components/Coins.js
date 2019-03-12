import React, { Component } from 'react'


class Coins extends Component {
  render(){
    return(
      <div className="coin">
        <span>{this.props.coin.name}  $</span>
        <span>Price: {this.props.coin.quote.USD.price} </span>
        <span>24h Change: {this.props.coin.quote.USD.percent_change_24h}%   </span>
        <span>24h Volume: {this.props.coin.quote.USD.volume_24h}</span>
      </div>
    )
  }
}

export default Coins;
