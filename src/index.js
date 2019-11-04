import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// //importing react library and its dom
// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import Mylist from './Pages/MyList';
// //main information targeted to display
// const toDos = [
//     "Go to the gym",
//     "Do some reading ",
//     "working on my project ",
   
// ]
// //ReactDom is similar to Dom in Javascript, it renders one component to the div with the id 
// //root 
// ReactDOM.render(
// <Mylist theList={toDos} />,
//  document.getElementById('root'));
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers
