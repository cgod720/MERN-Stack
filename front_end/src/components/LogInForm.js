import React, { Component } from 'react'

class LogInForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  handleLogUserChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handleLogPassChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  handleLogSubmit = (event) => {
    event.preventDefault()
    this.props.handleCreateSession(this.state)
    this.clearLogForm()
  }
  clearLogForm = () => {
    this.setState({
      username: '',
      password: ''
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleLogSubmit}>
          <input
            type='text'
            placeholder='User Name'
            onChange={this.handleLogUserChange}
            value={this.state.username}
          />
          <input
            type='text'
            placeholder='Password'
            onChange={this.handleLogPassChange}
            value={this.state.password}
          />
          <input type ='submit'/>
        </form>
      </div>
    )
  }
}


export default LogInForm;
