import { useState } from "react";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [

    {
      title: "Employee Management System",
      img: "/ems.png",
      tech: "Spring Boot, ReactJS, MySQL",
      description: "A full stack web application to manage employee data.",
      features: [
        "Employee CRUD Operations",
        "Authentication Login",
        "REST APIs",
        "Responsive React UI"
      ]
    },

    {
      title: "Student Management System",
      img: "/sms.png",
      tech: "Spring Boot, ReactJS, MySQL",
      description: "A system for managing student records and information.",
      features: [
        "Student Registration",
        "Edit/Delete Students",
        "Search System",
        "REST API Integration"
      ]
    },

    {
      title: "MyMistry System",
      img: "/mymistry.png",
      tech: ".NET, ReactJS, SSMS",
      description: "Enterprise web application for managing service providers.",
      features: [
        "Role Management",
        "Dashboard",
        "Secure Authentication",
        "Database Integration"
      ]
    },

    {
      title: "React CRUD Application",
      img: "/ems.png",
      tech: ".NET API, ReactJS, SSMS",
      description: "Modern CRUD application using REST APIs.",
      features: [
        "Add / Update / Delete",
        "API Integration",
        "Form Validation",
        "Responsive UI"
      ]
    }

  ];

  return (

    <section id="projects" className="projects-section">

      <div className="container">

        <h2 className="section-title text-center">My Projects</h2>

        <div className="projects-grid">

          {projects.map((p,i)=>(

            <div
              className="project-card"
              key={i}
              onClick={()=>setSelectedProject(p)}
            >

              <img src={p.img} alt={p.title} />

              <div className="project-overlay">

                <h4><strong>{p.title}</strong></h4>

                <p>{p.tech}</p>

                <div className="project-buttons">

                  <button
  className="btn btn-sm"
  style={{background:"#ff5a2c", color:"#000"}}
>
  View Details
</button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* MODAL */}

      {selectedProject && (

        <div className="project-modal">

          <div className="modal-container">

            <FaTimes
              className="close-btn"
              onClick={()=>setSelectedProject(null)}
            />

            <div className="modal-left">

              <img src={selectedProject.img} />

            </div>

            <div className="modal-right">

              <h3 style={{ color: "#ff5a2c" }}><strong>{selectedProject.title}</strong></h3>

              <p className="tech">{selectedProject.tech}</p>

              <p>{selectedProject.description}</p>

              <h6>Features</h6>

              <ul>

                {selectedProject.features.map((f,i)=>(
                  <li key={i}>{f}</li>
                ))}

              </ul>

              <div className="modal-buttons">

                <button className="btn btn-dark">
                  <FaGithub/> GitHub
                </button>

                <button className="btn btn-primary">
                  <FaExternalLinkAlt/> Live Demo
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}