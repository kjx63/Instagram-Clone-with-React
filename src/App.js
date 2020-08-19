import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './components/Post';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, []);

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
      {posts.map(({ post, id }) => (
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
