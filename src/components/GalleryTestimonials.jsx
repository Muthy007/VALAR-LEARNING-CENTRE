import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Avatar,
  Rating,
  IconButton,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import galleryArt from '../assets/gallery_art.png';
import galleryAbacus from '../assets/gallery_abacus.png';
import galleryReading from '../assets/gallery_reading.png';
import galleryYoga from '../assets/gallery_yoga.png';
import heroKids from '../assets/hero_kids.png';
import buildingPhoto from '../assets/valar_building.png';
import parentAvatar from '../assets/parent_avatar.png';

const galleryImages = [
  { src: galleryArt, title: 'Art & Drawing Class' },
  { src: galleryAbacus, title: 'Abacus Math Practice' },
  { src: galleryReading, title: 'Interactive Reading' },
  { src: galleryYoga, title: 'Kids & Women Yoga' },
  { src: heroKids, title: 'Group Learning' },
  { src: buildingPhoto, title: 'Poonamallee Centre' },
];

const testimonialsData = [
  {
    id: 1,
    quote:
      'VALAR Learning Centre has truly helped my child build confidence and improve in studies. The teachers are very supportive and caring.',
    name: 'Priya S.',
    subtitle: 'Parent of Grade 4 Student',
    rating: 5,
    avatar: parentAvatar,
  },
  {
    id: 2,
    quote:
      'The Abacus and Phonics coaching at VALAR is exceptional. My daughter calculates mentally so fast now and her reading speed doubled in just 3 months!',
    name: 'Karthik Raja',
    subtitle: 'Parent of Grade 2 Student',
    rating: 5,
    avatar: parentAvatar,
  },
  {
    id: 3,
    quote:
      'A wonderful, safe learning environment in Poonamallee. Individual attention given to every kid makes all the difference for exam preparation.',
    name: 'Meenakshi Sundaram',
    subtitle: 'Parent of Grade 10 Student',
    rating: 5,
    avatar: parentAvatar,
  },
];

export default function GalleryTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonialsData[currentTestimonial];

  return (
    <Box
      id="gallery"
      sx={{
        backgroundColor: '#FFFFFF',
        py: { xs: 5, sm: 7, md: 9 },
      }}
    >
      <Container maxWidth="xl">
        {/* Side-by-Side Flex Layout: Gallery Left | Testimonials Right */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 5, md: 5, lg: 7 },
            alignItems: 'flex-start',
          }}
        >
          {/* ===== LEFT: GALLERY ===== */}
          <Box
            id="gallery-section"
            sx={{
              flex: { md: '1 1 50%' },
              maxWidth: { md: '50%' },
              width: '100%',
            }}
          >
            {/* Green Tag */}
            <Typography
              variant="subtitle2"
              sx={{
                color: '#1E9457',
                fontWeight: 800,
                fontSize: { xs: '0.75rem', sm: '0.82rem' },
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                mb: 1,
              }}
            >
              GALLERY
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                color: '#101B33',
                fontSize: { xs: '1.65rem', sm: '2.2rem', md: '2.5rem' },
                fontWeight: 800,
                mb: 3,
              }}
            >
              Moments That Inspire
            </Typography>

            {/* 2×3 Photo Grid */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 1.5,
                mb: 3,
              }}
            >
              {galleryImages.map((img, idx) => (
                <Box
                  key={idx}
                  sx={{
                    position: 'relative',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    height: { xs: 95, sm: 120, md: 130 },
                    boxShadow: '0 4px 14px rgba(16, 27, 51, 0.06)',
                    '&:hover img': {
                      transform: 'scale(1.08)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={img.src}
                    alt={img.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease-in-out',
                    }}
                  />
                </Box>
              ))}
            </Box>

            <Button
              variant="outlined"
              sx={{
                borderRadius: '12px',
                px: 3,
                py: 1,
                fontWeight: 700,
                fontSize: '0.88rem',
                borderColor: '#1E9457',
                color: '#1E9457',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#1E9457',
                  color: '#FFFFFF',
                  borderColor: '#1E9457',
                },
              }}
            >
              View More Photos
            </Button>
          </Box>

          {/* ===== RIGHT: TESTIMONIALS ===== */}
          <Box
            id="testimonials"
            sx={{
              flex: { md: '1 1 50%' },
              maxWidth: { md: '50%' },
              width: '100%',
            }}
          >
            {/* Green Tag */}
            <Typography
              variant="subtitle2"
              sx={{
                color: '#1E9457',
                fontWeight: 800,
                fontSize: { xs: '0.75rem', sm: '0.82rem' },
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                mb: 1,
              }}
            >
              TESTIMONIALS
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                color: '#101B33',
                fontSize: { xs: '1.65rem', sm: '2.2rem', md: '2.5rem' },
                fontWeight: 800,
                mb: 3,
              }}
            >
              What Parents Say
            </Typography>

            {/* Testimonial Quote Card with Side Arrows */}
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 1.5 }}>
              {/* Left Arrow */}
              <IconButton
                onClick={handlePrev}
                sx={{
                  border: '1px solid #E8EEF5',
                  color: '#101B33',
                  width: 40,
                  height: 40,
                  flexShrink: 0,
                  '&:hover': { backgroundColor: '#1E9457', color: '#FFFFFF', borderColor: '#1E9457' },
                }}
                aria-label="previous testimonial"
              >
                <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
              </IconButton>

              {/* Quote Card */}
              <Paper
                elevation={0}
                sx={{
                  flex: 1,
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: '20px',
                  backgroundColor: '#F8F9FB',
                  border: '1px solid #E8EEF5',
                  position: 'relative',
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    fontSize: 40,
                    color: 'rgba(30, 148, 87, 0.18)',
                    position: 'absolute',
                    top: 14,
                    left: 18,
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    color: '#101B33',
                    fontSize: { xs: '0.92rem', sm: '1rem' },
                    lineHeight: 1.65,
                    fontStyle: 'italic',
                    mt: 2,
                    mb: 2.5,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  "{activeTestimonial.quote}"
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 1.5,
                  }}
                >
                  {/* Avatar & Name */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.name}
                      sx={{ width: 48, height: 48, border: '2px solid #1E9457' }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: '0.92rem', fontWeight: 800, color: '#101B33', lineHeight: 1.2 }}
                      >
                        – {activeTestimonial.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: '#4A5568', fontWeight: 600, display: 'block', mt: 0.2, fontSize: '0.78rem' }}
                      >
                        {activeTestimonial.subtitle}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Rating Stars */}
                  <Rating value={activeTestimonial.rating} readOnly size="small" sx={{ color: '#FFB800' }} />
                </Box>
              </Paper>

              {/* Right Arrow */}
              <IconButton
                onClick={handleNext}
                sx={{
                  border: '1px solid #E8EEF5',
                  color: '#101B33',
                  width: 40,
                  height: 40,
                  flexShrink: 0,
                  '&:hover': { backgroundColor: '#1E9457', color: '#FFFFFF', borderColor: '#1E9457' },
                }}
                aria-label="next testimonial"
              >
                <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
