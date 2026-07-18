import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar, Rating, Chip } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const reviews = [
  {
    name: 'Kavitha R.',
    role: 'Parent of Class 5 Student',
    area: 'Poonamallee, Chennai',
    review:
      'My son joined Valar Learning Centre for Tuitions and Phonics. His concept clarity has improved tremendously and his reading speed doubled in just 2 months!',
    rating: 5,
    initials: 'KR',
    bgColor: '#101B33',
  },
  {
    name: 'Suresh Kumar',
    role: 'Parent of Abacus Student',
    area: 'Senneerkuppam',
    review:
      'The teachers pay personal attention to every kid. My daughter loves the Abacus classes and calculation speed has become super fast. Highly recommended!',
    rating: 5,
    initials: 'SK',
    bgColor: '#1E9457',
  },
  {
    name: 'Priyardharshini M.',
    role: 'Yoga Class Participant',
    area: 'Poonamallee',
    review:
      'The women-only Yoga sessions at Valar are peaceful and refreshing. The instructor is very experienced and patient. A wonderful space for women in our locality.',
    rating: 5,
    initials: 'PM',
    bgColor: '#101B33',
  },
];

export default function Testimonials() {
  return (
    <Box
      id="testimonials"
      sx={{
        py: { xs: 7, sm: 9, md: 11 },
        backgroundColor: '#FBF9F4',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 3 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 5, sm: 7 } }}>
          <Chip
            label="PARENT REVIEWS & FEEDBACK"
            sx={{
              backgroundColor: 'rgba(30, 148, 87, 0.12)',
              color: '#1E9457',
              fontWeight: 800,
              fontSize: '0.82rem',
              px: 1.5,
              py: 2,
              mb: 1.5,
              letterSpacing: '0.08em',
            }}
          />
          <Typography
            variant="h2"
            sx={{
              color: '#101B33',
              fontSize: { xs: '1.9rem', sm: '2.5rem', md: '2.8rem' },
              fontWeight: 800,
              mb: 1.5,
            }}
          >
            What Parents Say About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#4A5568',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '0.95rem', sm: '1.08rem' },
            }}
          >
            Real stories from parents who have witnessed their children blossom at Valar Learning Centre.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 3.5 }} alignItems="stretch">
          {reviews.map((rev, index) => (
            <Grid item xs={12} md={4} key={index} style={{ display: 'flex' }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 3.5 },
                  width: '100%',
                  borderRadius: 5,
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid rgba(16, 27, 51, 0.08)',
                  boxShadow: '0 10px 30px rgba(16, 27, 51, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.35s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 35px rgba(16, 27, 51, 0.12)',
                    borderColor: rev.bgColor === '#1E9457' ? '#1E9457' : '#101B33',
                  },
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    fontSize: 48,
                    color: rev.bgColor === '#1E9457' ? '#1E9457' : '#101B33',
                    opacity: 0.15,
                    position: 'absolute',
                    top: 20,
                    right: 20,
                  }}
                />

                <Rating value={rev.rating} readOnly precision={0.5} sx={{ mb: 2, color: '#F59E0B' }} />

                <Typography
                  variant="body2"
                  sx={{
                    color: '#101B33',
                    fontSize: { xs: '0.9rem', sm: '0.95rem' },
                    lineHeight: 1.6,
                    mb: 3,
                    fontStyle: 'italic',
                    flexGrow: 1,
                  }}
                >
                  "{rev.review}"
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 'auto' }}>
                  <Avatar
                    sx={{
                      backgroundColor: rev.bgColor,
                      color: '#FFFFFF',
                      fontWeight: 800,
                      width: 44,
                      height: 44,
                      fontSize: '0.95rem',
                    }}
                  >
                    {rev.initials}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#101B33', fontSize: '1rem', lineHeight: 1.1 }}>
                      {rev.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#4A5568', fontWeight: 600, display: 'block' }}>
                      {rev.role} • {rev.area}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
