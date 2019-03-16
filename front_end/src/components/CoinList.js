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
          <h3>Watch List</h3>
          <div className="scroll">
            {this.props.list.map((listing, index) => {
              return(
                <WatchList
                  key={index}
                  arrayIndex={index}
                  currentUser={this.props.currentUser}
                  listing={listing}
                  handleDeleteWatchList={this.props.handleDeleteWatchList}
                  currentArray='list'
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default CoinList;
