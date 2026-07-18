import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  Button,
  Divider,
} from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import SchoolIcon from '@mui/icons-material/School';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import CalculateIcon from '@mui/icons-material/Calculate';
import CreateIcon from '@mui/icons-material/Create';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneIcon from '@mui/icons-material/Phone';

const programsData = [
  {
    id: 'drawing',
    title: 'Drawing Classes',
    subtitle: 'With Zenarts Academy',
    tag: 'Creative Arts',
    icon: PaletteIcon,
    highlights: ['Enhances creativity', 'Explores imagination'],
    description: 'Nurture artistic talent with guided drawing & painting techniques.',
    accentColor: '#101B33',
    gradient: 'linear-gradient(135deg, #101B33 0%, #1D2D50 100%)',
    chipBg: '#EBF3FE',
    chipColor: '#101B33',
  },
  {
    id: 'tuitions',
    title: 'Tuitions',
    subtitle: 'State Board & CBSE',
    tag: 'Academics',
    icon: SchoolIcon,
    highlights: ['Concept clarity', 'Better understanding'],
    description: 'Thorough subject coaching focused on exam confidence & fundamentals.',
    accentColor: '#1E9457',
    gradient: 'linear-gradient(135deg, #1E9457 0%, #14673B 100%)',
    chipBg: '#E8F5E9',
    chipColor: '#1E9457',
  },
  {
    id: 'phonics',
    title: 'Phonics',
    subtitle: 'English & Tamil',
    tag: 'Language Skills',
    icon: RecordVoiceOverIcon,
    highlights: ['Strong foundation', 'Better pronunciation'],
    description: 'Master reading, spelling, and phonetic sounds in English & Tamil.',
    accentColor: '#101B33',
    gradient: 'linear-gradient(135deg, #101B33 0%, #1D2D50 100%)',
    chipBg: '#EBF3FE',
    chipColor: '#101B33',
  },
  {
    id: 'abacus',
    title: 'Abacus',
    subtitle: 'Speed & Mental Math',
    tag: 'Mental Speed',
    icon: CalculateIcon,
    highlights: ['Improves calculation', 'Boosts concentration'],
    description: 'Accelerate mental calculation speed and numerical memory focus.',
    accentColor: '#1E9457',
    gradient: 'linear-gradient(135deg, #1E9457 0%, #14673B 100%)',
    chipBg: '#E8F5E9',
    chipColor: '#1E9457',
  },
  {
    id: 'handwriting',
    title: 'Hand Writing',
    subtitle: 'Cursive & Print',
    tag: 'Penmanship',
    icon: CreateIcon,
    highlights: ['Neat writing', 'Builds confidence'],
    description: 'Transform handwriting into clean, elegant, and speedy penmanship.',
    accentColor: '#101B33',
    gradient: 'linear-gradient(135deg, #101B33 0%, #1D2D50 100%)',
    chipBg: '#EBF3FE',
    chipColor: '#101B33',
  },
  {
    id: 'yoga',
    title: 'Yoga',
    subtitle: 'For Women Only',
    tag: 'Health & Fitness',
    icon: SelfImprovementIcon,
    highlights: ['Health & flexibility', 'Peace & wellness'],
    description: 'Holistic yoga sessions for women focusing on health and posture.',
    accentColor: '#1E9457',
    gradient: 'linear-gradient(135deg, #1E9457 0%, #14673B 100%)',
    chipBg: '#E8F5E9',
    chipColor: '#1E9457',
  },
];

export default function Programs() {
  const handleCall = () => {
    window.location.href = 'tel:+919150281166';
  };

  return (
    <Box
      id="programs"
      sx={{
        py: { xs: 4, sm: 6, md: 9 },
        backgroundColor: '#FBF9F4',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 5 } }}>
          <Chip
            label="EXPLORE OUR COURSES"
            sx={{
              backgroundColor: 'rgba(30, 148, 87, 0.12)',
              color: '#1E9457',
              fontWeight: 800,
              fontSize: { xs: '0.68rem', sm: '0.82rem' },
              px: 1.2,
              py: 1.2,
              mb: 1,
              letterSpacing: '0.08em',
            }}
          />
          <Typography
            variant="h2"
            sx={{
              color: '#101B33',
              fontSize: { xs: '1.45rem', sm: '2.2rem', md: '2.6rem' },
              fontWeight: 800,
              mb: 0.8,
            }}
          >
            Programs Offered at Valar
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#4A5568',
              maxWidth: '640px',
              mx: 'auto',
              fontSize: { xs: '0.8rem', sm: '1rem' },
              lineHeight: 1.4,
            }}
          >
            Structured learning pathways tailored to foster academic strength, creativity, and life skills.
          </Typography>
        </Box>

        {/* CSS Grid: Strict 2 columns on Mobile & Tablet, 3 columns on Desktop */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: { xs: 1.5, sm: 2.2, md: 3 },
            width: '100%',
            alignItems: 'stretch',
          }}
        >
          {programsData.map((prog) => {
            const IconComponent = prog.icon;
            const isNavy = prog.accentColor === '#101B33';

            return (
              <Card
                key={prog.id}
                elevation={0}
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: { xs: 3, sm: 4 },
                  backgroundColor: '#FFFFFF',
                  border: isNavy
                    ? '1px solid rgba(16, 27, 51, 0.12)'
                    : '1px solid rgba(30, 148, 87, 0.2)',
                  boxShadow: '0 4px 14px rgba(16, 27, 51, 0.04)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: isNavy
                      ? '0 10px 24px rgba(16, 27, 51, 0.12)'
                      : '0 10px 24px rgba(30, 148, 87, 0.16)',
                    borderColor: isNavy ? '#101B33' : '#1E9457',
                  },
                }}
              >
                {/* Gradient Top Bar */}
                <Box
                  sx={{
                    height: { xs: 4, sm: 6 },
                    background: prog.gradient,
                    width: '100%',
                  }}
                />

                <CardContent
                  sx={{
                    p: { xs: 1.4, sm: 2.2, md: 2.5 },
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    '&:last-child': { pb: { xs: 1.4, sm: 2.2, md: 2.5 } },
                  }}
                >
                  {/* Top Bar: Icon Avatar & Chip Tag */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: { xs: 0.8, sm: 1.2 },
                      gap: 0.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 32, sm: 40, md: 46 },
                        height: { xs: 32, sm: 40, md: 46 },
                        borderRadius: { xs: '9px', sm: '12px' },
                        background: prog.gradient,
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: isNavy
                          ? '0 2px 8px rgba(16, 27, 51, 0.18)'
                          : '0 2px 8px rgba(30, 148, 87, 0.22)',
                      }}
                    >
                      <IconComponent sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }} />
                    </Box>

                    <Chip
                      label={prog.tag}
                      size="small"
                      sx={{
                        backgroundColor: prog.chipBg,
                        color: prog.chipColor,
                        fontWeight: 800,
                        fontSize: { xs: '0.52rem', sm: '0.66rem' },
                        height: { xs: 19, sm: 22 },
                        maxWidth: '65%',
                        '& .MuiChip-label': { px: { xs: 0.6, sm: 0.8 }, overflow: 'hidden', textOverflow: 'ellipsis' },
                      }}
                    />
                  </Box>

                  {/* Title & Subtitle */}
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#101B33',
                      fontWeight: 800,
                      fontSize: { xs: '0.85rem', sm: '1.1rem', md: '1.2rem' },
                      mb: 0.2,
                      lineHeight: 1.15,
                    }}
                  >
                    {prog.title}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      color: isNavy ? '#101B33' : '#1E9457',
                      fontWeight: 700,
                      fontSize: { xs: '0.6rem', sm: '0.72rem' },
                      mb: { xs: 0.5, sm: 1 },
                      display: 'block',
                      lineHeight: 1.2,
                    }}
                  >
                    {prog.subtitle}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#4A5568',
                      fontSize: { xs: '0.66rem', sm: '0.78rem' },
                      lineHeight: 1.35,
                      mb: { xs: 0.8, sm: 1.2 },
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {prog.description}
                  </Typography>

                  <Divider sx={{ mb: 0.8, mt: 'auto', borderColor: 'rgba(16,27,51,0.06)' }} />

                  {/* Key Benefits Header */}
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 800,
                      color: '#101B33',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      mb: 0.4,
                      fontSize: { xs: '0.55rem', sm: '0.66rem' },
                      display: 'block',
                    }}
                  >
                    Key Benefits
                  </Typography>

                  {/* Benefits Bullet List with Small Text */}
                  <List disablePadding sx={{ mb: { xs: 1, sm: 1.5 } }}>
                    {prog.highlights.map((item, idx) => (
                      <ListItem key={idx} disableGutters sx={{ py: 0.1 }}>
                        <ListItemIcon sx={{ minWidth: { xs: 13, sm: 18 } }}>
                          <CheckCircleOutlinedIcon
                            sx={{
                              color: isNavy ? '#101B33' : '#1E9457',
                              fontSize: { xs: 11, sm: 14 },
                            }}
                          />
                        </ListItemIcon>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            color: '#101B33',
                            fontSize: { xs: '0.6rem', sm: '0.75rem' },
                            lineHeight: 1.2,
                            wordBreak: 'break-word',
                          }}
                        >
                          {item}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>

                  {/* Inquire Button - Scaled down to prevent edge clipping */}
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<PhoneIcon sx={{ fontSize: { xs: '0.7rem !important', sm: '0.85rem !important' } }} />}
                      endIcon={<ArrowForwardIcon sx={{ fontSize: { xs: '0.7rem !important', sm: '0.85rem !important' } }} />}
                      onClick={handleCall}
                      sx={{
                        width: '100%',
                        borderRadius: '14px',
                        py: { xs: 0.4, sm: 0.5 },
                        px: { xs: 0.6, sm: 1.2 },
                        fontSize: { xs: '0.58rem', sm: '0.74rem' },
                        fontWeight: 800,
                        color: isNavy ? '#101B33' : '#1E9457',
                        borderColor: isNavy ? 'rgba(16, 27, 51, 0.3)' : 'rgba(30, 148, 87, 0.4)',
                        whiteSpace: 'nowrap',
                        minHeight: { xs: 25, sm: 28 },
                        '&:hover': {
                          backgroundColor: isNavy ? '#101B33' : '#1E9457',
                          color: '#FFFFFF',
                          borderColor: isNavy ? '#101B33' : '#1E9457',
                        },
                      }}
                    >
                      Inquire
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
