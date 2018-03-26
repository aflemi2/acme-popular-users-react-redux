import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = ({users})=> {
  return (
    <ul>
      <li>
        <Link to = '/'>
          Home
        </Link>
      </li>
      <li>
        <Link to = '/users'>
          Users ({ users.length })
        </Link>
      </li>
      <li>
        {users.map((user, index) => {
          if(index === 0){
            return (
              <Link to = '/users/1' key={user.id}>
              {/* ^^hard coded route */}
                Highest Rated User ({user.name})
              </Link>
              );
          }
        })}
      </li>
      <li>
        <Link to = '/users/create'>
          Create A User
        </Link>
      </li>
    </ul>
  );
};

const mapStateToProps = ({users}) => {
  return { users };
};


export default connect(mapStateToProps)(Nav);
