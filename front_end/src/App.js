import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import SignUpForm from './components/SignUpForm'
import LogInForm from './components/LogInForm'
import CoinList from './components/CoinList'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: 'none',
      currentUser: '',
      showList: false,
      coins: [],
      watchList: []
    }
  }
  fetchCryptos = () => {
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

  fetchNews = () => {
    fetch('http://localhost:5000/news')
      .then((data) => {
        return data.json()
      })
      .then((jData) => {
        console.log(jData);
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
    fetch('http://localhost:5000/users', {
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

  handleCreateSession = (user) => {
    fetch('http://localhost:5000/sessions', {
      body: JSON.stringify(user),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then((createdSession) => {
        return createdSession.json()
      })
      .then((jData) => {
        console.log(jData);
        this.setState({
          currentUser: jData.username
        })
        console.log(this.state.currentUser);
      })
  }

  handleDeleteSession = (user) => {
    fetch('http://localhost:5000/sessions', {
      method: 'DELETE'
    })
      .then((data) => {
        return data.json()
      })
      .then((jData) => {
        console.log(jData);
        this.setState({
          currentUser: ''
        })
      })
  }

  handleView = (view) => {
    this.setState({
      currentView: view
    })
  }

  createWatchList = () => {

  }

  updateArray = (user, array) => {
    this.setState((prevState) => {
      prevState[array].push(user)
      return {
        [array]: prevState[array]
      }
    })
  }

  showWatchList = () => {
    if(this.state.currentUser){

    }
  }

  componentDidMount() {
    // this.fetchCryptos()
    this.fetchNews()
  }

  render() {
    return (
      <div className="App">
        <Header
          handleView={this.handleView}
          currentUser={this.state.currentUser}
          handleDeleteSession={this.handleDeleteSession}
        />
        {this.state.currentView === 'signup' ?
        <SignUpForm
          handleCreateUser={this.handleCreateUser}
          handleView={this.handleView}
        /> :
        <div></div>
        }
        {this.state.currentView === 'login' ?
        <LogInForm
          handleCreateSession={this.handleCreateSession}
        /> :
        <div></div>
        }
        <CoinList
          coins={this.state.coins}
          currentUser={this.state.currentUser}
        />
      </div>
    );
  }
}

export default App;
