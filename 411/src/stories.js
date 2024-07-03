import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Collapse } from 'react-collapse';
import './stories.css';

const categories = [
  {
    title: "People & Entertainment",
    image: "https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Get the latest on celebs, movies and series.",
    query: "celebrity"
  },
  {
    title: "Sports",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Giving you your sport of choice in real time.",
    query: "football"
  },
  {
    title: "AI",
    image: "https://plus.unsplash.com/premium_photo-1718198501449-204442b4c7a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Immerse yourself into the latest technology and learn how to incorporate it into your daily life.",
    query: "ai"
  },
  {
    title: "Business & Finance",
    image: "https://images.unsplash.com/photo-1664575198308-3959904fa430?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The economy, entrepreneurship and income generation",
    query: "economy",
  },
  {
    title: "Environment",
    image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Moving towards eco-friendliness & sustainability.",
    query: "climate"
  }
];

const NEWS_API_KEY = 'a7302f75c9d6429d899b6a8f2c8fbf5e';

function Stories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    document.body.classList.add('stories-page');
    return () => {
      document.body.classList.remove('stories-page');
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryClick = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  useEffect(() => {
    async function fetchData(query) {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: query,
            apiKey: NEWS_API_KEY,
            language: 'en',
            sortBy: 'relevancy'
          }
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }

    if (expandedCategory) {
      fetchData(expandedCategory);
    } else {
      fetchData('general');
    }
  }, [expandedCategory]);

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getFilteredArticles = (query) => {
    return articles.filter(article =>
      (article.title && article.title.toLowerCase().includes(query.toLowerCase())) ||
      (article.description && article.description.toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <div className="Stories">
      <header className="stories-header">
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <div className="search-bar">
          <input 
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </header>
      <main>
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <div key={index} className="category" onClick={() => handleCategoryClick(category.query)}>
              <img src={category.image} alt={category.title} />
              <h2>{category.title}</h2>
              <p>{category.description}</p>
              <Collapse isOpened={expandedCategory === category.query}>
                <div className="articles">
                  {getFilteredArticles(category.query).map((article, index) => (
                    <div key={index} className="article">
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>
                  ))}
                </div>
              </Collapse>
            </div>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </main>
    </div>
  );
}

export default Stories;

