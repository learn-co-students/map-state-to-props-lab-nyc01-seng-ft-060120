import React, { Component } from 'react';
import {connect} from 'react-redux';

class Users extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
          Users! {this.props.users.length}
        <ul>
          {this.props.users.map(user => <li>{user.username}</li>)}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {return {users: state.users}}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
