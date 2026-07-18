import React from 'react';
import {
  Box,
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
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 2.5, sm: 4, md: 5 },
        pb: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'stretch', md: 'center' },
          justifyContent: 'space-between',
          width: '100%',
          minHeight: { md: 540, lg: 600 },
        }}
      >
        {/* Left Text Content Area */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%', lg: '48%' },
            pl: { xs: 2, sm: 4, md: 5, lg: 8, xl: 12 },
            pr: { xs: 2, sm: 4, md: 3 },
            boxSizing: 'border-box',
          }}
        >
          {/* Main Heading */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: '1.85rem', sm: '2.6rem', md: '3.1rem', lg: '3.6rem' },
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              mb: 1.2,
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
              fontSize: { xs: '1.05rem', sm: '1.25rem', md: '1.35rem' },
              mb: 1.5,
            }}
          >
            Where Learning Meets Confidence.
          </Typography>

          {/* Paragraph */}
          <Typography
            variant="body1"
            sx={{
              color: '#4A5568',
              fontSize: { xs: '0.88rem', sm: '0.98rem', md: '1.02rem' },
              lineHeight: 1.6,
              mb: { xs: 2.5, md: 4 },
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
              flexDirection: { xs: 'row', sm: 'row' },
              flexWrap: 'wrap',
              gap: 1.5,
              mb: { xs: 3, md: 5 },
            }}
          >
            {/* Explore Courses Solid Navy Button */}
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon fontSize="small" />}
              onClick={() => handleScrollTo('#courses')}
              sx={{
                backgroundColor: '#101B33',
                color: '#FFFFFF',
                borderRadius: '12px',
                px: { xs: 2.4, sm: 3.5 },
                py: { xs: 1.1, sm: 1.4 },
                fontWeight: 700,
                fontSize: { xs: '0.85rem', sm: '0.94rem' },
                boxShadow: '0 6px 18px rgba(16, 27, 51, 0.22)',
                flexGrow: { xs: 1, sm: 0 },
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
              startIcon={<CalendarMonthIcon sx={{ color: '#1E9457', fontSize: { xs: 18, sm: 20 } }} />}
              onClick={() => handleScrollTo('#admissions')}
              sx={{
                borderColor: '#1E9457',
                borderWidth: '1.5px',
                color: '#101B33',
                borderRadius: '12px',
                px: { xs: 2.2, sm: 3.2 },
                py: { xs: 1.1, sm: 1.4 },
                fontWeight: 700,
                fontSize: { xs: '0.85rem', sm: '0.94rem' },
                flexGrow: { xs: 1, sm: 0 },
                '&:hover': {
                  borderColor: '#1E9457',
                  backgroundColor: 'rgba(30, 148, 87, 0.06)',
                },
              }}
            >
              Book Free Demo Class
            </Button>
          </Box>

          {/* 4 Feature Items (Desktop only placement below buttons) */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
                          width: 38,
                          height: 38,
                          borderRadius: '12px',
                          backgroundColor: 'rgba(30, 148, 87, 0.1)',
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
                          fontSize: '0.8rem',
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
        </Box>

        {/* Right Column: Parabolic Arc Image Container (Full Right Edge) */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%', lg: '52%' },
            height: { xs: 280, sm: 380, md: 520, lg: 580 },
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            alignSelf: 'stretch',
            mt: { xs: 1.5, md: 0 },
            mb: { xs: 3, md: 0 },
          }}
        >
          {/* Light Gray Sweeping Arc Background Container - 100% Right Edge */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#EEF3F8',
              borderRadius: { xs: '140px 0 0 140px / 200px 0 0 200px', md: '280px 0 0 280px / 400px 0 0 400px' },
              borderLeft: { xs: '6px solid #FFFFFF', md: '10px solid #FFFFFF' },
              zIndex: 0,
            }}
          />

          {/* Kids Photo sitting inside the light gray arc container extending 100% right edge */}
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
              borderRadius: { xs: '140px 0 0 140px / 200px 0 0 200px', md: '280px 0 0 280px / 400px 0 0 400px' },
            }}
          />

          {/* Bottom Right Solid Dark Navy Banner */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: { xs: '88%', sm: '80%', md: '76%' },
              backgroundColor: '#101B33',
              color: '#FFFFFF',
              borderRadius: '40px 0 0 0',
              py: { xs: 1.4, sm: 2.2 },
              px: { xs: 2.2, sm: 3.8 },
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '-6px -6px 20px rgba(16, 27, 51, 0.22)',
            }}
          >
            {/* Left Text */}
            <Typography
              variant="body1"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '0.78rem', sm: '0.94rem', md: '1.05rem' },
                lineHeight: 1.25,
                color: '#FFFFFF',
                maxWidth: { xs: 180, sm: 240 },
              }}
            >
              Shaping Today's Learners Into Tomorrow's Leaders
            </Typography>

            {/* Right Paper Airplane & Doodles SVG */}
            <Box sx={{ width: { xs: 44, sm: 60 }, height: { xs: 32, sm: 44 }, flexShrink: 0 }}>
              <svg width="100%" height="100%" viewBox="0 0 68 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        {/* 4 Feature Items (Mobile placement right below Kids Photo) */}
        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
            width: '100%',
            px: { xs: 2.5, sm: 4 },
            mt: 1,
            boxSizing: 'border-box',
          }}
        >
          <Grid container spacing={1.5}>
            {heroFeatures.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <Grid item xs={6} key={index}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      backgroundColor: '#F8F9FB',
                      p: 1.2,
                      borderRadius: '12px',
                    }}
                  >
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        borderRadius: '10px',
                        backgroundColor: 'rgba(30, 148, 87, 0.12)',
                        color: '#1E9457',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon sx={{ fontSize: 18 }} />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 700,
                        color: '#101B33',
                        fontSize: '0.76rem',
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
      </Box>
    </Box>
  );
}
