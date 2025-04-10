import React from "react";
import "../style.css";


const Footer = () => {
    return (
      <footer data-aos="fade-up">
        <div className="footer-container">
          <div className="footer-wrapper">
            <p className="line-1">GET IN TOUCH</p>
            <p className="line-2">
              Have any suggestion or interested in working together on a project?
              Go ahead, I’d like to connect with you.
            </p>
            <a href="mailto:talhaansari2026@gmail.com" className="send-an-email">send an email</a>
  
            <div className="socialbtns">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/talha-ansari-22189b1bb/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin-in linkedin"></i>
                  </a>
                </li>
  
                <li>
                  <a href="https://github.com/talhaansari25" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github github"></i>
                  </a>
                </li>
  
                <li>
                  <a href="https://www.instagram.com/_talhaansari__25/?hl=en" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-instagram instagram"></i>
                  </a>
                </li>
  
                <li>
                  <a href="https://www.youtube.com/@talhaansari2519" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-youtube youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
  
            <p className="credit">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-c-circle" viewBox="0 0 16 16">
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
              </svg>
              &nbsp;Designed & Developed by Mohd Talha Ansari
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  