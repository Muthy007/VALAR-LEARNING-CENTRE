import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
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
        py: { xs: 4, sm: 5 },
        backgroundColor: '#FFFFFF',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: '#1E9457',
            color: '#FFFFFF',
            borderRadius: { xs: '20px', md: '28px' },
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 12px 35px rgba(30, 148, 87, 0.25)',
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            minHeight: { md: 180 },
          }}
        >
          {/* Left Text Content */}
          <Box
            sx={{
              flex: 1,
              py: { xs: 3.5, md: 4 },
              px: { xs: 3, sm: 4, md: 6 },
              zIndex: 2,
            }}
          >
            {/* ADMISSIONS OPEN Badge */}
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 900,
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                color: '#FFFFFF',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                mb: 0.5,
              }}
            >
              ADMISSIONS OPEN
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2rem' },
                fontWeight: 800,
                lineHeight: 1.2,
                mb: 1,
                color: '#FFFFFF',
              }}
            >
              Book Your Free Demo Class Today!
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '0.85rem', sm: '0.92rem' },
                color: 'rgba(255, 255, 255, 0.88)',
                mb: 2.5,
                lineHeight: 1.5,
              }}
            >
              Give your child the right start. Enroll now for a better tomorrow.
            </Typography>

            <Button
              variant="outlined"
              size="medium"
              endIcon={<ArrowForwardIcon />}
              onClick={handleEnroll}
              sx={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                borderColor: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.88rem',
                borderRadius: '12px',
                px: 3,
                py: 1,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#FFFFFF',
                  color: '#1E9457',
                  borderColor: '#FFFFFF',
                },
              }}
            >
              Enroll Now
            </Button>
          </Box>

          {/* Right Kid Image */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'relative',
              flexShrink: 0,
              width: { md: 200, lg: 240 },
              height: { md: 180, lg: 200 },
              mr: { md: 4, lg: 6 },
              alignSelf: 'flex-end',
            }}
          >
            <Box
              component="img"
              src={admissionsKidImg}
              alt="Cheerful student with backpack"
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '100%',
                height: 'auto',
                maxHeight: { md: 210, lg: 240 },
                objectFit: 'contain',
                objectPosition: 'bottom',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
