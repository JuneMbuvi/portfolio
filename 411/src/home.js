import React from 'react';
import './home.css';

function Home() {
    return (
        <div className='Home'>
            <header className="home-header">
                <nav>
                    <a href="/">Home</a>
                    <a href="/stories">Stories</a>
                    <a href="#about">About</a>
                    <a href="#contacts">Contacts</a>
                </nav>
            </header>
            <main>
                <section id="about">
                    <h2>About Us</h2>
                    <p>We deliver up-to-date relevant and genuine information. We cover all grounds from education to AI and sports to all things entertainment. Our offices are currently situated in NBO plaza.</p>
                </section>
                <section id="featured-stories">
                    <h2>Featured Stories</h2>
                    <div className="featured-stories">
                        <div className="featured-story">
                            <div className="featured-image">
                                <img src="https://images.unsplash.com/photo-1563804447971-6e113ab80713?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </div>
                            <div className="story-content">
                                <p>Dive into a healthy and sustainable lifestyle. We cover tips and features that are tried and tested. As a brand, we are always looking to meet the demands of our readers by continuously staying abreast with what is going on all around the world. Whether it's politics, current affairs, people, or AI, we got it all covered, and we got you. Check out our latest stories for more in our <a href="/stories">stories page</a>.</p>
                            </div>
                        </div>
                        <div className="featured-story">
                            <div className="featured-image">
                                <img src="https://images.unsplash.com/photo-1573496267526-08a69e46a409?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </div>
                            <div className="story-content">
                                <p>Discover all the latest trends in technology, business, travel, and health and fitness. Our platform offers credible insight as we shun the use and passage of false information. Be enthralled by our world of sports that offers insights and analysis of sports, matches, and players. Dive into the lives of your favorite players and celebrities. We have it all here at 411.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <section id="contacts">
                    <h2>Contact Us</h2>
                    <p>Email us at: info.411@gmail.com</p>
                    <div className="social-media">
                        <a href="https://instagram.com/The411" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://facebook.com/The411" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com/The411" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </section>
            </footer>
        </div>
    );
}

export default Home;
