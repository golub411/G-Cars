import React from 'react';
import '../styles/footerStyle.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div>Контакты</div>
          <p>Телефон: +1 (234) 567-8910</p>
          <p>Email: info@mercedes.com</p>
          <p>Адрес: 1234 Mercedes Drive, Anytown, USA</p>
        </div>
        <div className="footer-section">
          <div>Социальные сети</div>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <div>Ссылки</div>
          <ul>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">© 2022 Mercedes. Все права защищены.</div>
    </footer>
  );
};

export default Footer;