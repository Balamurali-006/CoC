import React, { useEffect,useState } from "react";
import ProfileCard from "./ProfileCard";
import "./ContactPage.css";
import TargetCursor from "./TargetCursor";


const ContactPage = ({ scrollToTop }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo(0, 0);
    }

    // detect mobile by screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // run on first load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [scrollToTop]);

  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 text-center">
        <h1 className="text-2xl font-bold text-pink-600 mb-4">
          🚫 Mobile Experience Limited
        </h1>
        <p className="text-gray-700 text-lg">
          Our contact page is best viewed on a <b>laptop or desktop</b> for the
          complete experience.  
          Please switch devices and come back ✨
        </p>
      </div>
    );
  }
  
  
  const staffAdvisors = [
    { name: "Mrs.K.Sudha", title: "Staff Advisor",avatarUrl: "/assets/sudha.png",
    email: "sudhak@cit.edu.in",
    linkedin: "https://www.linkedin.com/in/sudhakaruppaswamy/"},
    { name: "Dr.Valliappan Raman", title: "Professor & Head of the Department",avatarUrl: "/assets/valliappan.png",
    email: "valliappan@cit.edu.in",
    linkedin: "https://www.linkedin.com/in/valliappan-raman-smieee-ceng-uk-intpe-miet-mie-macs-34184b22/"
     },
    { name: "Ms.R.Akshaya", title: "Staff Advisor" ,avatarUrl: "/assets/akshaya.png",
    email: "akshaya@cit.edu.in",
    linkedin: "https://linkedin.com/in/ksudha"},
  ];

  const studentCoordinators = [
    { name: "Irfan Kazir M", title: "Student Coordinator",avatarUrl: "/assets/irfan.png",
    email: "71762308021@cit.edu.in",
    linkedin: "https://www.linkedin.com/in/irfan-kazir-m-10462128b/",phone: "+91 96263 39950"},
    { name: "Dhivyabharathi", title: "Student Coordinator",avatarUrl: "/assets/dhivya.png",
    email: "71762308013@cit.edu.in",
    linkedin: "https://www.linkedin.com/in/dhivyaabharathi-saranraj-67ba5a2b9/",phone: "+91 63839 44939" },
  ];

  const associationMembersRow1 = [
    { name: "Ranjith", title: "Student Chief Coordinator",avatarUrl: "/assets/ranjith.png",
    email: "71762308044@cit.edu.in",
    linkedin: "https://www.linkedin.com/in/ranjith44/" },
    { name: "Aakash", title: "Secretary" ,avatarUrl: "/assets/aakash.png",
    email: "Secretaryb.techai.ds@gmail.com",
    linkedin: "https://www.linkedin.com/in/aakash-kannah-6503b2371/"},
    { name: "Aathithya", title: "Treasurer" ,avatarUrl: "/assets/athithya.png",
    email: "71762308001@cit.edu.in",
    linkedin: "https://www.linkedin.com/in/aathithya-g-23560727a/"},
  ];

  const associationMembersRow2 = [
    { name: "Kaviyaa", title: "Career Guidance Counsellor",avatarUrl: "/assets/kav.png",
    email: "71762308028@cit.edu.in",
    linkedin: "https://www.linkedin.com/in/kaviyaa-n-62984335b/" },
    { name: "Arya Nakshathra", title: "Public Relations Officer",avatarUrl: "/assets/arya.png",
    email: "71762308005@cit.edu.in",
    linkedin: "https://www.linkedin.com/in/arya-nakshathra-n-k-39b7832ba/" },
    { name: "Sakthivel", title: "Joint Secretary" ,avatarUrl: "/assets/sakthi.png",
    email: "2403717624321046@cit.edu.in",
    linkedin: "https://www.linkedin.com/in/sakthivel-m-1879b830b/"},
    { name: "Naveenya", title: "Joint Treasurer" ,avatarUrl: "/assets/naveenya.png",
    email: "2403717624322032@cit.edu.in",
    linkedin: "https://www.linkedin.com/in/naveenya-mohanraj-a5231430b/"},
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
            specialSize={member.title === "Professor & Head of the Department" ||
              member.title === "Student Coordinator" ? 200 : undefined}
            enableMobileTilt={false}
            onContactClick={() => console.log(`Contact: ${member.name}`)}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="contact-page">
      {renderSection("Staff Advisors", staffAdvisors, "three-cols")}
      {renderSection("Student Coordinators", studentCoordinators, "two-cols")}
      <h2 className="section-heading">Association Members</h2>
      <div className="contact-grid three-cols">
        {associationMembersRow1.map((member, index) => (
          <ProfileCard
            key={`row1-${index}`}
            {...member}
            contactText="Contact"
            avatarUrl={member.avatarUrl || "/images/default.jpg"} 
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
          />
        ))}
      </div>
      <TargetCursor spinDuration={2} hideDefaultCursor={true}/>
      <div className="contact-grid four-cols">
        {associationMembersRow2.map((member, index) => (
          <ProfileCard
            key={`row2-${index}`}
            {...member}
            contactText="Contact"
            avatarUrl={member.avatarUrl || "/images/default.jpg"} 
            showUserInfo={true}
            enableTilt={true}
            specialSize={member.title === "Public Relations Officer" ? 200 : undefined}
            enableMobileTilt={false}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactPage;