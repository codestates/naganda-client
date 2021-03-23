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
            상세 기획서를 확인하고 싶으시다면 저희의 로고 를 클릭해 주세요!
          </p>
          <div className="logoToGithub">
            <a
              href="https://www.notion.so/codestates/06-nAgAndA-Zoom-In-Center-c67a1d3208c34f3891a64d82687b435a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo1} alt="logo-image" className="logo-img" />
            </a>
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
                <i className="fab fa-github"></i>
              </span>
              <a
                href="https://github.com/codestates/naganda-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                Naganda Github Repo
              </a>
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
