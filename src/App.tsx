import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import OntologyVisualization from './components/OntologyVisualization';

function SiteHeader() {
  return (
    <header className="site-header">
      <p>OUR VERY IMPORTANT FINDINGS ON SUSTAINABILITY TRANSITION</p>
    </header>
  );
}

function TopNavigationBar() {
  return (
    <nav className="top-navigation-bar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ontology">Ontology</Link></li>
        <li><Link to="/worldmap">World Map</Link></li>
        <li><Link to="/data">Data</Link></li>
        <li><Link to="/publications">Publications</Link></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>PLEASEMAILUS@fau.de</p>
    </footer>
  );
}

interface ContentCardProps {
  title: string;
  imageUrl?: string; // Added optional imageUrl prop
}

const ContentCard: React.FC<ContentCardProps> = ({ title, imageUrl }) => {
  const imageStyle: React.CSSProperties = imageUrl
    ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: '#B0C0B0' }; // Default placeholder color if no image

  return (
    <div className="content-card">
      <div className="card-image-placeholder" style={imageStyle}></div>
      <p className="card-text">{title}</p>
    </div>
  );
};

function Landing() {
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  // Example placeholder image URLs (replace with actual image paths or URLs)
  const profPlaceholder = "https://via.placeholder.com/250x250.png?text=Professor";
  const fellowPlaceholder = "https://via.placeholder.com/250x250.png?text=Fellow";
  // Your specific student image path
  const studentAssistantImage = "/images/team/student.jpeg";
  const otherStudentPlaceholder = "https://via.placeholder.com/250x250.png?text=Assistant";

  return (
    <div className="landing-page-content">
      <div className="landing-page-inner-content">
        <section className="homepage-section">
          <h2 className="section-title">Our Publications</h2>
          <div className="card-grid">
            <ContentCard title={loremIpsum.substring(0, 50) + "..."} />
            <ContentCard title={loremIpsum.substring(20, 70) + "..."} />
            <ContentCard title={loremIpsum.substring(10, 60) + "..."} />
            <ContentCard title={loremIpsum.substring(30, 80) + "..."} />
          </div>
        </section>

        <section className="homepage-section">
          <h2 className="section-title">Our Work in Progress</h2>
          <div className="card-grid">
            <ContentCard title={loremIpsum.substring(5, 55) + "..."} />
            <ContentCard title={loremIpsum.substring(15, 65) + "..."} />
            <ContentCard title={loremIpsum.substring(25, 75) + "..."} />
            <ContentCard title={loremIpsum.substring(35, 85) + "..."} />
          </div>
        </section>

        <section className="homepage-section">
          <h2 className="section-title">Our Team</h2>
          <div className="card-grid">
            <ContentCard title="Prof. Lorem Ipsum - Lead Researcher" imageUrl={profPlaceholder} />
            <ContentCard title="Dr. Dolor Sit Amet - Senior Fellow" imageUrl={fellowPlaceholder} />
            <ContentCard title="Student Assistant Consectetur" imageUrl={studentAssistantImage} />
            <ContentCard title="Student Assistant Adipiscing" imageUrl={otherStudentPlaceholder} />
          </div>
        </section>

        <section className="homepage-section contact-section">
          <h2 className="section-title">Contact Us</h2>
          <form className="contact-panel">
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="topic">Topic</label>
              <input type="text" id="topic" name="topic" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} className="form-textarea"></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
}

function Ontology() {
  return (
    <div className="ontology-page">
      <h2>Ontology Visualization</h2>
      <OntologyVisualization />
    </div>
  );
}

function WorldMap() {
  return (
    <div className="worldmap-page">
      <h2>World Map Project</h2>
      <p>World map visualization coming soon.</p>
    </div>
  );
}

function DataPage() {
  return (
    <div className="generic-page">
      <h2>Data</h2>
      <p>Information about our data will be available here.</p>
    </div>
  );
}

function PublicationsPage() {
  return (
    <div className="generic-page">
      <h2>Publications</h2>
      <p>Our list of publications will be available here.</p>
    </div>
  );
}

function App() {
  const basename = import.meta.env.PROD ? '/stp_general/' : '/';
  console.log('Current environment PROD:', import.meta.env.PROD);
  console.log('Using basename for Router:', basename);

  return (
    <Router basename={basename}>
      <div className="site-container">
        <SiteHeader />
        <TopNavigationBar />
        <div className="app-layout">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/ontology" element={<Ontology />} />
              <Route path="/worldmap" element={<WorldMap />} />
              <Route path="/data" element={<DataPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
