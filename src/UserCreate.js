import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveUser } from './store';
class UserCreate extends Component{
  constructor(props){
    super(props);
    this.state = {
    name: ''
    };
  this.onChangeName = this.onChangeName.bind(this);
  this.onSave = this.onSave.bind(this);
  }

  onSave(ev){
    ev.preventDefault();
    const user = { name: this.state.name };
    this.props.saveUser(user);

  }

  onChangeName(ev){
    this.setState({ name: ev.target.value });
  }

  render(){
    const { name } = this.state;
    const { onChangeName, onSave } = this;
    return (
      <div>
        <h1>Create A User</h1>
          <form onSubmit = { onSave }>
            <input value = { name } onChange = { onChangeName } />
            <button disabled = {this.state.name.length ? false : true }>Create</button>
          </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history })=> {
  return {
    saveUser: (user)=> dispatch(saveUser(user, history))
  };
};

export default connect(null, mapDispatchToProps)(UserCreate);
