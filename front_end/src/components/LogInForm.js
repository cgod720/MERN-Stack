import React, { Component } from 'react'

class LogInForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: '',
      pass: ''
    }
  }
  handleLogUserChange = (event) => {
    this.state({
      user: event.target.value
    })
  }
  handleLogPassChange = (event) => {
    this.state({
      pass: event.target.value
    })
  }
  handleLogSubmit = (event) => {
    event.preventDefault()
    this.props.handleCreateSession(this.state)
    this.clearLogForm()
  }
  clearLogForm = () => {
    this.setState({
      user: '',
      pass: ''
    })
  }
  render(){
    return(
      <div>
        <input
          type='text'
          placeholder='User Name'
          onChange={this.handleLogUserChange}
          value={this.state.user}
        />
        <input
          type='text'
          placeholder='Password'
          onChange={this.handleLogPassChange}
          value={this.state.pass}
        />
        <input type ='submit'/>
      </div>
    )
  }
}


export default LogInForm;
