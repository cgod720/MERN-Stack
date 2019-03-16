import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import SignUpForm from './components/SignUpForm'
import LogInForm from './components/LogInForm'
import CoinList from './components/CoinList'
import News from './components/News'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: 'none',
      currentUser: '',
      coins: [],
      news: [],
      list: [],
      createdBy: ''
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
        this.sortNews(jData.response.articles);
        console.log(this.state.news);
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

  sortNews = (news) => {
    let newsData = []
    news.forEach((article) => {
      newsData.push(article)
    })
    this.setNews(newsData)
  }

  setNews = (articles) => {
    this.setState({
      news: articles
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
          currentUser: jData.username,
          createdBy: jData.username
        })
        this.getWatchList()
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


  updateArray = (user, array) => {
    this.setState((prevState) => {
      prevState[array].push(user)
      return {
        [array]: prevState[array]
      }
    })
  }

  addToWatchList = (list) => {
    fetch('http://localhost:5000/watchlist', {
      body: JSON.stringify(list),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then((data) => {
        return data.json()
      })
      .then((jData) => {
        console.log(jData);
        this.getWatchList()
      })
  }

  getWatchList = () => {
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
    let listData = []
    currencies.forEach((coin) => {
      listData.push(coin)
    })
    this.setList(listData)
  }

  setList = (coins) => {
    this.setState({
      list: coins
    })
  }

  handleDeleteWatchList = (arrayIndex, currentArray) => {
    console.log(arrayIndex);
    console.log(currentArray);
    fetch('http://localhost:5000/watchlist', {
      method: 'DELETE'
    })
      .then((data) => {
        this.removeFromArray(currentArray, arrayIndex)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  removeFromArray = (array, arrayIndex) => {
    this.setState((prevState) => {
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
    })
  }




  componentDidMount() {
    this.fetchCryptos()
    this.fetchNews()
  }

  render() {
    return (
      <div className="App">
      <span>
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
          handleView={this.handleView}
          currentUser={this.state.currentUser}
        /> :
        <div></div>
        }
        </span>
        <CoinList
          coins={this.state.coins}
          currentUser={this.state.currentUser}
          addToWatchList={this.addToWatchList}
          list={this.state.list}
          handleDeleteWatchList={this.handleDeleteWatchList}
        />
        <News
          news={this.state.news}
        />
      </div>
    );
  }
}

export default App;
