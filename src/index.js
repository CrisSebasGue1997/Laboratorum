import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import "./styles/style.scss"
import {Provider} from 'react-redux'
import store from './Redux/store';
import { getAllSpecialities, getAllPost, getAllCourses } from './Redux/actionCreator';

store.dispatch(getAllSpecialities())
store.dispatch(getAllCourses())
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);

