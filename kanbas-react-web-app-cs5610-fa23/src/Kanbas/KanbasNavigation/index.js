import React from "react";
import { FaUserAlt, FaCalendarAlt, FaEnvelope, FaArrowRight, FaDesktop } from "react-icons/fa";
import { IoIosAnalytics, IoIosClock } from "react-icons/io";
import { MdBook, MdHelp } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { FaBeer, FaCoffee, FaApple, FaAndroid } from "react-icons/fa";

import "./index.css";
function KanbasNavigation() {
  const links = [ "Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const CustomImage = () => (
    <img src=".././images/log.png" alt="图片描述" className="wd-icon" style={{ width: "130px" }}/>
  );
  const linkToIconMap = {
    Account: <FaUserAlt className="wd-icon" />,
    Dashboard: <IoIosAnalytics className="wd-icon" />,
    Courses: <MdBook className="wd-icon" />,
    Calendar: <FaCalendarAlt className="wd-icon" />,
    Inbox: <FaEnvelope className="wd-icon" />,
    History: <IoIosClock className="wd-icon" />,
    Studio: <FaApple className="wd-icon" />,
    Commons: <FaAndroid className="wd-icon" />,
    Help: <MdHelp className="wd-icon" />,
};

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 130 }}>
      <div>
        <CustomImage /> 
      </div>
      {links.map((link, index) => (

        <Link
          key={index}
          to={link === "Courses" ? "/Kanbas/Courses/RS101/Home" : `/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]} 
          <br/>
          {link} 
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
