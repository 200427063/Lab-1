import React, { useState } from 'react';
import Greeting from './Greeting/index.jsx';
import "./index.css"

const App = () => {

const [name, setName] = useState();

return (  
<>
<center>
  <input
    onChange={({target: {value}}) => setName(value)}
    placeholder="Enter your name here "
  />
  </center>
  <Greeting name={name}/>
</>
);
};

export default App;