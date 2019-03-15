import React, { Component } from 'react'
import Coins from './Coins'
import WatchList from './WatchList'

class CoinList extends Component {
  render(){
    return(
      <div className='body-container'>
        <div className='left'>
          <h3>Cryptocurrencies</h3>
          <div className='scroll'>
            {this.props.coins.map((coin, index) => {
              return(
                <Coins
                  key={index}
                  coin={coin}
                  arrayIndex={index}
                  addToWatchList={this.props.addToWatchList}
                />
              )
            })}
          </div>
        </div>
        <div className='right'>
          {this.props.currentUser ?
            <WatchList
              currentUser={this.props.currentUser}
              list={this.props.list}
            /> :
            <div></div>
          }
        </div>
      </div>
    )
  }
}

export default CoinList;
