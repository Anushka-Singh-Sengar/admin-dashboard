import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <div className="copyright bg-white">
        <p>
          Copyright &copy; <span id="ec-year">{new Date().getFullYear()}</span>
          <a className="text-primary" href="https://themeforest.net/user/ashishmaraviya" target="_blank"> Proyo Admin Dashboard</a>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 