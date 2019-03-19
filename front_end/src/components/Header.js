import React, { Component } from 'react'

class Header extends Component {
  render(){
    return(
      <div className="header">
        <span className='headline' onClick={() => {this.props.handleView('none')}}>CRYPTO<i className="fas fa-globe" id="spin"></i>SPHERE</span>
        {this.props.currentUser ?
          <span>
            <button  className='signLogButtons' onClick={() => {this.props.handleDeleteSession(this.props.currentUser)}}>Log Out</button>
            <span className='welcome'>Welcome, {this.props.currentUser}!</span>
          </span> :
          <span></span>
        }
        {!this.props.currentUser ?
          <span>
            <button className='signLogButtons' onClick={() => {this.props.handleView('signup')}}>Sign Up</button>
            <button className='signLogButtons' onClick={() => {this.props.handleView('login')}}>Log In</button>
          </span> :
          <span></span>
        }
      </div>
    )
  }
}

export default Header;
