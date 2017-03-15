import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import client from './client/reducer';
import signup from './signup/reducer';
import login from './login/reducer';
import widgets from './widgets/reducer';

const IndexReducer = combineReducers({
  login,
  signup,
  client, // <--
  form,
  widgets,
})

export default IndexReducer;
