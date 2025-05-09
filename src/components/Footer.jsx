import React, { useEffect } from "react";
import "../style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
 
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    
   
    return () => {
      AOS.refresh();
    };
  }, []);

 
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/talha-ansari-22189b1bb/",
      iconClass: "fa-brands fa-linkedin-in linkedin",
      aosDelay: 100
    },
    {
      name: "GitHub",
      url: "https://github.com/talhaansari25",
      iconClass: "fa-brands fa-github github",
      aosDelay: 200
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_talhaansari__25/?hl=en",
      iconClass: "fa-brands fa-instagram instagram",
      aosDelay: 300
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@talhaansari2519",
      iconClass: "fa-brands fa-youtube youtube",
      aosDelay: 400
    }
  ];

  return (
    <footer data-aos="fade-up">
      <div className="footer-container">
        <div className="footer-wrapper">
          <p className="line-1" data-aos="fade-up" data-aos-delay="50">
            GET IN TOUCH
          </p>
          
          <p className="line-2" data-aos="fade-up" data-aos-delay="100">
            Have any suggestion or interested in working together on a project?
            Go ahead, I'd like to connect with you.
          </p>
          
          <a 
            href="mailto:talhaansari2026@gmail.com" 
            className="send-an-email" 
            data-aos="fade-up" 
            data-aos-delay="150"
          >
            send an email
          </a>

          <div className="socialbtns" data-aos="fade-up" data-aos-delay="200">
            <ul>
              {socialLinks.map((social) => (
                <li 
                  key={social.name}
                  data-aos="fade-up"
                  data-aos-delay={social.aosDelay}
                >
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label={social.name}
                  >
                    <i className={social.iconClass}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p 
            className="credit" 
            data-aos="fade-up" 
            data-aos-delay="500"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="10" 
              height="10" 
              fill="currentColor" 
              className="bi bi-c-circle" 
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
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