import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <header
      className="masthead d-flex align-items-center"
      id="home"
    >
      <div className="container text-center">

        {/* NAME */}
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Sagar</span>
        </h1>

        {/* TYPING ROLE */}
        <h3 className="hero-role">
          <Typewriter
            words={[
              "Java Full Stack Developer",
              ".NET + React Developer",
              "Software Engineer",
              "Backend Specialist"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h3>

        <hr className="divider" />

        {/* DESCRIPTION */}
        <p className="hero-text">
          I specialize in building scalable and high-performance web applications
          using <strong>Java, Spring Boot, .NET, React.js, and MySQL</strong>.
          I love turning complex problems into simple, elegant solutions.
        </p>

        {/* BUTTONS */}
        <div className="hero-buttons">

          <a href="#about" className="btn hero-btn">
            Explore More
          </a>

          <button
            className="btn hire-btn hero-btn"
            onClick={() => window.dispatchEvent(new Event("openHireModal"))}
          >
            Hire Me
          </button>

        </div>

        {/* SOCIAL */}
        <div className="hero-social">

          <a href="https://github.com/Sagarpandit05" target="_blank">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/sagar-the-coder" target="_blank">
            <FaLinkedin />
          </a>

        </div>

      </div>
    </header>
  );
}