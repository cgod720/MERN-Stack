import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import SignUpForm from './components/SignUpForm'
import CoinList from './components/CoinList'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: 'none',
      currentUser: '',
      coins: [],
      users: []
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

  handleCreateUser = (user) => {
    fetch('http://localhost5000/users', {
      body: JSON.stringify(user),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then((createdUser) => {
        return createdUser.json()
      })
      .then((jData) => {
        console.log(jData);
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
        <SignUpForm
          handleCreateUser={this.handleCreateUser}
        />
        <CoinList
          coins={this.state.coins}
        />
      </div>
    );
  }
}

export default App;
