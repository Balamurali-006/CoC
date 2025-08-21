import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TargetCursor from "./TargetCursor";
import ProfileCard from "./ProfileCard";

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
    { name: "Irfan Kazir M", title: "Student Coordinator", avatarUrl: "/assets/irfan.png", email: "71762308021@cit.edu.in", linkedin: "https://www.linkedin.com/in/irfan-kazir-m-10462128b/", phone: "+91 96263 39950" },
    { name: "Dhivyabharathi", title: "Student Coordinator", avatarUrl: "/assets/dhivya.png", email: "71762308013@cit.edu.in", linkedin: "https://www.linkedin.com/in/dhivyaabharathi-saranraj-67ba5a2b9/", phone: "+91 63839 44939" },
    { name: "Pranaya N P", title: "Student Coordinator", avatarUrl: "/assets/pranaya.png", email: "2403717624322034@cit.edu.in", linkedin: "https://www.linkedin.com/in/pranaya-pandiyaraj-13b4a0326/", phone: "+91 93447 99844" },
    { name: "Sakthivel", title: "Student Coordinator", avatarUrl: "/assets/sakthi.png", email: "2403717624321046@cit.edu.in", phone: "+91 90877 74556", linkedin: "https://www.linkedin.com/in/sakthivel-m-1879b830b/" },
  ];

  const associationMembersRow1 = [
    { name: "Ranjith", title: " Chief Student Coordinator", avatarUrl: "/assets/ranjith.png", email: "71762308044@cit.edu.in", linkedin: "https://www.linkedin.com/in/ranjith44/" },
    { name: "Aakash", title: "Secretary", avatarUrl: "/assets/aakash.png", email: "Secretaryb.techai.ds@gmail.com", linkedin: "https://www.linkedin.com/in/aakash-kannah-6503b2371/" },
    { name: "Aathithya", title: "Treasurer", avatarUrl: "/assets/athithya.png", email: "71762308001@cit.edu.in", linkedin: "https://www.linkedin.com/in/aathithya-g-23560727a/" },
  ];

  const associationMembersRow2 = [
    { name: "Kaviyaa", title: "Career Director", avatarUrl: "/assets/kav.png", email: "71762308028@cit.edu.in", linkedin: "https://www.linkedin.com/in/kaviyaa-n-62984335b/" },
    { name: "Arya Nakshathra", title: "Public Relations Officer", avatarUrl: "/assets/arya.png", email: "71762308005@cit.edu.in", linkedin: "https://www.linkedin.com/in/arya-nakshathra-n-k-39b7832ba/" },
    { name: "Naveenya", title: "Joint Treasurer", avatarUrl: "/assets/naveenya.png", email: "71762308001@cit.edu.inn", linkedin: "https://www.linkedin.com/in/naveenya-mohanraj-a5231430b/" },
  ];

  const renderSection = (title, members) => (
    <div className="section mb-5">
      <h2 className="section-heading text-center mb-4">{title}</h2>
      <div className="container">
        <div className="row justify-content-center g-4">
          {members.map((member, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 d-flex justify-content-center">
              <ProfileCard
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
                  member.title === "Public Relations Officer"
                    ? 200
                    : undefined
                }
                enableMobileTilt={false}
                onContactClick={() => console.log(`Contact: ${member.name}`)}
                className={`cursor-target profile-card-wrapper ${
                  member.title === "Professor & Head of the Department" ||
                  member.title === "Secretary"
                    ? "gold-hover"
                    : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="contact-page py-5 px-3">
      {/* Back Button */}
      <div style={styles.header}>
        <button style={styles.backButton} onClick={() => navigate("/")} className='cursor-target'> 
          ← Back to Home
        </button>
      </div>

      {renderSection("Staff Advisors", staffAdvisors)}
      {renderSection("Association Heads", associationMembersRow1)}
      {renderSection("Student Coordinators", studentCoordinators)}
      {renderSection("Core Members", associationMembersRow2)}

      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
    </div>
  );
};

export default ContactPage;