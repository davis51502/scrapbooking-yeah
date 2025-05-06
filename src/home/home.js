import React from 'react';
import './home.css';

const Home = () => {
    const featuredPhotos = [
        { image: '/gallery/photo1.jpg', alt: 'Featured Scrapbook 1' },
        { image: '/gallery/photo2.jpg', alt: 'Featured Scrapbook 2' },
        { image: '/gallery/photo3.jpg', alt: 'Featured Scrapbook 3' },
        { image: '/gallery/samplephoto.jpg', alt: 'Featured Scrapbook 4' }
    ];

    return (
        <div className="home">
            <div className="hero-section">
                <h1>Welcome to Scrapbook Impressions</h1>
                <p>Preserving Your Memories, One Page at a Time</p>
            </div>
            
            <div className="about-section">
                <div className="about-container">
                    <div className="about-content">
                        <h2>About Us</h2>
                        <p className="about-intro">Crafting Memories Since 2003</p>
                        <div className="about-text">
                            <p>Hi, I'm Brooke Wollesen, a passionate scrapbook artist dedicated to helping you 
                               preserve life's precious moments. For over two decades, I've been transforming 
                               cherished photos and memories into beautiful, handcrafted scrapbooks that tell 
                               your unique story.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="featured-section">
                <h2>Featured Works</h2>
                <div className="featured-grid">
                    {featuredPhotos.map((photo, index) => (
                        <div key={index} className="featured-item">
                            <img 
                                src={photo.image} 
                                alt={photo.alt} 
                                className="featured-image"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="cta-section">
                <h2>Ready to Start Your Project?</h2>
                <p>Contact us today to discuss your custom scrapbook design.</p>
                <button className="cta-button" onClick={() => window.location.href='/contact'}>
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Home;