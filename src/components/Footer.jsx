import React from 'react';
import {
  Box,
  Container,
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
        pt: { xs: 6, md: 7 },
        pb: 3,
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Main Footer Grid - 5 columns on desktop */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: '2.5fr 1.2fr 1.5fr 2.2fr 1fr',
            },
            gap: { xs: 3, sm: 3, md: 4 },
          }}
        >
          {/* Column 1: Logo & Tagline & Social */}
          <Box sx={{ gridColumn: { xs: '1 / -1', sm: '1 / -1', md: '1 / 2' } }}>
            <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center', gap: 1.2 }}>
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: '10px',
                  backgroundColor: '#FFFFFF',
                  color: '#101B33',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MenuBookIcon sx={{ fontSize: 22 }} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    fontSize: '1.05rem',
                    lineHeight: 1.05,
                    letterSpacing: '0.05em',
                  }}
                >
                  VALAR
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#1E9457',
                    fontWeight: 700,
                    fontSize: '0.6rem',
                    letterSpacing: '0.12em',
                    display: 'block',
                    lineHeight: 1,
                  }}
                >
                  LEARNING CENTRE
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.82rem',
                lineHeight: 1.55,
                mb: 2,
                maxWidth: 280,
              }}
            >
              Nurturing minds through concept based learning, personal attention and holistic development.
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
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
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      color: '#FFFFFF',
                      width: 34,
                      height: 34,
                      '&:hover': {
                        backgroundColor: '#1E9457',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: 18 }} />
                  </IconButton>
                );
              })}
            </Box>
          </Box>

          {/* Column 2: Quick Links */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: '0.92rem',
                mb: 2,
                color: '#FFFFFF',
                letterSpacing: '0.03em',
              }}
            >
              QUICK LINKS
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
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
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.82rem',
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
          </Box>

          {/* Column 3: Our Courses */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: '0.92rem',
                mb: 2,
                color: '#FFFFFF',
                letterSpacing: '0.03em',
              }}
            >
              OUR COURSES
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                'Tuition',
                'Abacus',
                'Phonics',
                'Hand Writing',
                'Drawing Classes',
                'Yoga (Women Only)',
              ].map((c, idx) => (
                <MuiLink
                  key={idx}
                  underline="none"
                  onClick={() => handleScrollTo('#courses')}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.82rem',
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
          </Box>

          {/* Column 4: Contact Us */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: '0.92rem',
                mb: 2,
                color: '#FFFFFF',
                letterSpacing: '0.03em',
              }}
            >
              CONTACT US
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                <LocationOnOutlinedIcon sx={{ color: '#1E9457', mt: 0.2, fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.8rem', lineHeight: 1.45 }}>
                  7/46, First floor, Vaniyar Street, Near Meenu Apartment, Senneerkuppam, Poonamallee, Chennai - 600056
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <PhoneInTalkOutlinedIcon sx={{ color: '#1E9457', fontSize: 18 }} />
                <MuiLink href="tel:+919150281166" underline="none" sx={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 600, fontSize: '0.82rem' }}>
                  +91 91502 81166
                </MuiLink>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <EmailOutlinedIcon sx={{ color: '#1E9457', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.8rem' }}>
                  info@valarlearningcenter.com
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <LanguageOutlinedIcon sx={{ color: '#1E9457', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.8rem' }}>
                  www.valarlearningcenter.com
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Column 5: Scan to Location QR */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              pt: 4,
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#101B33',
                mb: 1,
              }}
            >
              <QrCode2Icon sx={{ fontSize: 60 }} />
            </Box>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: '0.72rem',
                textAlign: 'center',
                lineHeight: 1.3,
              }}
            >
              Scan to<br />Location
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.08)' }} />

        {/* Bottom copyright & legal */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1.5,
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: '0.78rem' }}>
            © 2025 VALAR Learning Centre. All Rights Reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2.5 }}>
            <MuiLink underline="none" href="#" sx={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: '0.78rem', '&:hover': { color: '#1E9457' } }}>
              Privacy Policy
            </MuiLink>
            <MuiLink underline="none" href="#" sx={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: '0.78rem', '&:hover': { color: '#1E9457' } }}>
              Terms & Conditions
            </MuiLink>
          </Box>
        </Box>
      </Container>

      {/* Floating WhatsApp FAB */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1200,
        }}
      >
        <Fab
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
