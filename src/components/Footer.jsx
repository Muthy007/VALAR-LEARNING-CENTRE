import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link as MuiLink,
  Divider,
  Fab,
} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import QrCode2Icon from '@mui/icons-material/QrCode2';

export default function Footer() {
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
      id="contact"
      sx={{
        backgroundColor: '#101B33',
        color: '#FFFFFF',
        pt: { xs: 8, md: 10 },
        pb: 4,
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 5, lg: 6 }}>
          {/* Column 1: Logo & Social */}
          <Grid item xs={12} sm={6} md={3.5}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: '12px',
                  backgroundColor: '#FFFFFF',
                  color: '#101B33',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MenuBookIcon sx={{ fontSize: 24 }} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Poppins", "Baloo 2", sans-serif',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    fontSize: '1.2rem',
                    lineHeight: 1.05,
                  }}
                >
                  VALAR LEARNING CENTRE
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#1E9457',
                    fontWeight: 700,
                    fontSize: '0.66rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  IMAGINE • LEARN • SOAR
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                mb: 3,
                maxWidth: 320,
              }}
            >
              Nurturing young minds through concept-based learning, personal attention and holistic development in Poonamallee, Chennai.
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 1.2 }}>
              {[
                { icon: FacebookIcon, href: '#' },
                { icon: InstagramIcon, href: '#' },
                { icon: WhatsAppIcon, href: 'https://wa.me/919150281166' },
                { icon: YouTubeIcon, href: '#' },
              ].map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <IconButton
                    key={idx}
                    component="a"
                    href={soc.href}
                    target="_blank"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      color: '#FFFFFF',
                      '&:hover': {
                        backgroundColor: '#1E9457',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                );
              })}
            </Box>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: '1.05rem',
                mb: 2.5,
                color: '#FFFFFF',
                letterSpacing: '0.02em',
              }}
            >
              QUICK LINKS
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About Us', href: '#about' },
                { label: 'Courses', href: '#courses' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Admissions', href: '#admissions' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link, idx) => (
                <MuiLink
                  key={idx}
                  underline="none"
                  onClick={() => handleScrollTo(link.href)}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#1E9457' },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Column 3: Our Courses */}
          <Grid item xs={6} sm={3} md={2.5}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: '1.05rem',
                mb: 2.5,
                color: '#FFFFFF',
                letterSpacing: '0.02em',
              }}
            >
              OUR COURSES
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {[
                'Tuition (LKG - XII)',
                'Abacus',
                'Phonics (English & Tamil)',
                'Hand Writing',
                'Drawing Classes',
                'Yoga (Women Only)',
              ].map((c, idx) => (
                <MuiLink
                  key={idx}
                  underline="none"
                  onClick={() => handleScrollTo('#courses')}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#1E9457' },
                  }}
                >
                  {c}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Column 4: Contact Us & QR Code */}
          <Grid item xs={12} sm={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: '1.05rem',
                mb: 2.5,
                color: '#FFFFFF',
                letterSpacing: '0.02em',
              }}
            >
              CONTACT US
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8, mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOnOutlinedIcon sx={{ color: '#1E9457', mt: 0.2, fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.88rem', lineHeight: 1.45 }}>
                  7/46, First floor, Vaniyar Street, Near Meenu Apartment, Senneerkuppam, Poonamallee, Chennai - 600056
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneInTalkOutlinedIcon sx={{ color: '#1E9457', fontSize: 20 }} />
                <MuiLink href="tel:+919150281166" underline="none" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 700, fontSize: '0.92rem' }}>
                  +91 91502 81166
                </MuiLink>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <EmailOutlinedIcon sx={{ color: '#1E9457', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.88rem' }}>
                  info@valarlearningcenter.com
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <LanguageOutlinedIcon sx={{ color: '#1E9457', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.88rem' }}>
                  www.valarlearningcenter.com
                </Typography>
              </Box>
            </Box>

            {/* QR Code Box */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.8,
                p: 1.5,
                px: 2,
                borderRadius: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#101B33',
                }}
              >
                <QrCode2Icon sx={{ fontSize: 38 }} />
              </Box>
              <Box>
                <Typography variant="caption" sx={{ fontWeight: 800, color: '#FFFFFF', display: 'block', fontSize: '0.82rem' }}>
                  Scan for Location
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.72rem' }}>
                  Poonamallee Branch Map
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Bottom copyright & legal */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.82rem' }}>
            © 2025 VALAR Learning Centre. All Rights Reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <MuiLink underline="none" href="#" sx={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.82rem', '&:hover': { color: '#1E9457' } }}>
              Privacy Policy
            </MuiLink>
            <MuiLink underline="none" href="#" sx={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.82rem', '&:hover': { color: '#1E9457' } }}>
              Terms & Conditions
            </MuiLink>
          </Box>
        </Box>
      </Container>

      {/* Floating Action Buttons at bottom right */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          zIndex: 1200,
        }}
      >
        <Fab
          color="secondary"
          size="medium"
          component="a"
          href="https://wa.me/919150281166"
          target="_blank"
          sx={{
            backgroundColor: '#25D366',
            color: '#FFFFFF',
            '&:hover': { backgroundColor: '#1EBE5D' },
            boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
          }}
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
        </Fab>
      </Box>
    </Box>
  );
}
