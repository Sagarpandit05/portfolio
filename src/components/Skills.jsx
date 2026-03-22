import { useEffect, useRef } from "react";
import { FaJava, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiSpringboot, SiDotnet } from "react-icons/si";

export default function Skills() {

  const skills = [
    { name: "Java", percent: 90, color: "#f89820", icon: <FaJava/> },
    { name: "Spring Boot", percent: 85, color: "#6db33f", icon: <SiSpringboot/> },
    { name: "React", percent: 80, color: "#61dbfb", icon: <FaReact/> },
    { name: "MySQL", percent: 75, color: "#00758f", icon: <FaDatabase/> },
    { name: "JavaScript", percent: 85, color: "#f7df1e", icon: <FaJs/> },
    { name: "HTML", percent: 90, color: "#e34c26", icon: <FaHtml5/> },
    { name: "CSS", percent: 85, color: "#264de4", icon: <FaCss3Alt/> },
    { name: ".NET", percent: 70, color: "#512bd4", icon: <SiDotnet/> },
    { name: "SSMS Database", percent: 75, color: "#ff9800", icon: <FaDatabase/> }
  ];

  const scrollRef = useRef(null);

  useEffect(() => {

    const container = scrollRef.current;

    const scroll = () => {

      if (container) {
        container.scrollLeft += 1;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

    };

    const interval = setInterval(scroll, 20);

    return () => clearInterval(interval);

  }, []);

  return (

    <section id="skills" className="py-5 skills-section">

      <div className="container">

        <h2 className="section-title text-center mb-5">My Skills</h2>

        <div
          className="skills-scroll"
          ref={scrollRef}
        >

          <div className="skills-track">

            {skills.map((skill, i) => (

              <div className="skill-card-advanced" key={i}>

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h5>{skill.name}</h5>

                <div className="progress">

                  <div
                    className="progress-bar"
                    style={{
                      width: `${skill.percent}%`,
                      background: skill.color
                    }}
                  >
                    {skill.percent}%
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}