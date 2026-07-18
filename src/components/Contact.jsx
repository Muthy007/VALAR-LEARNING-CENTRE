import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  Divider,
  Stack,
  Chip,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: '#101B33', // Deep Navy
        color: '#FFFFFF',
        pt: { xs: 7, sm: 9, md: 11 },
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: { xs: '250px', sm: '400px' },
          height: { xs: '250px', sm: '400px' },
          background: 'radial-gradient(circle, rgba(30, 148, 87, 0.2) 0%, rgba(16, 27, 51, 0) 70%)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, px: { xs: 2.5, sm: 3 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" sx={{ mb: { xs: 6, md: 8 } }}>
          {/* Left Side: Heading & CTA Call Button */}
          <Grid item xs={12} md={6}>
            <Box>
              <Chip
                label="VISIT OR CALL US TODAY"
                sx={{
                  backgroundColor: 'rgba(30, 148, 87, 0.25)',
                  color: '#4CD98B',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  px: 1.2,
                  py: 2,
                  mb: 2,
                  letterSpacing: '0.08em',
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.8rem', md: '3.2rem' },
                  fontWeight: 800,
                  color: '#FFFFFF',
                  mb: 2,
                  lineHeight: 1.15,
                }}
              >
                Enroll Your Child at Valar Learning Centre
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: { xs: '0.98rem', sm: '1.1rem' },
                  lineHeight: 1.6,
                  mb: 4,
                  maxWidth: '520px',
                }}
              >
                New admissions are open for all batches! Call our front desk or drop by our centre in Senneerkuppam, Poonamallee to meet our tutors.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ width: { xs: '100%', sm: 'auto' } }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<PhoneIcon />}
                  component="a"
                  href="tel:+919150281166"
                  sx={{
                    py: 1.8,
                    px: 4,
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
                  startIcon={<DirectionsIcon />}
                  component="a"
                  href="https://maps.google.com/?q=Senneerkuppam+Poonamallee+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    py: 1.8,
                    px: 3.5,
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                    borderWidth: 2,
                    borderRadius: '30px',
                    width: { xs: '100%', sm: 'auto' },
                    '&:hover': {
                      borderColor: '#4CD98B',
                      backgroundColor: 'rgba(30, 148, 87, 0.2)',
                      borderWidth: 2,
                    },
                  }}
                >
                  Get Directions
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* Right Side: Centre Details Card */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4.5 },
                borderRadius: 5,
                backgroundColor: '#FFFFFF',
                color: '#101B33',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
                border: '2px solid rgba(30, 148, 87, 0.25)',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: '#101B33',
                  mb: 3,
                  fontSize: { xs: '1.25rem', sm: '1.4rem' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.2,
                }}
              >
                <SchoolIcon sx={{ color: '#1E9457', fontSize: 30 }} />
                Centre Information
              </Typography>

              <Stack spacing={2.5}>
                {/* Phone */}
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 3,
                      backgroundColor: 'rgba(30, 148, 87, 0.12)',
                      color: '#1E9457',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <PhoneIcon />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#4A5568', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Phone / Hotline
                    </Typography>
                    <Typography
                      variant="h6"
                      component="a"
                      href="tel:+919150281166"
                      sx={{
                        display: 'block',
                        color: '#101B33',
                        fontWeight: 800,
                        textDecoration: 'none',
                        fontSize: '1.15rem',
                        '&:hover': { color: '#1E9457' },
                      }}
                    >
                      +91 91502 81166
                    </Typography>
                  </Box>
                </Box>

                <Divider light sx={{ borderColor: 'rgba(16,27,51,0.08)' }} />

                {/* Address */}
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 3,
                      backgroundColor: 'rgba(16, 27, 51, 0.08)',
                      color: '#101B33',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <LocationOnIcon />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#4A5568', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Address
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700, color: '#101B33', lineHeight: 1.5, mt: 0.2, fontSize: '0.95rem' }}>
                      7/46, First floor, Vaniyar Street,{<br />}
                      Near Meenu Apartment, Senneerkuppam,{<br />}
                      Poonamallee, Chennai - 600056
                    </Typography>
                  </Box>
                </Box>

                <Divider light sx={{ borderColor: 'rgba(16,27,51,0.08)' }} />

                {/* Hours */}
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 3,
                      backgroundColor: 'rgba(30, 148, 87, 0.12)',
                      color: '#1E9457',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <AccessTimeIcon />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#4A5568', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Opening Hours
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#101B33', fontSize: '0.92rem' }}>
                      Monday – Saturday: 9:00 AM – 7:30 PM
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#4A5568', display: 'block', mt: 0.2 }}>
                      Sunday: Special Batches & Workshops
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.15)', mb: 3 }} />

        {/* Footer Copyright Line */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1.5,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.85rem' }}>
            © {currentYear} Valar Learning Centre. All rights reserved. Poonamallee, Chennai.
          </Typography>
          <Typography variant="caption" sx={{ color: '#4CD98B', fontWeight: 800, letterSpacing: '0.08em' }}>
            IMAGINE • LEARN • SOAR
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
