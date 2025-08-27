import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";   // ✅ for navigation
import TargetCursor from "./TargetCursor";
import ProfileCard from "./ProfileCard";
import "./ContactPage.css";

const ContactPage = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Back button styles
  const styles = {
    header: {
      textAlign: "center",
      marginBottom: "30px",
    },
    backButton: {
      background: "rgba(255, 255, 255, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "25px",
      padding: "10px 20px",
      color: "white",
      cursor: "pointer",
      backdropFilter: "blur(10px)",
      transition: "all 0.3s ease",
    },
  };

  const staffAdvisors = [
    { name: "Ms.R.Akshaya", title: "Staff Advisor", avatarUrl: "/assets/akshaya.png", email: "akshaya@cit.edu.in" },
    { name: "Dr.Valliappan Raman", title: "Professor & Head of the Department", avatarUrl: "/assets/valliappan.png", email: "valliappan@cit.edu.in", linkedin: "https://www.linkedin.com/in/valliappan-raman-smieee-ceng-uk-intpe-miet-mie-macs-34184b22/" },
    { name: "Mrs.K.Sudha", title: "Staff Advisor", avatarUrl: "/assets/sudha.png", email: "sudhak@cit.edu.in" },
  ];

  const studentCoordinators = [
    { name: "Irfan Kazir M", title: "Student Coordinator", avatarUrl: "/assets/irfan2.png", email: "71762308021@cit.edu.in", linkedin: "https://www.linkedin.com/in/irfan-kazir-m-10462128b/", phone: "+91 96263 39950" },
    { name: "Dhivyabharathi", title: "Student Coordinator", avatarUrl: "/assets/dhivya.png", email: "71762308013@cit.edu.in", linkedin: "https://www.linkedin.com/in/dhivyaabharathi-saranraj-67ba5a2b9/", phone: "+91 63839 44939" },
    { name: "Pranaya N P", title: "Student Coordinator", avatarUrl: "/assets/pranaya.png", email: "2403717624322034@cit.edu.in", linkedin: "https://www.linkedin.com/in/pranaya-pandiyaraj-13b4a0326/", phone: "+91 93447 99844" },
    { name: "Sakthivel", title: "Student Coordinator", avatarUrl: "/assets/sakthi.png", email: "2403717624321046@cit.edu.in", phone: "+91 90877 74556", linkedin: "https://www.linkedin.com/in/sakthivel-m-1879b830b/" },
  ];

  const associationMembersRow1 = [
    { name: "Ranjith", title: "Student Chief Coordinator", avatarUrl: "/assets/ranjith1.png", email: "71762308044@cit.edu.in", linkedin: "https://www.linkedin.com/in/ranjith44/" },
    { name: "Aakash", title: "Secretary", avatarUrl: "/assets/akash.png", email: "Secretaryb.techai.ds@gmail.com", linkedin: "https://www.linkedin.com/in/aakash-kannah-6503b2371/" },
    { name: "Aathithya", title: "Treasurer", avatarUrl: "/assets/athithya.png", email: "71762308001@cit.edu.in", linkedin: "https://www.linkedin.com/in/aathithya-g-23560727a/" },
  ];

  const associationMembersRow2 = [
    { name: "Kaviyaa", title: "Career Director", avatarUrl: "/assets/kaviyaa.png", email: "71762308028@cit.edu.in", linkedin: "https://www.linkedin.com/in/kaviyaa-n-62984335b/" },
    { name: "Arya Nakshathra", title: "Public Relations Officer", avatarUrl: "/assets/arya.png", email: "71762308005@cit.edu.in", linkedin: "https://www.linkedin.com/in/arya-nakshathra-n-k-39b7832ba/" },
    { name: "Naveenya", title: "Joint Treasurer", avatarUrl: "/assets/naveenya.png", email: "71762308001@cit.edu.in", linkedin: "https://www.linkedin.com/in/naveenya-mohanraj-a5231430b/" },
  ];

  const renderSection = (title, members, gridClass) => (
    <div className="section">
      <h2 className="section-heading">{title}</h2>
      <div className={`contact-grid ${gridClass}`}>
        {members.map((member, index) => (
          <ProfileCard
            key={index}
            name={member.name}
            title={member.title}
            phone={member.phone}
            email={member.email}
            linkedin={member.linkedin}
            contactText="Contact"
            avatarUrl={member.avatarUrl || "/images/default.jpg"}
            showUserInfo={true}
            enableTilt={true}
            specialSize={
              member.title === "Professor & Head of the Department" ||
              member.title === "Student Coordinator" ||
              member.title === "Secretary" ||
              member.title === "Treasurer" ||
              member.title === "Staff Advisor"
              || member.title === "Student Chief Coordinator" ||
              member.title === "Career Director" ||
              member.title === "Public Relations Officer" ||
              member.title === "Joint Treasurer"
                ? 200
                : undefined
            }
            enableMobileTilt={false}
            onContactClick={() => console.log(`Contact: ${member.name}`)}
            className={`cursor-target
  ${member.title === "Professor & Head of the Department" || member.title === "Secretary"
    ? "gold-hover"
    : ""}
  ${member.title === "Staff Advisor" ? "staff-advisor" : ""}
`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="contact-page">
      {/* 🔙 Back Button */}
      <div style={styles.header}>
        <button style={styles.backButton} onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>

      {renderSection("Staff Advisors", staffAdvisors, "three-cols")}
      {renderSection("Association Heads", associationMembersRow1, "three-cols")}
      {renderSection("Student Coordinators", studentCoordinators, "four-cols")}
      {renderSection("Core Members", associationMembersRow2, "three-cols")}

      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
    </div>
  );
};

export default ContactPage;




// import dev1 from '../assets/develop1.jpg'; 
// import dev2 from '../assets/develop2.jpg';
// import React, { useState, useEffect } from 'react';