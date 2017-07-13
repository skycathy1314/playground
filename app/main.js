/**
 * Created by Cassie.Xu on 17/7/6.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Home from './components/Home/Home';

const rootRoute = {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: Home,
    childRoutes: [
      require('./components/TimerBar'),
    ]
  }]
};
let arr = [];
browserHistory.listen((location) => {
  if (arr.length === 0){
    arr.push(location);
  } else {
    let last = arr[arr.length - 1];
    if (last && last.pathname !== location.pathname){
      arr.push(location);
    }
    if (arr.length > 2){
      arr.shift();
    }
  }
  let obj = null;
  let len = arr.length;
  if (len === 0){
    obj = {
      'pathname': '/',
      search: ''
    };
  } else {
    obj = {
      'pathname': arr[0].pathname,
      search: arr[0].search};
  }
  location.last = obj;
});

render(<Router history={browserHistory} routes={rootRoute} />, document.getElementById('root'));