import { useState } from "react";

export default function Portfolio() {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [

    {
      title: "Employee Management System",
      img: "/ems.jpg",
      tech: "Spring Boot, ReactJS, MySQL",
      description:
        "A full stack employee management system for managing employee records.",
      features: [
        "Employee CRUD Operations",
        "Authentication Login System",
        "REST API using Spring Boot",
        "Responsive React UI"
      ]
    },

    {
      title: "Student Management System",
      img: "/sms.jpg",
      tech: "Spring Boot, ReactJS, MySQL",
      description:
        "A web application to manage student data and records efficiently.",
      features: [
        "Student Registration",
        "Edit / Delete Student",
        "Search Students",
        "REST API Integration"
      ]
    },

    {
      title: "Company Management System",
      img: "/company.jpg",
      tech: ".NET, ReactJS, SSMS",
      description:
        "Enterprise application developed using .NET backend and React frontend.",
      features: [
        "Employee Role Management",
        "Secure Authentication",
        "Dashboard Analytics",
        "SSMS Database Integration"
      ]
    },

    {
      title: "React CRUD Application",
      img: "/crud.jpg",
      tech: "ReactJS, .NET API, SSMS",
      description:
        "A modern CRUD web application with REST APIs and React UI.",
      features: [
        "Add / Update / Delete Records",
        "API Integration",
        "Responsive UI",
        "Form Validation"
      ]
    }

  ];

  return (

    <section id="projects" className="py-5">

      <div className="container">

        <h2 className="text-center mb-5">My Projects</h2>

        <div className="row">

          {projects.map((project, i) => (

            <div className="col-md-3 mb-4" key={i}>

              <div
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >

                <img src={project.img} className="img-fluid" />

                <div className="overlay">
                  <h5>{project.title}</h5>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* MODAL */}

      {selectedProject && (

        <div className="project-modal">

          <div className="modal-content-box">

            <span
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </span>

            <h3>{selectedProject.title}</h3>

            <p><strong>Tech Stack:</strong> {selectedProject.tech}</p>

            <p>{selectedProject.description}</p>

            <h6>Features</h6>

            <ul>
              {selectedProject.features.map((f, index) => (
                <li key={index}>{f}</li>
              ))}
            </ul>

          </div>

        </div>

      )}

    </section>
  );
}