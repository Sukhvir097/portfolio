import React, { useEffect, useState } from 'react';
import profileImg from '../assets/sukhvir.JPG';
import backgroundImg from "../assets/background.jpg"; 
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Minimal SVG icons with thinner strokes
const GitHubIcon = () => (
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M12 0.297c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.932 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.983-.399 3.003-.404 1.02.005 2.043.137 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.656 1.653.244 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.628-5.48 5.922.43.37.823 1.096.823 2.21 0 1.595-.015 2.877-.015 3.27 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M4.983 3.5C4.983 5 3.95 6 2.5 6 1.054 6 0 5 0 3.5 0 2 1.053 1 2.5 1 3.95 1 4.983 2 4.983 3.5zM0 8h5v14H0zM7 8h4.8v1.92h.07c.67-1.27 2.3-2.6 4.73-2.6 5.07 0 6 3.34 6 7.67V22H17v-6.5c0-1.56-.03-3.57-2.2-3.57-2.2 0-2.54 1.72-2.54 3.46V22H7z"/>
  </svg>
);

const socialLinks = [
  { href: 'https://github.com/sukhvir097', icon: <GitHubIcon />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/sukhvir-singh4898', icon: <LinkedInIcon />, label: 'LinkedIn' },
];

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "A passionate Full Stack Developer with expertise in React, Node.js, and more.";

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) clearInterval(typingInterval);
    }, 40);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="home"
      className="home-section text-center py-5"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        backgroundPosition: 'center',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        color: '#fff',
        position: 'relative',
      }}
    >
      {/* Solid dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(10, 10, 20, 0.85)',
        zIndex: 1,
      }}></div>

      <div className="container h-100 d-flex align-items-center justify-content-center" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row w-100 align-items-center">
          {/* Text Section */}
          <div className="col-12 col-md-6 text-start px-4" data-aos="fade-right" data-aos-duration="1500">
            <h1 className="display-4 fw-bold mb-3" style={{ letterSpacing: '1.3px' }}>
              Hello, I'm <span style={{ color: '#00bcd4' }}>Sukhvir Singh</span>
            </h1>
            <p className="lead mb-4" style={{ minHeight: '70px', fontSize: '1.2rem', fontWeight: '500' }}>
              {typedText}
              <span className="blink-caret">|</span>
            </p>

            <Link to="/skills" smooth={true} duration={1000}>
              <button
                className="btn btn-primary btn-lg"
                style={{
                  backgroundColor: '#00bcd4',
                  border: 'none',
                  boxShadow: '0 3px 10px rgba(0,188,212,0.5)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,188,212,0.8)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 3px 10px rgba(0,188,212,0.5)';
                }}
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                View My Skills
              </button>
            </Link>

            {/* Social Links */}
            <div className="mx-5 mt-4 d-flex gap-3">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    fontSize: '1.5rem',
                    color: '#00bcd4',
                    transition: 'color 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#008c9e')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#00bcd4')}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div
            className="col-12 col-md-6 text-center"
            data-aos="fade-left"
            data-aos-duration="1500"
            style={{ paddingTop: '2rem' }}
          >
            <img
              src={profileImg}
              alt="Sukhvir Singh"
              className="img-fluid rounded-circle shadow"
              style={{
                width: '100%',
                maxWidth: '260px',
                height: 'auto',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 188, 212, 0.6)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
