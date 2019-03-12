import React, { Component } from 'react'


class Coins extends Component {
  render(){
    return(
      <div className="coin">
        <span>{this.props.coin.name}  $</span>
        <span>{this.props.coin.quote.USD.price}</span>
      </div>
    )
  }
}

export default Coins;
