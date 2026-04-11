import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications</h4>
                <h5>Dr PDP-PSP GFGC</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed strong foundational computer science skills. Graduated with a 7.87 CGPA, and completed a Machine Learning–based food delivery time prediction system as my final project.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Dev & Design Intern</h4>
                <h5>Oasis Infobyte</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Collaborated to build responsive web interfaces for internal tools. Optimized DOM updates, refactored code, and integrated Python scripts to automate regression testing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications</h4>
                <h5>St. Agnes College</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Specializing in advanced software engineering and data analytics. Built complex scalable applications including a full-stack public issue reporting portal with RBAC and email integrations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
