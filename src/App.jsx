import { useEffect, useState } from 'react';
import PostForm from './components/PostForm';
import './App.css';

function App() {
  const [posts, setPosts] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then((data) => data.json())
      .then((json) => {
        setPosts(json[0].title);
      });
  }, []);

  return (
    <div className="main">
      <div className="postForm">
        <PostForm />
      </div>
      <div className="info">
        {posts.length > 0 ? <>{posts}</> : <>loading</>}
      </div>
    </div>
  );
}

export default App;
