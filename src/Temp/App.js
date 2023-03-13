
import './App.css';
import Post from './Post.js';
import React from 'react';

//<p style={{color:"blue", alignSelf:'center'}}>Login</p>
function App() {
  return (
    <div className="App">

      <div className='header'>
        <div className='login'> 
          <button className='login_button'>
          <p>Login</p>
          </button>  
        </div> 
      </div>

      <div className='events_posts'>
        Events  
        <Post></Post>
        
      </div>
    </div>
  );
}

export default App;
