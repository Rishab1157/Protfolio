import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton, Box, Typography, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Home from './components/Home';
import SkillGemsDisplay from './components/About';
import Project from './components/Projects';
import Contact from './components/Contact';
import './style.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#64ffda' : '#2d3436',
      },
      secondary: {
        main: darkMode ? '#ff6b6b' : '#0984e3',
      },
      background: {
        default: darkMode ? '#0a192f' : '#f5f6fa',
        paper: darkMode ? '#112240' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Titillium Web", "Segoe UI", sans-serif',
    },
  });

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeIn' } },
  };

  // Navigation items for reuse
  const navItems = [
    { id: 'home', label: 'Home', target: 'home-section' },
    { id: 'about', label: 'About Me', target: 'about-section' },
    { id: 'projects', label: 'Projects', target: 'projects-section' },
    { id: 'contact', label: 'Contact', target: 'contact-section' },
  ];

  const handleNavClick = (targetId) => {
    setMobileNavOpen(false);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="app-container">
        {/* Theme Toggle */}
        <IconButton
          onClick={toggleDarkMode}
          className="theme-toggle"
          aria-label="Toggle light/dark mode"
          sx={{
            position: 'fixed',
            top: '20px',
            right: { xs: '60px', md: '20px' },
            zIndex: 1500,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        {/* Mobile Menu Toggle Button */}
        <IconButton
          onClick={toggleMobileNav}
          aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="mobile-menu-toggle"
          sx={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 1600,
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            display: { xs: 'flex', md: 'none' },
            width: 44,
            height: 44,
            borderRadius: '50%',
            '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
          }}
        >
          {mobileNavOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        {/* Navigation - Desktop */}
        <Box
          component="nav"
          className="sections-container"
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: 'background.paper',
            borderRadius: '0.75rem',
            boxShadow: 1,
            padding: '1rem',
            mb: 4,
            position: 'sticky',
            top: 0,
            zIndex: 1400,
          }}
        >
          {navItems.map(({ id, label, target }) => (
            <motion.div
              key={id}
              className="section nav-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick(target)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { handleNavClick(target); } }}
              aria-label={`Navigate to ${label}`}
              style={{ userSelect: 'none', cursor: 'pointer' }}
            >
              <Typography variant="subtitle1" className="section-title">
                {label}
              </Typography>
            </motion.div>
          ))}
        </Box>

        {/* Navigation - Mobile - collapsible */}
        <Collapse in={mobileNavOpen} timeout="auto" unmountOnExit>
          <Box
            component="nav"
            className="mobile-nav"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'column',
              backgroundColor: 'background.paper',
              borderRadius: '0.75rem',
              boxShadow: 1,
              mb: 4,
              p: 2,
              position: 'sticky',
              top: '74px',
              zIndex: 1400,
            }}
          >
            {navItems.map(({ id, label, target }) => (
              <motion.div
                key={id}
                className="section mobile-nav-item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(target)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { handleNavClick(target); } }}
                aria-label={`Navigate to ${label}`}
                sx={{
                  py: 1.5,
                  px: 2,
                  borderRadius: '0.5rem',
                  userSelect: 'none',
                  cursor: 'pointer',
                  mb: 1,
                }}
              >
                <Typography variant="subtitle1" className="section-title">
                  {label}
                </Typography>
              </motion.div>
            ))}
          </Box>
        </Collapse>

        {/* Main content sections */}
        <main className="main-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={darkMode ? 'dark' : 'light'}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              className="content-sections-container"
              style={{ maxWidth: 900, margin: '0 auto' }}
            >
              <section id="home-section" className="component-section">
                <Home />
              </section>
              <section id="about-section" className="component-section">
                <SkillGemsDisplay />
              </section>
              <section id="projects-section" className="component-section">
                <Project />
              </section>
              <section id="contact-section" className="component-section">
                <Contact />
              </section>
            </motion.div>
          </AnimatePresence>
        </main>
      </Box>
    </ThemeProvider>
  );
}

export default App;

