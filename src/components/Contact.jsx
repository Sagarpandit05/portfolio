import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xxxxx",
        "template_xxxxx",
        form.current,
        "public_key_xxxxx",
      )

      .then(
        () => {
          toast.success("Message sent successfully 🚀");
          form.current.reset();
        },
        () => {
          toast.error("Something went wrong ❌");
        },
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title text-center">Contact Me</h2>

        <div className="row g-4">
          {/* LEFT INFO */}

          <div className="col-md-5">
            <div className="contact-info">
              <h4>Let's Work Together</h4>

              <p>
                If you have any project idea or job opportunity feel free to
                contact me. I'm always open for new opportunities.
              </p>

              <div className="info-item">
                <FaEnvelope /> sagarkpandit77@gamil.com
              </div>

              <div className="info-item">
                <FaPhone /> +91 81023 32569
              </div>

              <div className="info-item">
                <FaMapMarkerAlt /> Bhopal, India
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/Sagarpandit05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/sagar-the-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://leetcode.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <SiLeetcode />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}

          <div className="col-md-7">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="floating-input">
                <input type="text" name="user_name" required placeholder=" " />
                <label>Name</label>
              </div>

              <div className="floating-input">
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder=" "
                />
                <label>Email</label>
              </div>

              <div className="floating-input">
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder=" "
                ></textarea>
                <label>Message</label>
              </div>

              <button type="submit" className="send-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* GOOGLE MAP */}

        <div className="map-container">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Bhopal&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
