import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="hero-section">
                <h1>Welcome to Scrapbook Impressions</h1>
                <p>Preserving Your Memories, One Page at a Time</p>
            </div>
            
            <div className="featured-section">
                <h2>Featured Works</h2>
                <div className="featured-grid">
                    {/* Add featured scrapbook images here */}
                </div>
            </div>
            
            <div className="about-section">
                <h2>About Us</h2>
                <p>Creating beautiful, handcrafted scrapbooks to preserve your precious memories.</p>
            </div>
        </div>
    );
};

export default Home;