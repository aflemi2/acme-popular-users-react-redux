import React from 'react';
import { connect } from 'react-redux';

const Home = ({users})=>{
  return (
    <div>
      <h1>
        Home
      </h1>
      <h2>
        {users.map((user, index) => {
          if(index === 0){
            return (
              <div key={user.id}>
                Our Highest Rated User is {user.name}.
              </div>
              );
          }
        })}
      </h2>
    </div>
  );
};
const mapStateToProps = ({users})=>{
  return {
    users
  };
};

export default connect(mapStateToProps)(Home);
