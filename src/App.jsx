import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Process from './components/Process';
import Stats from './components/Stats';
import GalleryTestimonials from './components/GalleryTestimonials';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Hero />
          <About />
          <Courses />
          <Process />
          <Stats />
          <GalleryTestimonials />
          <CTABanner />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
