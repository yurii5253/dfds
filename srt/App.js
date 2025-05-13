import './css/App.css'
import React from 'react';
import Form from './components/Form'
import tree from './img/tree.jpeg'

function App() { 
 return (<div>
 <Form />
 <Form info="Enter info" />
 <img src={tree} />
 </div>)
}

export default App;