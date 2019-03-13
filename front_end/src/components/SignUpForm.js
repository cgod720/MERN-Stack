import React, { Component } from 'react'

class SignUpForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
  }

  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value
    })
  }
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleCreateUser(this.state)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      username: '',
      password: ''
    })
  }

  render(){
    return(
      <div>
        <form>
          <input
            type="text"
            placeholder="New User"
            onChange={this.handleUserNameChange}
            value={this.state.name}
          />
          <input
            type="text"
            placeholder="Password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </form>
      </div>
    )
  }
}

export default SignUpForm;
