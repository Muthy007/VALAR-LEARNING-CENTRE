import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

import heroKidsImg from '../assets/hero_kids.png';

const heroFeatures = [
  { icon: SchoolIcon, label: 'Experienced Faculty' },
  { icon: PeopleIcon, label: 'Personal Attention' },
  { icon: LightbulbIcon, label: 'Activity Based Learning' },
  { icon: AccountBalanceWalletIcon, label: 'Affordable Fees' },
];

export default function Hero() {
  const handleScrollTo = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const header = document.getElementById('main-header');
      const headerOffset = header ? header.offsetHeight : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: '#FFFFFF',
        pt: { xs: 4, sm: 6, md: 8 },
        pb: { xs: 6, sm: 8, md: 10 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 6, lg: 8 }} alignItems="center">
          {/* Left Text Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: { md: 580, lg: 640 } }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.1rem', sm: '3rem', md: '3.4rem', lg: '4rem' },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  mb: 1.5,
                }}
              >
                <Box component="span" sx={{ color: '#101B33', display: 'block' }}>
                  NURTURING MINDS,
                </Box>
                <Box component="span" sx={{ color: '#1E9457', display: 'block' }}>
                  BUILDING FUTURES.
                </Box>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: '#101B33',
                  fontWeight: 700,
                  fontSize: { xs: '1.15rem', sm: '1.4rem', md: '1.5rem' },
                  mb: 2,
                }}
              >
                Where Learning Meets Confidence.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#4A5568',
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.65,
                  mb: 4,
                }}
              >
                At VALAR Learning Centre, we inspire young minds with concept-based learning,
                personal attention and holistic development to help every child shine.
              </Typography>

              {/* Action Buttons */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  mb: 5,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => handleScrollTo('#courses')}
                  sx={{
                    borderRadius: '30px',
                    px: 3.5,
                    py: 1.5,
                    fontWeight: 700,
                    fontSize: '1rem',
                    boxShadow: '0 8px 25px rgba(16, 27, 51, 0.25)',
                  }}
                >
                  Explore Courses
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  startIcon={<CalendarMonthIcon sx={{ color: '#1E9457' }} />}
                  onClick={() => handleScrollTo('#admissions')}
                  sx={{
                    borderRadius: '30px',
                    px: 3.2,
                    py: 1.5,
                    fontWeight: 700,
                    fontSize: '1rem',
                    borderColor: 'rgba(16, 27, 51, 0.3)',
                    color: '#101B33',
                    '&:hover': {
                      borderColor: '#101B33',
                      backgroundColor: 'rgba(16, 27, 51, 0.04)',
                    },
                  }}
                >
                  Book Free Demo Class
                </Button>
              </Box>

              {/* 4 Feature Items with Icons */}
              <Grid container spacing={2}>
                {heroFeatures.map((feat, index) => {
                  const Icon = feat.icon;
                  return (
                    <Grid item xs={6} sm={3} key={index}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: '10px',
                            backgroundColor: 'rgba(30, 148, 87, 0.12)',
                            color: '#1E9457',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Icon sx={{ fontSize: 20 }} />
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: '#101B33',
                            fontSize: '0.82rem',
                            lineHeight: 1.25,
                          }}
                        >
                          {feat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Grid>

          {/* Right Image with Curved Navy Background and Floating Card */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              {/* Dark Navy Arch/Curved Shape behind the photo */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '95%',
                  height: '110%',
                  backgroundColor: '#101B33',
                  borderRadius: { xs: '40px 140px 40px 40px', md: '50px 180px 50px 50px' },
                  zIndex: 0,
                }}
              />

              {/* Main Photo */}
              <Box
                component="img"
                src={heroKidsImg}
                alt="Happy students studying at Valar Learning Centre"
                sx={{
                  width: '94%',
                  maxHeight: { xs: 340, sm: 480, md: 540 },
                  objectFit: 'cover',
                  borderRadius: { xs: '30px 120px 30px 30px', md: '40px 160px 40px 40px' },
                  boxShadow: '0 20px 50px rgba(16, 27, 51, 0.25)',
                  position: 'relative',
                  zIndex: 1,
                }}
              />

              {/* Floating White Card */}
              <Paper
                elevation={6}
                sx={{
                  position: 'absolute',
                  bottom: { xs: -15, sm: -20 },
                  right: { xs: 5, sm: 20 },
                  zIndex: 2,
                  backgroundColor: '#101B33',
                  color: '#FFFFFF',
                  py: 1.5,
                  px: 2.5,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  maxWidth: { xs: 260, sm: 320 },
                  boxShadow: '0 12px 30px rgba(16, 27, 51, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '0.78rem', sm: '0.88rem' },
                    lineHeight: 1.3,
                    color: '#FFFFFF',
                  }}
                >
                  Shaping Today's Learners Into Tomorrow's Leaders
                </Typography>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: '#1E9457',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <FlightTakeoffIcon sx={{ fontSize: 18, color: '#FFFFFF' }} />
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
