import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  { saveUser } from './store';

const Users = ({ users, increment, decrement })=> {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {
          users.map( user => {
            return (
              <li key = { user.id }>
                <Link to = {`/users/${user.id}`}> { user.name }</Link>
                <div>Rating: {user.rating} </div>
                <button onClick={()=> decrement(user) }>-</button>
                <button onClick={()=> increment(user) }>+</button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

const mapStateToProps = ({users})=>{
  return {
    users
  };
};

const mapDispatchToProps = ( dispatch )=> {
  return {
    increment: (user)=> {
      user.rating++;
      return dispatch(saveUser(user));
    },
    decrement: (user)=> {
      user.rating--;
      return dispatch(saveUser(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
