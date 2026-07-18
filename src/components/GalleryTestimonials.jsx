import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Button,
  Paper,
  Avatar,
  Rating,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
      'VALAR Learning Centre has truly helped my child build confidence and improve in studies. The teachers are very supportive, patient and caring.',
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
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, md: 6, lg: 8 }}>
          {/* Left Column: GALLERY */}
          <Grid item xs={12} md={6}>
            <Box id="gallery-section">
              <Chip
                label="GALLERY"
                sx={{
                  backgroundColor: 'rgba(30, 148, 87, 0.12)',
                  color: '#1E9457',
                  fontWeight: 800,
                  fontSize: { xs: '0.72rem', sm: '0.82rem' },
                  px: 1.2,
                  py: 1.2,
                  mb: 1.5,
                  letterSpacing: '0.08em',
                  borderRadius: '12px',
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  color: '#101B33',
                  fontSize: { xs: '1.75rem', sm: '2.3rem', md: '2.6rem' },
                  fontWeight: 800,
                  mb: 3,
                }}
              >
                Moments That Inspire
              </Typography>

              {/* 2x3 Photo Grid */}
              <Grid container spacing={1.8} sx={{ mb: 3 }}>
                {galleryImages.map((img, idx) => (
                  <Grid item xs={6} sm={4} key={idx}>
                    <Box
                      sx={{
                        position: 'relative',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        height: { xs: 110, sm: 130, md: 140 },
                        boxShadow: '0 4px 14px rgba(16, 27, 51, 0.08)',
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
                  </Grid>
                ))}
              </Grid>

              <Button
                variant="contained"
                color="secondary"
                sx={{
                  borderRadius: '24px',
                  px: 3,
                  py: 1.2,
                  fontWeight: 700,
                  fontSize: '0.9rem',
                }}
              >
                View More Photos
              </Button>
            </Box>
          </Grid>

          {/* Right Column: TESTIMONIALS */}
          <Grid item xs={12} md={6}>
            <Box id="testimonials">
              <Chip
                label="TESTIMONIALS"
                sx={{
                  backgroundColor: 'rgba(30, 148, 87, 0.12)',
                  color: '#1E9457',
                  fontWeight: 800,
                  fontSize: { xs: '0.72rem', sm: '0.82rem' },
                  px: 1.2,
                  py: 1.2,
                  mb: 1.5,
                  letterSpacing: '0.08em',
                  borderRadius: '12px',
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  color: '#101B33',
                  fontSize: { xs: '1.75rem', sm: '2.3rem', md: '2.6rem' },
                  fontWeight: 800,
                  mb: 3,
                }}
              >
                What Parents Say
              </Typography>

              {/* Quote Card */}
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: '24px',
                  backgroundColor: '#F8F9FB',
                  border: '1px solid rgba(16, 27, 51, 0.08)',
                  position: 'relative',
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    fontSize: 48,
                    color: 'rgba(30, 148, 87, 0.2)',
                    position: 'absolute',
                    top: 16,
                    left: 20,
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    color: '#101B33',
                    fontSize: { xs: '0.98rem', sm: '1.1rem' },
                    lineHeight: 1.65,
                    fontStyle: 'italic',
                    mt: 2,
                    mb: 3,
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
                    gap: 2,
                  }}
                >
                  {/* Avatar & Name */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.name}
                      sx={{ width: 52, height: 52, border: '2px solid #1E9457' }}
                    />
                    <Box>
                      <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 800, color: '#101B33', lineHeight: 1.2 }}>
                        {activeTestimonial.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#4A5568', fontWeight: 600, display: 'block', mt: 0.2 }}>
                        {activeTestimonial.subtitle}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Rating Stars */}
                  <Rating value={activeTestimonial.rating} readOnly size="medium" sx={{ color: '#FFB800' }} />
                </Box>

                {/* Left/Right Carousel Arrows */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1.5,
                    mt: 3,
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton
                    onClick={handlePrev}
                    sx={{
                      border: '1px solid rgba(16, 27, 51, 0.2)',
                      color: '#101B33',
                      '&:hover': { backgroundColor: '#1E9457', color: '#FFFFFF', borderColor: '#1E9457' },
                    }}
                    aria-label="previous testimonial"
                  >
                    <ArrowBackIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    onClick={handleNext}
                    sx={{
                      border: '1px solid rgba(16, 27, 51, 0.2)',
                      color: '#101B33',
                      '&:hover': { backgroundColor: '#1E9457', color: '#FFFFFF', borderColor: '#1E9457' },
                    }}
                    aria-label="next testimonial"
                  >
                    <ArrowForwardIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
