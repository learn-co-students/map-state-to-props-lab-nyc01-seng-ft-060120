import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here

class Users extends Component {

  render() {
    // console.log(this.props.users)
  let users = this.props.users.map(user => <li>Name: {user.username}, Hometown: {user.hometown}</li>)
    return (
      <div>
        <ul>
          Users! 
          {users}
          {users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // debugger;
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
