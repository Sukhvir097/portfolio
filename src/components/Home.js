import React, { useEffect } from 'react';
import profileImg from '../assets/sukhvir.JPG';
import backgroundImg from "../assets/background.jpg"; 
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Home = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
    AOS.refresh();
  }, []);

  return (
      <section
          id="home"
          className="home-section text-center py-5"
          style={{
            backgroundImage:`url(${backgroundImg})`,
            backgroundSize: 'cover',
            height: '100vh',
            backgroundPosition: 'center',
          }}
        >
        <div className="overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: '100%' }}>
          <div className="container h-100 d-flex align-items-center justify-content-center">
            <div className="row w-100 align-items-center">
              {/* Text Section */}
              <div className="col-md-6 text-white" data-aos="fade-right" data-aos-duration="1500">
                <h1 className="display-4">Hello, I'm Sukhvir Singh</h1>
                <p className="lead mb-4">
                  A passionate Full Stack Developer with expertise in React, Node.js, and more.
                </p>
                <Link to="/skills" smooth={true} duration={1000}>
                  <button className="btn btn-light btn-lg" data-aos="fade-up" data-aos-duration="2500">
                    View My Skills
                  </button>
                </Link>
              </div>

              {/* Image Section */}
              <div className="col-md-6 text-center" data-aos="fade-left" data-aos-duration="1500">
                <img
                  src={profileImg}
                  alt="Sukhvir Singh"
                  className="img-fluid rounded-circle shadow"
                  style={{ maxWidth: '300px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

  );
};

export default Home;
