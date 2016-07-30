import { combineReducers } from 'redux';
import routes from './routesReducer';
import navPopup from './navPopupReducer';

const rootReducer = combineReducers({
  routes,
  navPopup
})

export default rootReducer;
