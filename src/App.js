import React, { useState } from 'react';
import './App.css';
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username: 'cleverqazi',
      caption: 'Wow it works!',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    },
    {
      username: 'cleverqazi',
      caption: 'Wow it works!',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    },
  ]);

  return (
    <div className='app'>
      <div className='app__header'>
        <img
          className='app__headerImage'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt='https://www.extremetech.com/wp-content/uploads/2019/09/SubForester-764A6822edit.jpg'
        />
      </div>
      <h1>Let's build an Instagram Clone with React🚀❗️</h1>
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
