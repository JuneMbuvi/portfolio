import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://api.rss2json.com/v1/api.json', {
          params: {
            rss_url: 'https://medium.com/feed/towards-data-science'
          }
        });
        setPosts(response.data.items);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>The 411</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#Contacts">Contacts</a>
          <a href="#posts">Posts</a>
        </nav>
      </header>
      <main>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.guid} className={"post"}>
            <h2>{post.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: post.contentSnippet }}></p>
            <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
      </main>
    </div>
  );
}

export default App;

