import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';

function App() {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const submitMessage = () => {
      Axios.post('http://localhost:3001/api/insert', {
        name: name, 
        message: message,
      }).then(() => {
        alert("successfully sent");
      });
    };

    const nameInputChangeHandler = (e) => {
      setName(e.target.value);
    }

    const messageInputChangeHandler = e => {
      setMessage(e.target.value)
    }

  return (
    <div className="App">

    <h1> Contact Form</h1>

        <div className='Form'>
          <label>name</label>
          <input type="text" name="name" onChange={nameInputChangeHandler}/>
          

          <label>message</label>
          <input type="text" name="message" onChange={messageInputChangeHandler}/>
         

          <button onClick={submitMessage}>Submit</button>
         </div>
     </div>
         
  );
}

export default App;
