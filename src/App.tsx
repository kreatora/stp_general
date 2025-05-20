import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import OntologyVisualization from './components/OntologyVisualization';

function SiteHeader() {
  return (
    <div className="site-header">
      <p>perfekt website</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>PLEASEMAILUS@fau.de</p>
    </div>
  );
}

function Landing() {
  return (
    <div className="landing-page">
      <h1>Welcome to the Sustainability Transition Policy Chair</h1>
      <p>
        Our mission is to represent and share our findings and data on sustainability transitions.<br />
        Use the menu to explore our ontology, world map, and more.
      </p>
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
        <div className="app-layout">
          <nav className="sidebar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/ontology">Ontology</Link></li>
              <li><Link to="/worldmap">World Map</Link></li>
              <li><Link to="/data">Data</Link></li>
              <li><Link to="/publications">Publications</Link></li>
            </ul>
          </nav>
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
