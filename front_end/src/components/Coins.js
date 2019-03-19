import React, { Component } from 'react'


class Coins extends Component {
  render(){
    return(
      <div className="coin">
        <div>
          <span>{this.props.coin.name} ({this.props.coin.symbol})</span>
        </div>
        <div>
          <span>Price: ${this.props.coin.quote.USD.price} </span>
        </div>
        <div>
          <span>Last Hour: {this.props.coin.quote.USD.percent_change_1h}%   </span>
        </div>
        <div>
          <span>24h Change: {this.props.coin.quote.USD.percent_change_24h}%   </span>
        </div>
        <div>
          <span>24h Volume: {this.props.coin.quote.USD.volume_24h}</span>
        </div>
        <div>
          <span>Market Cap: {this.props.coin.quote.USD.market_cap}</span>
        </div>
        <div>
          <button onClick={() => this.props.addToWatchList(this.props)}><i className="fas fa-eye"></i></button>
        </div>
        <br/>
      </div>
    )
  }
}

export default Coins;
