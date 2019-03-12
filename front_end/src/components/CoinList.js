import React, { Component } from 'react'
import Coins from './Coins'

class CoinList extends Component {
  render(){
    return(
      <div>
        {this.props.coins.map((coin, index) => {
          return(
            <Coins
              key={index}
              coin={coin}
              arrayIndex={index}
            />
          )
        })}

      </div>
    )
  }
}

export default CoinList;
