import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './assets/Components/Home';
import AddBlog  from './assets/Components/AddBlog';

const App = () => {
  return (
    <Router>
      <div>
        <nav style={styles.navbar}>
          <Link to="/" style={styles.link}>
            HOME
          </Link>
          <Link to="/add-blog" style={styles.link}>
            ADD BLOG
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-blog" element={<AddBlog />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#333',
    color: 'white',
    alignItems: 'center', 
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
  },
  link: {
    color: 'brown',
    textDecoration: 'none',
    fontSize: '18px',
    padding: '5px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease', 
  },
  linkHover: {
    backgroundColor: '#4CAF50', 
    color: 'white', 
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
  },
  card: {
    width: '250px',
    padding: '15px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    backdropFilter: 'blur(10px)', 
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  cardHover: {
    transform: 'scale(1.05)', 
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.15)',
  },
  header: {
    textAlign: 'center',
    color: '#4CAF50',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
};



export default App;
