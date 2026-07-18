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
  Paper,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import CategoryIcon from '@mui/icons-material/Category';
import StarIcon from '@mui/icons-material/Star';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';

const navItems = [
  { label: 'Programs', href: '#programs', icon: CategoryIcon },
  { label: 'Why Valar', href: '#why-valar', icon: StarIcon },
  { label: 'Parent Reviews', href: '#testimonials', icon: StarIcon },
  { label: 'FAQ', href: '#faq', icon: HelpOutlinedIcon },
  { label: 'Contact', href: '#contact', icon: ContactPhoneIcon },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    setMobileOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset;

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
              width: 40,
              height: 40,
              borderRadius: '10px',
              backgroundColor: '#101B33',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(16,27,51,0.2)',
            }}
          >
            <SchoolIcon sx={{ fontSize: 24 }} />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#101B33', fontSize: '1.05rem', lineHeight: 1.1 }}>
              VALAR CENTRE
            </Typography>
            <Typography variant="caption" sx={{ color: '#1E9457', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.08em' }}>
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

      {/* Mobile Location & Call Info Box */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          borderRadius: 3,
          backgroundColor: '#FBF9F4',
          border: '1px solid rgba(16,27,51,0.08)',
          mb: 2,
        }}
      >
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start', mb: 1 }}>
          <LocationOnIcon sx={{ color: '#1E9457', fontSize: 18, mt: 0.2 }} />
          <Typography variant="caption" sx={{ color: '#101B33', fontWeight: 600, lineHeight: 1.3 }}>
            Poonamallee, Chennai - 600056 (Near Meenu Apt)
          </Typography>
        </Box>
      </Paper>

      {/* Call Button */}
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        startIcon={<PhoneIcon />}
        component="a"
        href="tel:+919150281166"
        sx={{
          py: 1.5,
          fontWeight: 800,
          fontSize: '1rem',
          boxShadow: '0 6px 20px rgba(30, 148, 87, 0.35)',
        }}
      >
        Call +91 91502 81166
      </Button>
    </Box>
  );

  return (
    <Box
      id="sticky-header-container"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        width: '100%',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 25px rgba(16, 27, 51, 0.08)',
      }}
    >
      {/* Top Notification / Announcement Strip */}
      <Box
        sx={{
          backgroundColor: '#101B33',
          color: '#FFFFFF',
          py: 0.8,
          px: 2,
          fontSize: { xs: '0.75rem', sm: '0.85rem' },
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.8,
            fontWeight: 600,
          }}
        >
          <Box
            component="span"
            sx={{
              display: 'inline-block',
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#1E9457',
              boxShadow: '0 0 8px #1E9457',
            }}
          />
          Admissions Open 2026-27 | Poonamallee, Chennai
        </Box>
        <Box
          component="a"
          href="tel:+919150281166"
          sx={{
            color: '#4CD98B',
            fontWeight: 700,
            textDecoration: 'underline',
            display: { xs: 'none', sm: 'inline' },
          }}
        >
          Call: +91 91502 81166
        </Box>
      </Box>

      {/* Main AppBar */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          color: 'primary.main',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: { xs: 65, md: 75 } }}>
            {/* Logo */}
            <Box
              component="a"
              href="#"
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
                  width: { xs: 40, sm: 44 },
                  height: { xs: 40, sm: 44 },
                  borderRadius: '14px',
                  backgroundColor: '#101B33',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 16px rgba(16, 27, 51, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 0,
                    height: 0,
                    borderStyle: 'solid',
                    borderWidth: '0 16px 16px 0',
                    borderColor: 'transparent #1E9457 transparent transparent',
                  },
                }}
              >
                <SchoolIcon sx={{ fontSize: { xs: 24, sm: 26 }, color: '#FFFFFF' }} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontFamily: '"Baloo 2", cursive',
                    fontWeight: 800,
                    color: '#101B33',
                    lineHeight: 1.05,
                    fontSize: { xs: '1.05rem', sm: '1.25rem' },
                    letterSpacing: '0.01em',
                  }}
                >
                  VALAR LEARNING CENTRE
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#1E9457',
                    fontWeight: 800,
                    fontSize: { xs: '0.62rem', sm: '0.68rem' },
                    letterSpacing: '0.1em',
                    display: 'block',
                    mt: 0.1,
                  }}
                >
                  IMAGINE • LEARN • SOAR
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation Links */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      color: '#101B33',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      borderRadius: '20px',
                      px: 1.8,
                      py: 0.8,
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
                  startIcon={<PhoneIcon />}
                  component="a"
                  href="tel:+919150281166"
                  sx={{
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    py: 1,
                    px: 2.8,
                    boxShadow: '0 4px 16px rgba(30, 148, 87, 0.35)',
                    '&:hover': {
                      boxShadow: '0 6px 22px rgba(30, 148, 87, 0.5)',
                    },
                  }}
                >
                  +91 91502 81166
                </Button>
              </Box>
            )}

            {/* Mobile Hamburger & Fast Call CTA */}
            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  component="a"
                  href="tel:+919150281166"
                  sx={{
                    backgroundColor: 'rgba(30, 148, 87, 0.1)',
                    color: '#1E9457',
                    width: 40,
                    height: 40,
                    '&:hover': { backgroundColor: '#1E9457', color: '#FFFFFF' },
                  }}
                  aria-label="call centre"
                >
                  <PhoneIcon fontSize="small" />
                </IconButton>
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

        {/* Mobile Navigation Drawer */}
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
    </Box>
  );
}
