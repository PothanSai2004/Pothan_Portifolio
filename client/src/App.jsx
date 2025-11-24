import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { api } from './services/api';

// Components
import NavbarFinal from './components/NavbarFinal';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Dashboard from './admin/Dashboard';

const Portfolio = ({ data }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!data) return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;

  return (
    <main>
      <NavbarFinal
        data={data}
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        scrolled={scrolled}
      />

      <Hero data={data.intro} />
      <Experience data={data.experience} />
      <Skills data={data.skills} />
      <Projects data={data.projects} />
      <Certifications data={data.certifications} />
      <Contact data={data.contact} />

      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
        <p>&copy; {new Date().getFullYear()} {data.intro.name}. All rights reserved.</p>
        <Link to="/admin" style={{ fontSize: '0.8rem', opacity: 0.5 }}>Admin Login</Link>
      </footer>
    </main>
  );
};

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const result = await api.getData();
      setData(result);
    } catch (error) {
      console.error('Failed to load data', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div style={{ height: '100vh', background: 'var(--bg-primary)' }} />;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio data={data} />} />
        <Route path="/admin" element={<Dashboard initialData={data} onUpdate={loadData} />} />
      </Routes>
    </Router>
  );
}

export default App;
