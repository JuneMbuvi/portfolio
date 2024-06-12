import React, { useState, useEffect } from 'react';
import './home.css';

const images = [
    'https://images.unsplash.com/photo-1570585160629-4bce429aaedb?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1524744449419-d1dde73a9045?q=80&w=1390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1524744449419-d1dde73a9045?q=80&w=1390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]
function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='Home'
        style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 1s ease-in-out'
        }}
        >
            <section id="about">
                <h2>About Us</h2>
                <p>We deliver up-to-date relevant and genuine information. We cover all grounds from education to politics and fashion to all things entertainment. Our offices are currently situated in NBO plaza.</p>
            </section>
            <section id="contacts">
                <h2>Contact Us</h2>
                <p>Email us at: info.411@gmail.com</p>
            </section>
        </div>
    );
}

export default Home;