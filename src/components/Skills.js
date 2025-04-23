import React from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs, FaDatabase, FaAws, FaDocker, FaPython, FaJava } from 'react-icons/fa'; // Add more icons

function Skills() {
  return (
    <section id="skills" className="py-5 my-5">
      <div className="container">
        <h2 className="text-center mb-5">Skills</h2>
        
        {/* Skill Categories */}
        <div className="row">
          
          {/* Front-End Skills */}
          <div className="col-md-3">
            <h4 className="text-center">Front-End</h4>
            <div className="d-flex flex-column align-items-center">
              <div className="skill-icon"><FaReact size={50} color="#61DAFB" /></div>
              <p>React</p>
              <div className="progress my-3" style={{ width: '100%' }}>
                <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="skill-icon"><FaHtml5 size={50} color="#E34F26" /></div>
                <div className="skill-icon"><FaCss3Alt size={50} color="#1572B6" /></div>
                <div className="skill-icon"><FaJs size={50} color="#F7DF1E" /></div>
              </div>
              <p>HTML, CSS, JavaScript</p>
            </div>
          </div>
          
          {/* Back-End Skills */}
          <div className="col-md-3">
            <h4 className="text-center">Back-End</h4>
            <div className="d-flex flex-column align-items-center">
              <div className="skill-icon"><FaNodeJs size={50} color="#68A063" /></div>
              <p>Node.js</p>
              <div className="progress my-3" style={{ width: '100%' }}>
                <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="skill-icon"><FaPython size={50} color="#306998" /></div>
                <div className="skill-icon"><FaJava size={50} color="#007396" /></div>
              </div>
              <p>Python, Java</p>
            </div>
          </div>

          {/* Databases */}
          <div className="col-md-3">
            <h4 className="text-center">Databases</h4>
            <div className="d-flex flex-column align-items-center">
              <div className="skill-icon"><FaDatabase size={50} color="#F44336" /></div>
              <p>MySQL</p>
              <div className="progress my-3" style={{ width: '100%' }}>
                <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="skill-icon"><FaDatabase size={50} color="#4caf50" /></div>
                <p>MongoDB</p>
              </div>
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="col-md-3">
            <h4 className="text-center">Cloud & DevOps</h4>
            <div className="d-flex flex-column align-items-center">
              <div className="skill-icon"><FaAws size={50} color="#FF9900" /></div>
              <p>AWS</p>
              <div className="progress my-3" style={{ width: '100%' }}>
                <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="skill-icon"><FaDocker size={50} color="#2496ED" /></div>
                <p>Docker</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Skills with Year Count */}
        <div className="row mt-5">
          <div className="col-md-4">
            <h4 className="text-center">Experience</h4>
            <div className="d-flex justify-content-around">
              <div>
                <h5>React</h5>
                <p>3+ Years</p>
              </div>
              <div>
                <h5>Node.js</h5>
                <p>2+ Years</p>
              </div>
              <div>
                <h5>Git</h5>
                <p>4+ Years</p>
              </div>
              <div>
                <h5>AWS</h5>
                <p>1+ Year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
