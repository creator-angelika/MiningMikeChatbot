import React from 'react';
import './App.css';

function HomePage() {
  return (
    <div className="App">
      <div className="container">
        <div className="background-images">
          <img src="./assets/Ellipse 1.jpg" id="c1" alt="Background 1" />
          <img src="./assets/Ellipse 2.jpg" id="c2" alt="Background 2" />
        </div>
        <div className="image-container">
          <img src="./assets/mining.png" alt="Your Mining Mike" id="mike" />
          <div className="text-container">
            Hi, I am Mining Mike.<br />Ask me anything.
          </div>
        </div>
        <div className="chatbot-container">
          <div id="bp-web-widget" className="bp-widget-web"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
