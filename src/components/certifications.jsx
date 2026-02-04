import "../styles/certifications.css";

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div className="cert-grid">
          <div className="cert-card">
            <h3>Internet of Things – NPTEL (IIT Kharagpur)</h3>
            <p>
              Completed a 12-week IoT course and achieved
              <strong> Elite–Silver</strong> ranking.
            </p>
          </div>

          <div className="cert-card">
            <h3>Front-End Web Development – Udemy</h3>
            <p>
              Learned React.js, HTML, CSS, and JavaScript for building
              responsive web applications.
            </p>
          </div>

          <div className="cert-card">
            <h3>Microsoft Excel – IBM (Coursera)</h3>
            <p>
              Gained hands-on experience with Excel for data analysis and
              reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
