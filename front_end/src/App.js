import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import CoinList from './components/CoinList'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: 'none',
      coins: []
    }
  }
  fetchCryptos = () => {
    // console.log(this.state.code);
    fetch('http://localhost:5000/cmc')
      .then((data) => {
        return data.json()
        // console.log(data);
      })
      .then((jData) => {
        console.log(jData.response.data);
        this.sortCurrencies(jData.response.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  sortCurrencies = (currencies) => {
    let coinData = []
    currencies.forEach((coin) => {
      coinData.push(coin)
    })
    this.setCoins(coinData)
  }

  setCoins = (coins) => {
    this.setState({
      coins: coins
    })
  }

  handleView = (view) => {
    this.setState({
      currentView: view
    })
  }

  componentDidMount() {
    // this.fetchCryptos()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CoinList
          coins={this.state.coins}
        />
      </div>
    );
  }
}

export default App;
