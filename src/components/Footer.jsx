import React from "react";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  console.log(currentYear);
  return (
    <footer>
      <p>Copyright &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
