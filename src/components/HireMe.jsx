import { useEffect, useState } from "react";
import { FaEnvelope, FaDownload, FaTimes } from "react-icons/fa";

export default function HireMe() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openModal = () => setOpen(true);
    window.addEventListener("openHireModal", openModal);
    return () => window.removeEventListener("openHireModal", openModal);
  }, []);

  const closeModal = () => {
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="hire-modal">

      <div
        className="hire-modal-box advanced"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}
        <FaTimes className="close-btn" onClick={closeModal} />

        <div className="row g-0">

          {/* LEFT */}
          <div className="col-md-5 hire-left">
            <img src="/profile.png" alt="profile" />
          </div>

          {/* RIGHT */}
          <div className="col-md-7 hire-right">

            <h2>Let's Work Together 🚀</h2>

            <p className="hire-desc">
              I'm currently working as a <strong>Junior Software Engineer </strong>  
              specializing in <strong>.NET, React.js, and Java</strong>.  
              I'm open to freelance work, collaborations, and full-time opportunities.
            </p>

            <div className="tech-tags">
              <span>.NET</span>
              <span>React</span>
              <span>Java</span>
              <span>MySQL</span>
            </div>

            <div className="hire-buttons">

              {/* CONTACT BUTTON */}
              <button
                className="btn hire-btn d-flex align-items-center gap-2"
                onClick={() => {
                  closeModal();   // close FIRST

                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth"
                    });
                  }, 100);
                }}
              >
                <FaEnvelope /> <span>Contact Me</span>
              </button>

              {/* RESUME */}
              <a
                href="/SagarkPandit.pdf"
                className="btn resume-btn d-flex align-items-center gap-2"
              >
                <FaDownload /> <span>Resume</span>
              </a>

            </div>

            <p className="availability">
              🟢 Available for new opportunities
            </p>

          </div>

        </div>

      </div>

      {/* BACKGROUND CLICK CLOSE */}
      <div className="modal-overlay" onClick={closeModal}></div>

    </div>
  );
}