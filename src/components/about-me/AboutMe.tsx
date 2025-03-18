import './AboutMe.css';
import myPicture from '../../assets/my-picture.png';
import { JSX } from 'react';

function AboutMe(): JSX.Element{
    return(
<div  className="about-container">
    <div className='about-text'>
<h1 className='title'><span>01. </span>About me</h1>
<p>
        Hello! My name is [Your Name], and I enjoy building applications that make an impact. My journey into programming started when I taught myself C# and built several console applications, including API integrations. That hands-on experience sparked my passion for software development and deepened my understanding of how different technologies come together.
      </p>
      <br />
      <p>
        Fast-forward to today, I’ve worked on various projects, including a web application that generates cocktails, where I developed both the frontend and backend, and a flashcard-based language learning system. My main focus now is becoming a full-stack developer, combining .NET and React to create powerful, user-friendly applications.
      </p>
      <br />
      <p>
        Currently, I'm working on a portfolio and a language learning app while expanding my knowledge in React, TypeScript, and advanced development concepts. I enjoy learning through hands-on projects and constantly challenging myself with new technologies.
      </p>
      <br />
      <p>Here are a few technologies I’ve been working with recently:</p>
    <ul>
        <li>C# (.NET)</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>ASP.NET Core</li>
        <li>Entity Framework</li>
        <li>Authentication & Authorization</li>
    </ul>
    </div>
 <div className='about-img'>
<img src={myPicture} alt='my-picture' />
 </div>   
</div>
    );
}


export default AboutMe;