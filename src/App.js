import React from 'react';
import './App.css';
import myPhoto from './pics/pic1.jpg'; 
import project1 from './pics/pic2.jpg'; 
import project2 from './pics/pic3.jpg'; 
import project3 from './pics/pic4.jpg'; 


function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <section id="about-me">
  <h2>About Me</h2>
  <img src={myPhoto} alt="Mark Regie Aquino" style={{ width: '150px', borderRadius: '50%' }} />
  <p>Hello! I'm Mark Regie Aquino, a dedicated Software Engineer with a passion for creating efficient and innovative solutions. I enjoy working on challenging projects that push the boundaries of technology, and I take pride in writing clean, maintainable code. With a focus on continuous learning and growth, I thrive in collaborative environments where I can contribute to the success of both the team and the projects we work on.</p>
</section>

<section id="My Projects">
  <h2>Projects</h2>
  <ul>
    <li>
      <h3>Project 1</h3>
      <img src={project1} alt="Project 1" style={{ width: '200px' }} />
    </li>
    <li>
      <h3>Project 2</h3>
      <img src={project2} alt="Project 2" style={{ width: '200px' }} />
    </li>
    <li>
      <h3>Project 3</h3>
      <img src={project3} alt="Project 3" style={{ width: '200px' }} />
    </li>
  </ul>
</section>

      <section id="contact-me">
        <h2>Contact Me</h2>
        <p>Email: mark_regie_aquino@dlsl.edu.ph</p>
        <p>Tiktok: @markaqno</p>
        <p>Number: 09342327824</p>
      </section>
    </div>
  );
}

export default App;