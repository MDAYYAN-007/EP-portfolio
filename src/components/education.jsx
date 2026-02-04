import "../styles/education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-timeline">
          <div className="edu-item">
            <div className="edu-dot"></div>
            <div className="edu-card">
              <h3>B.E. in Artificial Intelligence & Machine Learning</h3>
              <p className="edu-place">RNS Institute of Technology</p>
              <span className="edu-meta">CGPA: 9.05 / 10</span>
            </div>
          </div>

          <div className="edu-item">
            <div className="edu-dot"></div>
            <div className="edu-card">
              <h3>Pre-University College – Science (PCMB)</h3>
              <p className="edu-place">Narayana PU College</p>
              <span className="edu-meta">Percentage: 91%</span>
            </div>
          </div>

          <div className="edu-item">
            <div className="edu-dot"></div>
            <div className="edu-card">
              <h3>SSLC - CBSE Board</h3>
              <p className="edu-place">Vidyaniketan Public School</p>
              <span className="edu-meta">Percentage: 84%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
