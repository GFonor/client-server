import { useEffect, useState } from 'react';
import PostForm from './components/PostForm';
import DeleteForm from './components/DeleteForm';
import './App.css';

function App() {
  const [posts, setPosts] = useState('');

  useEffect(() => {
    // const par = setInterval(() => {
    fetch('http://localhost:3000/posts')
      .then((data) => data.json())
      .then((json) => {
        setPosts(JSON.stringify(json, null, 100));
      });
    // }, 5000);
    // return () => clearInterval(par);
  }, []);

  return (
    <div className="main">
      <div className="postForm">
        <PostForm />
      </div>
      <div className="info">
        {posts.length > 0 ? <>{posts}</> : <>loading</>}
      </div>
      <div className="postForm">
        <DeleteForm />
      </div>
    </div>
  );
}

export default App;
