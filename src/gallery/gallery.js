import React from 'react';
import './gallery.css';

const Gallery = () => {
  const foilColors = [
    { name: 'Gold', image: '/gallery/ColorGold.jpg' },
    { name: 'Silver', image: '/gallery/ColorSilver.jpg' },
    { name: 'Red', image: '/gallery/ColorRed.jpg' },
    { name: 'Purple', image: '/gallery/ColorPurple.jpg' }
  ];

  const matteColors = [
    { name: 'Light Blue', image: '/gallery/ColorBlue.jpg' },
    { name: 'Pink', image: '/gallery/ColorPink.jpg' },
    { name: 'Black', image: '/gallery/ColorBlack.jpg' },
    { name: 'Orange', image: '/gallery/ColorOrange.jpg' }
  ];

  return (
    <div className="gallery">
      <section className="foil-fonts">
        <div className="container">
          <div className="heading">
            <h2>Foil and Fonts</h2>
            <h3>Explore our collection of foil designs and fonts to add a unique touch to your scrapbook pages.</h3>
          </div>
          
          <div className="color-grid">
            {foilColors.map((color, index) => (
              <div key={index} className="color-box">
                <img src={color.image} alt={color.name} />
                <h3>{color.name}</h3>
              </div>
            ))}
          </div>

          <div className="sub-heading">
            <h3>Matte Finish</h3>
          </div>
          
          <div className="color-grid">
            {matteColors.map((color, index) => (
              <div key={index} className="color-box">
                <img src={color.image} alt={color.name} />
                <h3>{color.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;