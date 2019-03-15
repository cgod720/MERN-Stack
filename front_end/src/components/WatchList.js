import React, { Component } from 'react'

class WatchList extends Component {
  constructor(props){
    super(props)
    this.state = {
      createdBy: this.props.currentUser.id,
      list: []
    }
  }

  getWatchList = (list) => {
    fetch('http://localhost:5000/watchlist')
      .then((data) => {
        return data.json()
      })
      .then((jData) => {
        console.log(jData);
        this.sortList(jData)
        console.log(this.state.list);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  sortList = (currencies) => {
    let coinData = []
    currencies.forEach((coin) => {
      coinData.push(coin)
    })
    this.setList(coinData)
  }

  setList = (coins) => {
    this.setState({
      list: coins
    })
  }

  componentDidMount(){
    // this.getWatchList()
  }


  render(){
    return(
      <div>
        <h3>Watch List</h3>
          {this.state.list.map((coin) => {
            return(
              <div>
                <p>{coin.name}</p>
                <p>{coin.quote.USD.price}</p>
              </div>
            )
          })}
      </div>
    )
  }
}

export default WatchList;
