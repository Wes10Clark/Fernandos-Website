import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="info">
          <h3>Madison Info</h3>
          <h5>Hours</h5>
          <h6>Sun-Thurs 11-9</h6>
          <h6>Fri-Sat 11-9:30</h6>
          <h5>Contact</h5>
          <h6>769-300-1697</h6>
          <a
            href="https://www.facebook.com/people/Fernandos-Fajita-Factory-of-Madison/100087778276839/?paipv=0&eav=AfYjIjMFS8JNgln19o2fg14x-zbY2dtrMz4Kp9Rci5J-VVARTvio89rdVZSt_qffIio&_rdr"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
        </div>
        <div className="info">
          <h3>Pearl Info</h3>
          <h5>Hours</h5>
          <h6>Sun-Thurs 11-9</h6>
          <h6>Fri-Sat 11-9:30</h6>
          <h5>Contact</h5>
          <h6>601-932-8728</h6>
          <a
            href="https://www.facebook.com/thefajitafactory"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
        </div>
        <div className="info">
          <h3>Reservoir Info</h3>
          <h5>Hours</h5>
          <h6>Sun-Thurs 11-9</h6>
          <h6>Fri-Sat 11-9:30</h6>
          <h5>Contact</h5>
          <h6>601-992-6686</h6>
          <a
            href="https://www.facebook.com/profile.php?id=100057201769658"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
