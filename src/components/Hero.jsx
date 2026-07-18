import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

import heroKidsExactImg from '../assets/hero_kids_exact.png';

const heroFeatures = [
  { icon: RecordVoiceOverIcon, label: 'Experienced\nFaculty' },
  { icon: LaptopMacIcon, label: 'Personal\nAttention' },
  { icon: EmojiObjectsOutlinedIcon, label: 'Activity Based\nLearning' },
  { icon: AccountBalanceWalletOutlinedIcon, label: 'Affordable\nFees' },
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
        pt: { xs: 3, sm: 5, md: 6 },
        pb: { xs: 5, sm: 7, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl" disableGutters={{ xs: false, sm: false }}>
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
          {/* Left Text Column */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { xs: 0, lg: 2 }, pr: { xs: 0, md: 2 } }}>
              {/* Main Heading */}
              <Typography
                variant="h1"
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: '2.2rem', sm: '3rem', md: '3.3rem', lg: '3.8rem' },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
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

              {/* Subheading */}
              <Typography
                variant="h5"
                sx={{
                  color: '#101B33',
                  fontWeight: 700,
                  fontSize: { xs: '1.15rem', sm: '1.35rem', md: '1.45rem' },
                  mb: 2,
                }}
              >
                Where Learning Meets Confidence.
              </Typography>

              {/* Paragraph */}
              <Typography
                variant="body1"
                sx={{
                  color: '#4A5568',
                  fontSize: { xs: '0.95rem', sm: '1.02rem' },
                  lineHeight: 1.65,
                  mb: 4,
                  maxWidth: 540,
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
                {/* Explore Courses Solid Navy Button */}
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => handleScrollTo('#courses')}
                  sx={{
                    backgroundColor: '#101B33',
                    color: '#FFFFFF',
                    borderRadius: '14px',
                    px: 3.5,
                    py: 1.4,
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    boxShadow: '0 6px 20px rgba(16, 27, 51, 0.25)',
                    '&:hover': {
                      backgroundColor: '#1D2D50',
                    },
                  }}
                >
                  Explore Courses
                </Button>

                {/* Book Free Demo Class Outlined Green Button */}
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<CalendarMonthIcon sx={{ color: '#1E9457' }} />}
                  onClick={() => handleScrollTo('#admissions')}
                  sx={{
                    borderColor: '#1E9457',
                    borderWidth: '1.5px',
                    color: '#101B33',
                    borderRadius: '14px',
                    px: 3.2,
                    py: 1.4,
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    '&:hover': {
                      borderColor: '#1E9457',
                      backgroundColor: 'rgba(30, 148, 87, 0.06)',
                    },
                  }}
                >
                  Book Free Demo Class
                </Button>
              </Box>

              {/* 4 Feature Items with Green Icons & Labels */}
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
                            width: 40,
                            height: 40,
                            borderRadius: '12px',
                            backgroundColor: 'rgba(30, 148, 87, 0.1)',
                            color: '#1E9457',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Icon sx={{ fontSize: 22 }} />
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: '#101B33',
                            fontSize: '0.82rem',
                            lineHeight: 1.2,
                            whiteSpace: 'pre-line',
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

          {/* Right Column: Arch Cutout Image & Dark Navy Banner */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                minHeight: { xs: 340, sm: 460, md: 520 },
              }}
            >
              {/* Soft Light Gray-Blue Curved Outline SVG behind image */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '-4%',
                  left: { xs: '-2%', sm: '4%', md: '-2%' },
                  width: '102%',
                  height: '108%',
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              >
                <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="none" fill="none">
                  <path
                    d="M 180,0 C 40,150 40,350 180,500 L 500,500 L 500,0 Z"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                </svg>
              </Box>

              {/* Kids Image with Arch Mask */}
              <Box
                component="img"
                src={heroKidsExactImg}
                alt="Happy Indian children studying together at Valar Learning Centre"
                sx={{
                  width: '96%',
                  height: { xs: 320, sm: 440, md: 490 },
                  objectFit: 'cover',
                  borderRadius: { xs: '30px', md: '160px 0 0 160px / 240px 0 0 240px' },
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '-10px 15px 40px rgba(16, 27, 51, 0.12)',
                }}
              />

              {/* Bottom Right Solid Dark Navy Banner */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -10,
                  right: -10,
                  width: { xs: '90%', sm: '80%', md: '75%' },
                  backgroundColor: '#101B33',
                  color: '#FFFFFF',
                  borderRadius: '50px 0 0 0',
                  py: { xs: 2, sm: 2.5 },
                  px: { xs: 3, sm: 4 },
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '-6px -6px 25px rgba(16, 27, 51, 0.25)',
                }}
              >
                {/* Left Text */}
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '0.85rem', sm: '0.98rem', md: '1.05rem' },
                    lineHeight: 1.3,
                    color: '#FFFFFF',
                    maxWidth: 240,
                  }}
                >
                  Shaping Today's Learners Into Tomorrow's Leaders
                </Typography>

                {/* Right Paper Airplane & Doodles SVG */}
                <Box sx={{ width: 64, height: 48, flexShrink: 0 }}>
                  <svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Flying Paper Plane */}
                    <path
                      d="M56 8L20 26L32 30L56 8Z"
                      fill="#FFFFFF"
                      fillOpacity="0.9"
                    />
                    <path
                      d="M56 8L32 30V40L38 32.5L56 8Z"
                      fill="#E2E8F0"
                    />
                    {/* Dotted Trail */}
                    <path
                      d="M6 38C12 36 18 32 24 28"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeDasharray="3 3"
                      strokeLinecap="round"
                    />
                    {/* Little Planet & Star Doodles */}
                    <circle cx="50" cy="38" r="4" stroke="#FFFFFF" strokeWidth="1.5" />
                    <ellipse cx="50" cy="38" rx="7" ry="2" stroke="#FFFFFF" strokeWidth="1" transform="rotate(-20 50 38)" />
                    <path d="M12 12L14 16L18 18L14 20L12 24L10 20L6 18L10 16L12 12Z" fill="#FFFFFF" fillOpacity="0.6" />
                  </svg>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
