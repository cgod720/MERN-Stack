import React, { Component } from 'react'

class Header extends Component {
  render(){
    return(
      <div className="header">
        <h1 onClick={() => {this.props.handleView('none')}}>Crypto</h1>
        <nav>
          <button onClick={() => {this.props.handleView('signup')}}>Sign Up</button>
          <button onClick={() => {this.props.handleView('login')}}>Log In</button>
        </nav>
      </div>
    )
  }
}

export default Header;
