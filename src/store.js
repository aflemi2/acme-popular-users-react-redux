import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const usersReducer = (state = [], action)=> {
  return state;
};

const reducer = combineReducers({
  users: usersReducer
});

const loadUsers = ()=> {

};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export { loadUsers };
