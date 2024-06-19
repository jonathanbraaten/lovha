import {
  FaLinkedin,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="flex items-center footer-wrapper">
        <div>
          <a>Temp logo</a>
        </div>
        <div className="flex items-center ml-auto gap-4">
          <span>
            <FaLinkedinIn size={25} />
          </span>
          <span>
            <FaInstagram size={25} />
          </span>
          <span>
            <FaYoutube size={25} />
          </span>
          <span>
            <FaDiscord size={25} />
          </span>
        </div>
      </section>
    </footer>
  );
};
