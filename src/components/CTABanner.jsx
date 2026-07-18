import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Chip,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import admissionsKidImg from '../assets/admissions_kid.png';

export default function CTABanner() {
  const handleEnroll = () => {
    const contact = document.querySelector('#contact');
    if (contact) {
      const header = document.getElementById('main-header');
      const headerOffset = header ? header.offsetHeight : 80;
      const elementPosition = contact.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      id="admissions"
      sx={{
        py: { xs: 5, sm: 7 },
        backgroundColor: '#FFFFFF',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: '#1E9457',
            color: '#FFFFFF',
            borderRadius: { xs: '24px', md: '36px' },
            py: { xs: 4, sm: 5, md: 6 },
            px: { xs: 3, sm: 5, md: 8 },
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 16px 45px rgba(30, 148, 87, 0.3)',
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Left Content */}
            <Grid item xs={12} md={8}>
              <Box sx={{ maxWidth: 620 }}>
                <Chip
                  label="ADMISSIONS OPEN"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: { xs: '0.7rem', sm: '0.8rem' },
                    px: 1.2,
                    py: 1,
                    mb: 2,
                    letterSpacing: '0.1em',
                    borderRadius: '10px',
                  }}
                />

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
                    fontWeight: 900,
                    lineHeight: 1.15,
                    mb: 1.5,
                    color: '#FFFFFF',
                  }}
                >
                  Book Your Free Demo Class Today!
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1.1rem' },
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: 3.5,
                    lineHeight: 1.5,
                  }}
                >
                  Give your child the right start. Enroll now for a better tomorrow.
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon sx={{ color: '#1E9457' }} />}
                  onClick={handleEnroll}
                  sx={{
                    backgroundColor: '#FFFFFF',
                    color: '#1E9457',
                    fontWeight: 800,
                    fontSize: '1rem',
                    borderRadius: '30px',
                    px: 4,
                    py: 1.5,
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                    '&:hover': {
                      backgroundColor: '#F8F9FB',
                      color: '#14673B',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Enroll Now
                </Button>
              </Box>
            </Grid>

            {/* Right Kid Circular Image */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-end' },
                  alignItems: 'center',
                }}
              >
                <Box
                  component="img"
                  src={admissionsKidImg}
                  alt="Cheerful student with backpack"
                  sx={{
                    width: { xs: 180, sm: 220, md: 260 },
                    height: { xs: 180, sm: 220, md: 260 },
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '6px solid rgba(255, 255, 255, 0.35)',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
