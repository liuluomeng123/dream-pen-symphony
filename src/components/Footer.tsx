import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © 2023-{new Date().getFullYear()} 梦笔笙花工作室 版权所有 | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;