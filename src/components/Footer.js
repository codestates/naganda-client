import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/images/logo1.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <div className="footer-width about">
          <h2>About</h2>
          <p>
            코드스테이츠 25기 2차 프로젝트 팀 &quot;ZoomInCenter&quot; 입니다.
            <br />
            자세한 정보를 확인하고 싶으시다면 저희의 로고 를 클릭해 주세요!
          </p>
          <div className="logoToGithub">
            <img src={logo1} alt="logo-image" className="logo-img" />
          </div>
        </div>
        <div className="footer-width link">
          <h2>Quick Link</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-width contact">
          <h2>Contact</h2>
          <ul>
            <li>
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <p>자유로운 피드백은 언제나 환영입니다!😍</p>
            </li>
            <li>
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              <a href="#">ZoominCenter@gmail.com</a>
            </li>
            <li>
              <span>
                <i className="fas fa-phone-square-alt"></i>
              </span>
              <a href="#">010-1234-5678</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy-right">
        <p>© COPYRIGHT 2021 ZOOMINCENTER ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
