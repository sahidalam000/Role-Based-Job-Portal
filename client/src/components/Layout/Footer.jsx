import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Sahid Alam.</div>
      <div>
        <Link to={"https://www.facebook.com/share/1Hbn5GW8LZ/?mibextid=qi2Omg"} target="_blank">
          <FaFacebookF />
        </Link>
        {/* <Link to={"https://www.youtube.com/@CodeWithZeeshu"} target="_blank">
          <FaYoutube />
        </Link> */}
        <Link to={"https://www.linkedin.com/in/sahid-alam"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/sahidofficial__?igsh=aWMxcjZtY3F6bDYy"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
