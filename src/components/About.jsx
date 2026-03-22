import { FaBriefcase, FaCode, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-5 about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT IMAGE */}
          <div className="col-md-5 text-center mb-4">
            <img
              src="/profile.png"
              alt="Sagar"
              className="img-fluid rounded-circle shadow about-img"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-7">
            <h2 className="section-title fw-bold mb-3">About Me</h2>

            <p className="about-text">
              Hi, I'm <strong>Sagar</strong>, a passionate Full Stack Developer
              specializing in building scalable web applications using modern
              technologies like <strong>.NET, React.js, Java, and MySQL</strong>
              .
            </p>

            <p className="about-text">
              I enjoy creating efficient backend systems and interactive
              frontend experiences. My focus is on writing clean, maintainable
              code and building solutions that solve real-world problems.
            </p>

            {/* EXPERIENCE */}
            <div className="experience-box mt-4">
              <div className="d-flex align-items-start">
                <FaBriefcase size={28} className="me-3 text-warning" />

                <div>
                  <h5 className="mb-1">Jr. Software Engineer</h5>

                  <p className="mb-1 company-name">
                    NetFrame Software India Pvt. Ltd., Bhopal
                  </p>

                  <p className="experience-text">
                    Currently working as a Junior Software Engineer where I
                    develop enterprise web applications using
                    <strong> .NET Framework and React.js</strong>. I collaborate
                    with the development team to design, develop and maintain
                    scalable software solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* TECH STACK */}
<div className="row mt-3 g-3">

  <div className="col-md-4 d-flex">
    <div className="tech-box text-center p-4 w-100">
      <FaCode size={28} className="mb-2 text-danger" />
      <h6>Backend Development</h6>
      <p>.NET, Java</p>
    </div>
  </div>

  <div className="col-md-4 d-flex">
    <div className="tech-box text-center p-4 w-100">
      <FaLaptopCode size={28} className="mb-2 text-info" />
      <h6>Frontend</h6>
      <p>React.js, JavaScript</p>
    </div>
  </div>

  <div className="col-md-4 d-flex">
    <div className="tech-box text-center p-4 w-100">
      <FaCode size={28} className="mb-2 text-success" />
      <h6>Database</h6>
      <p>MySQL, SSMS</p>
    </div>
  </div>

</div>

            {/* BUTTONS */}
            <div className="mt-4">
              <a href="#projects" className="btn hero-btn me-3">
                View My Projects
              </a>

              <a href="/SagarkPandit.pdf" className="btn btn-outline-light">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
