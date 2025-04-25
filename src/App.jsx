import React, { useState } from 'react';
import './global.css';

function App() {
  const [visibleSection, setVisibleSection] = useState('frontpage');

  const handleSectionChange = (section) => {
    setVisibleSection(section);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="brand">My Portfolio</h1>
        <ul className="nav-links">
          <li><a href="#frontpage" onClick={() => handleSectionChange('frontpage')}>Home</a></li>
          <li><a href="#about" onClick={() => handleSectionChange('about')}>About</a></li>
          <li><a href="#social-links" onClick={() => handleSectionChange('social-links')}>Social Links</a></li>
          <li><a href="#projects" onClick={() => handleSectionChange('projects')}>Projects</a></li>
        </ul>
      </nav>

{/* Frontpage / Hero Section */}
{visibleSection === 'frontpage' && (
  <>
    <section className="frontpage">
      <div className="frontpage-content">
        <div className="frontpage-text">
          <h2>Welcome to My Creative Universe</h2>
          <p>
            I craft exceptional digital experiences that inspire, engage,
            and leave a lasting impression. My passion for design and development
            fuels my commitment to pushing creative boundaries.
          </p>
        </div>
        <div className="frontpage-image-container">
          <img
            src="image/pic.jpg"
            alt="Hero Section Image"
            className="frontpage-image"
          />
        </div>
      </div>
    </section>

    {/* Technologies Section */}
    <section className="technologies">
      <div className="box">
        <h3>Technologies I Use</h3>
        <p>Mastery of tools and frameworks is the key to bringing ideas to life:</p>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Angular, Vue</li>
          <li>Node.js, Express.js</li>
          <li>Python, Django, Flask</li>
          <li>Database: MongoDB, MySQL</li>
        </ul>
      </div>
    </section>

    {/* Inspirational Quotes Section */}
    <section className="quotes">
      <div className="box">
        <h3>Inspirational Quotes</h3>
        <p>"Technology is best when it brings people together." - Matt Mullenweg</p>
        <p>"Do what you can, with what you have, where you are." - Theodore Roosevelt</p>
        <p>"The best way to predict the future is to invent it." - Alan Kay</p>
      </div>
    </section>

    {/* Encouragement Section */}
    <section className="encouragement">
      <div className="box">
        <h3>A Note of Encouragement</h3>
        <p>
          Every step you take toward learning and growth is a step toward success.
          Remember, the journey is just as important as the destination. Keep
          pushing your limits and never stop believing in your potential.
        </p>
      </div>
    </section>
  </>
)}


      {/* About Section */}
      {visibleSection === 'about' && (
        <section id="about" className="about">
          <h2>About Me</h2>

          <div className="about-box">
            <h3>Introduction</h3>
            <p>
              <strong>Hi, I'm Mery Rose Talledo</strong><br />
              I’m a dedicated <strong>BSIT student</strong> at the <strong>University of Abra</strong>, currently in my third year. I'm passionate about technology and the endless possibilities it offers to create innovative solutions. I come from <strong>Tabiog, Bucay, Abra</strong>, a place that has inspired my drive for continuous learning and growth.
            </p>
          </div>

          <div className="about-box">
            <h3>My Journey</h3>
            <p>
              <strong>A Little About My Journey:</strong><br />
              Since my first year in college, I’ve had the honor of being a <strong>Dean’s Lister</strong>, a recognition that reflects my commitment to excellence in my studies and my love for learning. Being in the <strong>top-tier of my class</strong> has motivated me to keep pushing myself to explore deeper into <strong>Information Technology</strong>, from <strong>coding</strong> to <strong>web development</strong>, and even venturing into the creative side of tech.
            </p>
          </div>

          <div className="about-box">
            <h3>Skills & Passion</h3>
            <p>
              <strong>Skills and Passion:</strong><br />
              I specialize in <strong>front-end web development</strong> with a keen interest in creating visually appealing, user-friendly interfaces. I thrive in an environment that challenges me and allows me to leverage my technical skills while developing creative solutions. My journey as a tech enthusiast continues to shape my aspirations, and I’m excited about the future opportunities in the tech world.
            </p>
          </div>

          <div className="about-box">
            <h3>Why Technology?</h3>
            <p>
              <strong>Why Technology?</strong><br />
              For me, technology is the key to solving real-world problems and improving lives. It allows me to bring ideas to life, from simple websites to intricate applications. I'm always exploring <strong>new programming languages</strong>, <strong>tools</strong>, and <strong>frameworks</strong> to stay updated in this fast-paced field.
            </p>
          </div>

          <div className="about-box">
            <h3>Looking Ahead</h3>
            <p>
              <strong>Looking Ahead:</strong><br />
              I’m continuously working on <strong>personal projects</strong> to expand my skills and build a portfolio that reflects my passion for innovation. Whether it’s designing websites, developing apps, or exploring new technologies, my goal is to use my knowledge to make a meaningful impact.
            </p>
          </div>

          <div className="about-box">
            <h3>Let’s Connect</h3>
            <p>
              <strong>Let’s Connect:</strong><br />
              If you’d like to collaborate or just have a conversation about technology, feel free to reach out. I’m always open to new ideas and projects!
            </p>
          </div>
        </section>
      )}


      {/* Social Links Section */}
      {visibleSection === 'social-links' && (
        <section id="social-links" className="social-links">
          <h2>Social Links</h2>
          <ul>
            <li>
              <a href="https://github.com/Rheuzyyy15" target="_blank" rel="noopener noreferrer">
                <img src="image/github.jpg" alt="GitHub Logo" className="social-icon" />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/mery-rose-talledo-7733a4361/" target="_blank" rel="noopener noreferrer">
                <img src="image/linkedin.jpg" alt="LinkedIn Logo" className="social-icon" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://facebook.com/maryrose.talledo" target="_blank" rel="noopener noreferrer">
                <img src="image/fb.jpg" alt="Facebook Logo" className="social-icon" />
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com/hllmryyy/" target="_blank" rel="noopener noreferrer">
                <img src="image/ig.jpg" alt="Instagram Logo" className="social-icon" />
                Instagram
              </a>
            </li>
          </ul>
        </section>
      )}


      {/* Projects Section */}
      {visibleSection === 'projects' && (
        <section id="projects" className="projects">
          <h2>Projects</h2>

          <div className="project">
            <h3>Interactive Number Processing Tool</h3>
            <p>This project is an interactive tool that allows users to perform various number-based calculations. It can calculate the sum of numbers, find the factorial of a number, and list both odd and even numbers up to a chosen value. The tool provides a user-friendly experience, displaying results in real time. It’s a great example of how JavaScript can be used to create useful and interactive tools.</p>
            <a href="loop/index.html" target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
            <img src="image/1.png" alt="Project 1 Thumbnail" className="project-thumbnail" />
          </div>

          <div className="project">
            <h3>Basic JavaScript Calculator </h3>
            <p>This code creates a simple calculator for basic math operations like addition, subtraction, multiplication, and division. Users can input numbers and decimals, perform calculations, and view results dynamically on the display.</p>
            <a href="calculator/index.html" target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
            <img src="image/2.png" alt="Project 2 Thumbnail" className="project-thumbnail" />
          </div>

          <div className="project">
            <h3>Employee and Name Management Tool</h3>
            <p>This tool allows users to manage a list of names and employee details. It can display all names in a list format and add new names to the list. Users can also view a table of employee details, including employee ID, name, and position. Additionally, users can add new employees by providing their ID, name, and position, and the table will automatically update to show the new employee.</p>
            <a href="array objects/index.html" target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
            <img src="image/3.png" alt="Project 3 Thumbnail" className="project-thumbnail" />
          </div>

          <div className="project">
            <h3>Currency Conversion Function</h3>
            <p>This code converts a PHP amount into various cryptocurrencies (XRP, USDT, DOGE, TRX) based on predefined rates and displays the results in corresponding input fields when the "convertButton" is clicked.</p>
            <a href="converter/indexx.html" target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
            <img src="image/6.png" alt="Project 5 Thumbnail" className="project-thumbnail" />
          </div>

          <div className="project">
            <h3>Task Management System</h3>
            <p>This project is a React-based Todo application that manages tasks by fetching data from an API. It allows users to add, edit, and delete tasks and task titles. Tasks can be marked as completed, and the app uses modals for adding new tasks. The layout consists of a left sidebar for ongoing tasks, a main content area for managing tasks, and a right sidebar for completed tasks. The project uses `useState` and `useEffect` hooks for state management, with Axios handling API requests.</p>
            <a href="https://to-do-client-a6hd.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-simple-link">
              View Project
            </a>
            <div className="project-images">
              <img src="image/4.png" alt="Project 4 Thumbnail 1" className="project-thumbnail" />
              <img src="image/5.png" alt="Project 4 Thumbnail 2" className="project-thumbnail" />
            </div>
          </div>
        </section>
      )}


    </div>
  );
}

export default App;
