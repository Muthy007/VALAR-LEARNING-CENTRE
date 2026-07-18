import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FBF9F4' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Hero />
          <Programs />
          <Features />
          <Testimonials />
          <Faq />
          <Contact />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
