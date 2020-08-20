import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    let {users, numberOfUsers} = this.props
    let userCards = users.map((user, index) => <li key={index}>{user.username} {index}</li>)
    console.log(users);
    return (
      <div>
        {numberOfUsers}
        <ul>
          Users!
          {userCards}
          
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
