import React from 'react';
import { Box, Container, Typography, Button, Chip, Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Hero() {
  const handleScrollToPrograms = () => {
    const element = document.querySelector('#programs');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: '#101B33', // Deep Navy
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 5, sm: 8, md: 10, lg: 12 },
        pb: { xs: 7, sm: 9, md: 11, lg: 13 },
        textAlign: 'center',
        /* Geometric Diagonal Wedge & Background Glows */
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: { xs: '260px', sm: '420px', md: '560px' },
          height: { xs: '260px', sm: '420px', md: '560px' },
          background: 'linear-gradient(135deg, #1E9457 0%, #14673B 100%)',
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          zIndex: 1,
          opacity: 0.9,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-80px',
          left: '-80px',
          width: { xs: '260px', sm: '400px' },
          height: { xs: '260px', sm: '400px' },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(30, 148, 87, 0.25) 0%, rgba(16, 27, 51, 0) 75%)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, px: { xs: 2.5, sm: 3 } }}>
        <Box sx={{ mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Top Motto Badges */}
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            sx={{ mb: 3, gap: 1 }}
          >
            <Chip
              icon={<AutoAwesomeIcon sx={{ color: '#1E9457 !important', fontSize: '0.95rem' }} />}
              label="IMAGINE • LEARN • SOAR"
              sx={{
                backgroundColor: '#FFFFFF',
                color: '#101B33',
                fontWeight: 800,
                fontSize: { xs: '0.75rem', sm: '0.85rem' },
                px: 1.2,
                py: 2,
                boxShadow: '0 4px 18px rgba(0,0,0,0.25)',
                letterSpacing: '0.06em',
                borderRadius: '30px',
              }}
            />

            <Chip
              icon={<StarIcon sx={{ color: '#F59E0B !important', fontSize: '0.95rem' }} />}
              label="Ages 3 - 15 Yrs"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                color: '#FFFFFF',
                backdropFilter: 'blur(8px)',
                fontWeight: 700,
                fontSize: { xs: '0.75rem', sm: '0.82rem' },
                px: 1,
                py: 2,
                borderRadius: '30px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            />
          </Stack>

          {/* Main Headline */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.1rem', sm: '3.2rem', md: '4rem', lg: '4.5rem' },
              lineHeight: { xs: 1.15, sm: 1.1 },
              mb: 2.5,
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
            }}
          >
            Nurturing Minds,{<br />}
            <Box
              component="span"
              sx={{
                color: '#4CD98B',
                background: 'linear-gradient(90deg, #4CD98B 0%, #1E9457 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              Building Futures.
            </Box>
          </Typography>

          {/* Subtext */}
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.88)',
              fontSize: { xs: '0.95rem', sm: '1.15rem' },
              lineHeight: 1.6,
              mb: 3.5,
              maxWidth: '680px',
              mx: 'auto',
            }}
          >
            Poonamallee’s premier learning centre for kids. We offer interactive tuitions, drawing (Zenarts Academy), phonics, abacus, handwriting, and yoga in a warm, activity-driven environment.
          </Typography>

          {/* Key Quick Bullet Points */}
          <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1.2} sx={{ mb: 4 }}>
            {[
              'Concept Clarity',
              'Small Batches',
              'Expert Guidance',
            ].map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.8,
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  px: 2,
                  py: 0.8,
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                }}
              >
                <VerifiedIcon sx={{ color: '#4CD98B', fontSize: 18 }} />
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#FFFFFF', fontSize: '0.85rem' }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>

          {/* Call to Action Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 2.5 }}
            justifyContent="center"
            sx={{ width: { xs: '100%', sm: 'auto' } }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<PhoneIcon />}
              component="a"
              href="tel:+919150281166"
              sx={{
                py: { xs: 1.6, sm: 1.8 },
                px: { xs: 3, sm: 4 },
                fontSize: '1.05rem',
                fontWeight: 800,
                width: { xs: '100%', sm: 'auto' },
                boxShadow: '0 8px 25px rgba(30, 148, 87, 0.45)',
              }}
            >
              Call +91 91502 81166
            </Button>
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={handleScrollToPrograms}
              sx={{
                py: { xs: 1.6, sm: 1.8 },
                px: { xs: 3, sm: 3.8 },
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#FFFFFF',
                width: { xs: '100%', sm: 'auto' },
                borderColor: 'rgba(255, 255, 255, 0.4)',
                borderWidth: 2,
                borderRadius: '30px',
                '&:hover': {
                  borderColor: '#4CD98B',
                  backgroundColor: 'rgba(30, 148, 87, 0.2)',
                  borderWidth: 2,
                },
              }}
            >
              Explore Programs
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
