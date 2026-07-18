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
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';

const navItems = [
  { label: 'Home', href: '#hero', icon: HomeOutlinedIcon },
  { label: 'About Us', href: '#about', icon: InfoOutlinedIcon },
  { label: 'Courses', href: '#courses', icon: SchoolOutlinedIcon },
  { label: 'Gallery', href: '#gallery', icon: CollectionsOutlinedIcon },
  { label: 'Testimonials', href: '#testimonials', icon: RateReviewOutlinedIcon },
  { label: 'Admissions', href: '#admissions', icon: HowToRegOutlinedIcon },
  { label: 'Contact', href: '#contact', icon: ContactPhoneOutlinedIcon },
];

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
      {/* Header in Drawer */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: '10px',
              backgroundColor: '#101B33',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MenuBookIcon sx={{ fontSize: 22 }} />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#101B33', fontSize: '1rem', lineHeight: 1.1 }}>
              VALAR CENTRE
            </Typography>
            <Typography variant="caption" sx={{ color: '#1E9457', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.06em' }}>
              IMAGINE • LEARN • SOAR
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={handleDrawerToggle} edge="end" aria-label="close drawer" sx={{ color: '#101B33' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ my: 1.5 }} />

      {/* Nav List */}
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
                '&:hover': { backgroundColor: 'rgba(30, 148, 87, 0.08)' },
              }}
            >
              <ListItemIcon sx={{ minWidth: 38, color: '#1E9457' }}>
                <ItemIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 700,
                  color: '#101B33',
                  fontSize: '0.95rem',
                }}
              />
            </ListItem>
          );
        })}
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Book Free Demo Button in Drawer */}
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
        borderBottom: '1px solid rgba(16, 27, 51, 0.08)',
        zIndex: 1100,
        top: 0,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: { xs: 70, md: 82 } }}>
          {/* Brand Logo */}
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
            <Box
              sx={{
                width: { xs: 40, sm: 46 },
                height: { xs: 40, sm: 46 },
                borderRadius: '12px',
                backgroundColor: '#101B33',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 4px 16px rgba(16, 27, 51, 0.2)',
                position: 'relative',
              }}
            >
              <MenuBookIcon sx={{ fontSize: { xs: 24, sm: 28 }, color: '#FFFFFF' }} />
            </Box>
            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontFamily: '"Poppins", "Baloo 2", sans-serif',
                  fontWeight: 800,
                  color: '#101B33',
                  lineHeight: 1.05,
                  fontSize: { xs: '1.05rem', sm: '1.25rem', md: '1.35rem' },
                  letterSpacing: '-0.01em',
                }}
              >
                VALAR LEARNING CENTRE
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#1E9457',
                  fontWeight: 700,
                  fontSize: { xs: '0.6rem', sm: '0.68rem' },
                  letterSpacing: '0.12em',
                  display: 'block',
                  mt: 0.1,
                }}
              >
                IMAGINE • LEARN • SOAR
              </Typography>
            </Box>
          </Box>

          {/* Desktop Nav Items */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { md: 1.5, lg: 2.8 } }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    color: '#101B33',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    px: 1.2,
                    py: 0.8,
                    borderRadius: '12px',
                    '&:hover': {
                      backgroundColor: 'rgba(30, 148, 87, 0.08)',
                      color: '#1E9457',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <Button
                variant="contained"
                color="secondary"
                startIcon={<CalendarMonthIcon />}
                onClick={() => handleNavClick('#admissions')}
                sx={{
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  py: 1.1,
                  px: 2.8,
                  borderRadius: '30px',
                  boxShadow: '0 4px 16px rgba(30, 148, 87, 0.35)',
                  '&:hover': {
                    boxShadow: '0 6px 22px rgba(30, 148, 87, 0.5)',
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
                color="secondary"
                size="small"
                startIcon={<CalendarMonthIcon sx={{ fontSize: 18 }} />}
                onClick={() => handleNavClick('#admissions')}
                sx={{
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  py: 0.8,
                  px: 1.8,
                  borderRadius: '24px',
                  boxShadow: '0 4px 12px rgba(30, 148, 87, 0.3)',
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
                  borderRadius: '12px',
                  backgroundColor: 'rgba(16, 27, 51, 0.05)',
                }}
              >
                <MenuIcon sx={{ fontSize: 26, color: '#101B33' }} />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: { borderRadius: '24px 0 0 24px' },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
