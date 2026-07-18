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
        pt: { xs: 3, sm: 4, md: 5 },
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

          {/* Right Column: Full Right Light Gray Arc Container + Kids Photo + Dark Navy Banner */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 360, sm: 480, md: 520 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              {/* Light Gray Sweeping Arc Background Container */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#EEF3F8',
                  borderRadius: { xs: '30px', md: '280px 0 0 280px / 360px 0 0 360px' },
                  borderLeft: '10px solid #FFFFFF',
                  zIndex: 0,
                }}
              />

              {/* Kids Photo sitting inside the light gray arc container extending 100% right */}
              <Box
                component="img"
                src={heroKidsExactImg}
                alt="Happy Indian children studying together at Valar Learning Centre"
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: { xs: '24px', md: '280px 0 0 280px / 360px 0 0 360px' },
                }}
              />

              {/* Bottom Right Solid Dark Navy Banner */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: { xs: '92%', sm: '85%', md: '80%' },
                  backgroundColor: '#101B33',
                  color: '#FFFFFF',
                  borderRadius: '50px 0 0 0',
                  py: { xs: 2, sm: 2.6 },
                  px: { xs: 3, sm: 4 },
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '-8px -8px 25px rgba(16, 27, 51, 0.2)',
                }}
              >
                {/* Left Text */}
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '0.88rem', sm: '1.02rem', md: '1.08rem' },
                    lineHeight: 1.3,
                    color: '#FFFFFF',
                    maxWidth: 260,
                  }}
                >
                  Shaping Today's Learners Into Tomorrow's Leaders
                </Typography>

                {/* Right Paper Airplane & Doodles SVG */}
                <Box sx={{ width: 68, height: 50, flexShrink: 0 }}>
                  <svg width="68" height="50" viewBox="0 0 68 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Flying Paper Plane */}
                    <path
                      d="M60 8L22 28L35 32L60 8Z"
                      fill="#FFFFFF"
                      fillOpacity="0.95"
                    />
                    <path
                      d="M60 8L35 32V42L41 34.5L60 8Z"
                      fill="#CBD5E1"
                    />
                    {/* Dotted Trail */}
                    <path
                      d="M8 40C14 38 20 34 26 30"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeDasharray="3 3"
                      strokeLinecap="round"
                    />
                    {/* Planet Ring Doodle */}
                    <circle cx="54" cy="40" r="4.5" stroke="#FFFFFF" strokeWidth="1.5" />
                    <ellipse cx="54" cy="40" rx="8" ry="2.5" stroke="#FFFFFF" strokeWidth="1.2" transform="rotate(-20 54 40)" />
                    {/* Star Sparkle */}
                    <path d="M14 12L16.5 16.5L21 19L16.5 21.5L14 26L11.5 21.5L7 19L11.5 16.5L14 12Z" fill="#FFFFFF" fillOpacity="0.7" />
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
