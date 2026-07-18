import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import valarBuildingImg from '../assets/valar_building.png';

const aboutCards = [
  {
    icon: VisibilityOutlinedIcon,
    title: 'Our Vision',
    text: 'To be a trusted learning partner that empowers students to achieve excellence in academics and in life.',
  },
  {
    icon: TrackChangesOutlinedIcon,
    title: 'Our Mission',
    text: 'To deliver quality education through innovative teaching methods, personal care and holistic development of every child.',
  },
  {
    icon: FavoriteBorderOutlinedIcon,
    title: 'Why VALAR?',
    text: 'We focus on concept clarity, individual attention, activity based learning and overall development of every student.',
  },
];

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: '#F8F9FB',
        py: { xs: 5, sm: 7, md: 9 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        {/* Main Flex Row: Left Text & Cards | Right Storefront Building Image */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 4, md: 3, lg: 5 },
          }}
        >
          {/* Left Text & 3 Cards Container */}
          <Box
            sx={{
              flex: { md: '1 1 58%', lg: '1 1 56%' },
              maxWidth: { md: '58%', lg: '56%' },
              width: '100%',
            }}
          >
            {/* Green Subtitle Tag */}
            <Typography
              variant="subtitle2"
              sx={{
                color: '#1E9457',
                fontWeight: 800,
                fontSize: { xs: '0.75rem', sm: '0.82rem' },
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                mb: 1.2,
              }}
            >
              ABOUT VALAR LEARNING CENTRE
            </Typography>

            {/* Main Heading */}
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                color: '#101B33',
                fontSize: { xs: '1.65rem', sm: '2.1rem', md: '2.3rem', lg: '2.7rem' },
                fontWeight: 800,
                mb: 1.8,
                lineHeight: 1.2,
              }}
            >
              Building Strong Foundations For A Bright Future
            </Typography>

            {/* Description Paragraph */}
            <Typography
              variant="body1"
              sx={{
                color: '#4A5568',
                fontSize: { xs: '0.88rem', sm: '0.95rem' },
                lineHeight: 1.6,
                mb: { xs: 3, md: 3.5 },
              }}
            >
              At VALAR Learning Centre, we believe every child is unique and has immense potential.
              Our mission is to provide a nurturing environment that builds confidence, creativity,
              and strong foundations through concept-based learning and personalized attention.
            </Typography>

            {/* Mobile View Building Image Placement (Shown right after text on mobile screens) */}
            <Box
              sx={{
                display: { xs: 'block', md: 'none' },
                mb: 3.5,
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '100%',
                  maxWidth: 400,
                }}
              >
                <Box
                  component="img"
                  src={valarBuildingImg}
                  alt="Valar Learning Centre Storefront Building"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 320,
                    objectFit: 'cover',
                    borderRadius: '40px',
                    boxShadow: '0 12px 35px rgba(16, 27, 51, 0.1)',
                  }}
                />
              </Box>
            </Box>

            {/* 3 Compact Cards Side-by-Side in 1 Row */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                gap: { xs: 1.8, sm: 1.2, md: 1.5 },
              }}
            >
              {aboutCards.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    elevation={0}
                    sx={{
                      height: '100%',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E8EEF5',
                      borderRadius: '16px',
                      p: 0,
                      boxShadow: '0 4px 15px rgba(16, 27, 51, 0.03)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 10px 25px rgba(16, 27, 51, 0.08)',
                        borderColor: '#1E9457',
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 1.8, sm: 1.4, md: 1.6 }, '&:last-child': { pb: { xs: 1.8, sm: 1.4, md: 1.6 } } }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.8,
                          mb: 0.8,
                        }}
                      >
                        <Box
                          sx={{
                            width: 28,
                            height: 28,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(30, 148, 87, 0.12)',
                            color: '#1E9457',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Icon sx={{ fontSize: 16 }} />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: { xs: '0.88rem', sm: '0.8rem', md: '0.86rem' },
                            fontWeight: 800,
                            color: '#101B33',
                            lineHeight: 1.2,
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: '0.76rem', sm: '0.7rem', md: '0.74rem' },
                          color: '#4A5568',
                          lineHeight: 1.4,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Box>

          {/* Right Storefront Building Image Column (Desktop) */}
          <Box
            sx={{
              flex: { md: '0 0 40%', lg: '0 0 42%' },
              maxWidth: { md: '40%', lg: '42%' },
              width: '100%',
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              py: 1,
            }}
          >
            {/* Top-Left Doodles: Heart Balloon & Star */}
            <Box
              sx={{
                position: 'absolute',
                top: -15,
                left: -20,
                zIndex: 2,
                pointerEvents: 'none',
              }}
            >
              <svg width="55" height="65" viewBox="0 0 65 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Floating Heart Balloon */}
                <path
                  d="M32 40C32 40 16 32 16 20C16 14.5 20.5 10 26 12C29 13.2 32 15.5 32 15.5C32 15.5 35 13.2 38 12C43.5 10 48 14.5 48 20C48 32 32 40 32 40Z"
                  stroke="#5A6A85"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Balloon String */}
                <path
                  d="M32 40C30 45 35 50 31 56C28 60 33 65 30 70"
                  stroke="#5A6A85"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                {/* Small Star */}
                <path d="M10 28L12 34L18 36L12 38L10 44L8 38L2 36L8 34L10 28Z" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
              </svg>
            </Box>

            {/* Middle-Left Doodles: Open Book & Wavy Loops */}
            <Box
              sx={{
                position: 'absolute',
                top: '45%',
                left: -35,
                transform: 'translateY(-50%)',
                zIndex: 2,
                pointerEvents: 'none',
              }}
            >
              <svg width="60" height="95" viewBox="0 0 70 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Open Book Doodle */}
                <path
                  d="M35 25C26 21 14 23 10 26V52C14 49 26 47 35 51C44 47 56 49 60 52V26C56 23 44 21 35 25Z"
                  stroke="#5A6A85"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M35 25V51" stroke="#5A6A85" strokeWidth="2.2" strokeLinecap="round" />
                {/* Swirling Wavy Line under book */}
                <path
                  d="M45 65C30 60 15 75 25 90C35 105 10 100 20 108"
                  stroke="#5A6A85"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </Box>

            {/* Right Side Doodles: Vertical Ribbon Spiral & Sparkle Star */}
            <Box
              sx={{
                position: 'absolute',
                top: '15%',
                right: -25,
                zIndex: 2,
                pointerEvents: 'none',
              }}
            >
              <svg width="50" height="160" viewBox="0 0 60 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Long Ribbon Spiral */}
                <path
                  d="M25 10C45 30 10 60 35 90C55 115 15 140 30 170"
                  stroke="#5A6A85"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Bottom Right Star */}
                <path d="M42 145L45 152L52 155L45 158L42 165L39 158L32 155L39 152L42 145Z" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
              </svg>
            </Box>

            {/* Main Storefront / Building Photo Container */}
            <Box
              component="img"
              src={valarBuildingImg}
              alt="Valar Learning Centre Storefront Building"
              sx={{
                width: '100%',
                maxWidth: 440,
                height: 'auto',
                maxHeight: { md: 420, lg: 460 },
                objectFit: 'cover',
                borderRadius: '50px',
                boxShadow: '0 16px 45px rgba(16, 27, 51, 0.1)',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
