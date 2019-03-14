import React, { Component } from 'react'

class Header extends Component {
  render(){
    return(
      <div className="header">
        <h1 onClick={() => {this.props.handleView('none')}}>Crypto-Sphere</h1>
        {this.props.currentUser ?
          <div>
            <h3>Welcome, {this.props.currentUser}!</h3>
            <button onClick={() => {this.props.handleDeleteSession(this.props.currentUser)}}>Log Out</button>
          </div> :
          <div></div>
        }
        <nav>
          <button onClick={() => {this.props.handleView('signup')}}>Sign Up</button>
          <button onClick={() => {this.props.handleView('login')}}>Log In</button>
        </nav>
      </div>
    )
  }
}

export default Header;
