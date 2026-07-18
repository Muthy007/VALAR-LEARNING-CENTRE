import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';

const navItems = [
  { label: 'Home', href: '#hero', icon: HomeOutlinedIcon, active: true },
  { label: 'About Us', href: '#about', icon: InfoOutlinedIcon },
  { label: 'Courses', href: '#courses', icon: SchoolOutlinedIcon },
  { label: 'Gallery', href: '#gallery', icon: CollectionsOutlinedIcon },
  { label: 'Testimonials', href: '#testimonials', icon: RateReviewOutlinedIcon },
  { label: 'Admissions', href: '#admissions', icon: HowToRegOutlinedIcon },
  { label: 'Contact', href: '#contact', icon: ContactPhoneOutlinedIcon },
];

// Exact Valar Open Book Bird Logo SVG
const ValarLogoIcon = () => (
  <svg width="46" height="42" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Open Book Base */}
    <path
      d="M30 46C23 41 12 39 4 41V13C12 11 23 13 30 18C37 13 48 11 56 13V41C48 39 37 41 30 46Z"
      stroke="#101B33"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 18V46"
      stroke="#101B33"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    {/* Inner Book Page Accent */}
    <path
      d="M8 35C15 33 24 35 30 38C36 35 45 33 52 35"
      stroke="#1E9457"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Flying Bird / Wings ascending from book */}
    <path
      d="M20 20C24 15 28 8 30 4C32 8 36 15 40 20C34 19 30 22 30 22C30 22 26 19 20 20Z"
      fill="#101B33"
    />
    <path
      d="M30 4L34 14C32 16 30 18 30 18C30 18 28 16 26 14L30 4Z"
      fill="#1E9457"
    />
  </svg>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    setMobileOpen(false);
    setTimeout(() => {
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
    }, 100);
  };

  const drawer = (
    <Box
      sx={{
        width: 300,
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <ValarLogoIcon />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 900,
                color: '#101B33',
                fontSize: '1.15rem',
                lineHeight: 1.1,
                letterSpacing: '0.08em',
              }}
            >
              VALAR
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#1E9457',
                fontWeight: 700,
                fontSize: '0.62rem',
                letterSpacing: '0.06em',
                display: 'block',
              }}
            >
              — LEARNING CENTRE —
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#4A5568',
                fontWeight: 600,
                fontSize: '0.52rem',
                letterSpacing: '0.08em',
                display: 'block',
              }}
            >
              IMAGINE • LEARN • SOAR
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={handleDrawerToggle} edge="end" aria-label="close drawer" sx={{ color: '#101B33' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ my: 1.5 }} />

      <List sx={{ mb: 'auto' }}>
        {navItems.map((item) => {
          const ItemIcon = item.icon;
          return (
            <ListItem
              button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              sx={{
                borderRadius: 3,
                mb: 1,
                py: 1.2,
                px: 2,
                backgroundColor: item.active ? 'rgba(30, 148, 87, 0.08)' : 'transparent',
                '&:hover': { backgroundColor: 'rgba(30, 148, 87, 0.12)' },
              }}
            >
              <ListItemIcon sx={{ minWidth: 38, color: item.active ? '#1E9457' : '#101B33' }}>
                <ItemIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: item.active ? 800 : 600,
                  color: item.active ? '#1E9457' : '#101B33',
                  fontSize: '0.95rem',
                }}
              />
            </ListItem>
          );
        })}
      </List>

      <Divider sx={{ my: 2 }} />

      <Button
        fullWidth
        variant="contained"
        color="secondary"
        startIcon={<CalendarMonthIcon />}
        onClick={() => handleNavClick('#admissions')}
        sx={{
          py: 1.4,
          fontWeight: 800,
          fontSize: '0.95rem',
          borderRadius: '30px',
          backgroundColor: '#1E9457',
          boxShadow: '0 6px 20px rgba(30, 148, 87, 0.35)',
        }}
      >
        Book Free Demo
      </Button>
    </Box>
  );

  return (
    <AppBar
      id="main-header"
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: '#FFFFFF',
        color: '#101B33',
        borderBottom: '1px solid rgba(16, 27, 51, 0.06)',
        zIndex: 1100,
        top: 0,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: { xs: 72, md: 86 } }}>
          {/* Exact Brand Logo matching screenshot */}
          <Box
            component="a"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <ValarLogoIcon />

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 900,
                  color: '#101B33',
                  lineHeight: 1,
                  fontSize: { xs: '1.25rem', sm: '1.45rem' },
                  letterSpacing: '0.08em',
                }}
              >
                VALAR
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  color: '#1E9457',
                  fontWeight: 800,
                  fontSize: { xs: '0.62rem', sm: '0.72rem' },
                  letterSpacing: '0.06em',
                  lineHeight: 1.2,
                  mt: 0.2,
                }}
              >
                — LEARNING CENTRE —
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  color: '#718096',
                  fontWeight: 600,
                  fontSize: { xs: '0.52rem', sm: '0.58rem' },
                  letterSpacing: '0.12em',
                  lineHeight: 1.1,
                  mt: 0.1,
                }}
              >
                IMAGINE • LEARN • SOAR
              </Typography>
            </Box>
          </Box>

          {/* Desktop Nav Items */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { md: 2, lg: 3.5 } }}>
              {navItems.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    position: 'relative',
                    py: 1,
                  }}
                >
                  <Button
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      color: item.active ? '#101B33' : '#4A5568',
                      fontWeight: item.active ? 700 : 500,
                      fontSize: '0.94rem',
                      px: 1,
                      py: 0.5,
                      minWidth: 'auto',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#1E9457',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                  {item.active && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: '20%',
                        width: '60%',
                        height: 3,
                        backgroundColor: '#1E9457',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </Box>
              ))}

              <Button
                variant="contained"
                startIcon={<CalendarMonthIcon sx={{ fontSize: 20 }} />}
                onClick={() => handleNavClick('#admissions')}
                sx={{
                  backgroundColor: '#1E9457',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.94rem',
                  py: 1.1,
                  px: 2.8,
                  borderRadius: '12px',
                  boxShadow: '0 4px 14px rgba(30, 148, 87, 0.3)',
                  '&:hover': {
                    backgroundColor: '#14673B',
                    boxShadow: '0 6px 18px rgba(30, 148, 87, 0.45)',
                  },
                }}
              >
                Book Free Demo
              </Button>
            </Box>
          )}

          {/* Mobile Hamburger & Fast Action */}
          {isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                variant="contained"
                size="small"
                startIcon={<CalendarMonthIcon sx={{ fontSize: 16 }} />}
                onClick={() => handleNavClick('#admissions')}
                sx={{
                  backgroundColor: '#1E9457',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  py: 0.8,
                  px: 1.8,
                  borderRadius: '10px',
                }}
              >
                Demo
              </Button>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: '10px',
                  backgroundColor: 'rgba(16, 27, 51, 0.05)',
                }}
              >
                <MenuIcon sx={{ fontSize: 26, color: '#101B33' }} />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: { borderRadius: '20px 0 0 20px' },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
