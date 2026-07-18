import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalculateIcon from '@mui/icons-material/Calculate';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import CreateIcon from '@mui/icons-material/Create';
import PaletteIcon from '@mui/icons-material/Palette';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

const coursesData = [
  {
    id: 'tuition',
    icon: SchoolIcon,
    title: 'TUITION',
    subtitle: 'LKG to XII (All Subjects)',
    points: ['Concept Clarity', 'Homework Support', 'Exam Preparation'],
  },
  {
    id: 'abacus',
    icon: CalculateIcon,
    title: 'ABACUS',
    subtitle: 'Mental Maths & Concentration',
    points: ['Mental Maths', 'Faster Calculation', 'Improve Concentration', 'Memory Power'],
  },
  {
    id: 'phonics',
    icon: RecordVoiceOverIcon,
    title: 'PHONICS',
    subtitle: 'ENGLISH & TAMIL',
    points: ['Reading Skills', 'Pronunciation', 'Vocabulary', 'Confidence Building'],
  },
  {
    id: 'handwriting',
    icon: CreateIcon,
    title: 'HAND WRITING',
    subtitle: 'Cursive & Print Speed',
    points: ['Neat Writing', 'Better Speed', 'Good Presentation', 'Builds Confidence'],
  },
  {
    id: 'drawing',
    icon: PaletteIcon,
    title: 'DRAWING CLASSES',
    subtitle: 'In Association With Zenarts Academy',
    points: ['Enhance Creativity', 'Fine Motor Skills', 'Colour Sense', 'Imagination'],
  },
  {
    id: 'yoga',
    icon: SelfImprovementIcon,
    title: 'YOGA',
    subtitle: '(FOR WOMEN ONLY)',
    points: ['Health & Wellness', 'Flexibility', 'Stress Relief', 'Inner Peace'],
  },
];

export default function Courses() {
  const handleKnowMore = (courseTitle) => {
    const contact = document.querySelector('#contact');
    if (contact) {
      const header = document.getElementById('main-header');
      const headerOffset = header ? header.offsetHeight : 80;
      const elementPosition = contact.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      id="courses"
      sx={{
        backgroundColor: '#FFFFFF',
        py: { xs: 6, sm: 8, md: 10 },
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6 } }}>
          <Chip
            label="OUR COURSES"
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
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '2.8rem' },
              fontWeight: 800,
              mb: 1,
            }}
          >
            Explore. Learn. Excel.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#4A5568',
              maxWidth: '640px',
              mx: 'auto',
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
            }}
          >
            A wide range of programs designed to bring out the best in every student.
          </Typography>
        </Box>

        {/* 6 Cards Grid */}
        <Grid container spacing={{ xs: 2.5, sm: 3, md: 3.5 }}>
          {coursesData.map((course) => {
            const Icon = course.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={course.id}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(16, 27, 51, 0.08)',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      borderColor: '#1E9457',
                      transform: 'translateY(-6px)',
                      boxShadow: '0 14px 35px rgba(30, 148, 87, 0.12)',
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 2.5, sm: 3 },
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      textAlign: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {/* Icon Box */}
                    <Box
                      sx={{
                        width: 54,
                        height: 54,
                        borderRadius: '14px',
                        backgroundColor: 'rgba(30, 148, 87, 0.1)',
                        color: '#1E9457',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <Icon sx={{ fontSize: 30 }} />
                    </Box>

                    {/* Title & Subtitle */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: '#101B33',
                        mb: 0.5,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {course.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#1E9457',
                        fontWeight: 700,
                        fontSize: '0.78rem',
                        mb: 2,
                        display: 'block',
                      }}
                    >
                      {course.subtitle}
                    </Typography>

                    {/* Bullet Points */}
                    <List disablePadding sx={{ width: '100%', mb: 3, textAlign: 'left' }}>
                      {course.points.map((pt, idx) => (
                        <ListItem key={idx} disableGutters sx={{ py: 0.3, px: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 24, color: '#1E9457' }}>
                            <CheckCircleOutlinedIcon sx={{ fontSize: 16 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={pt}
                            primaryTypographyProps={{
                              fontSize: '0.84rem',
                              color: '#4A5568',
                              fontWeight: 500,
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    {/* Know More Outlined Button */}
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleKnowMore(course.title)}
                      sx={{
                        mt: 'auto',
                        width: '80%',
                        borderRadius: '20px',
                        py: 0.8,
                        fontSize: '0.84rem',
                        fontWeight: 700,
                        borderColor: 'rgba(16, 27, 51, 0.25)',
                        color: '#101B33',
                        '&:hover': {
                          borderColor: '#1E9457',
                          backgroundColor: '#1E9457',
                          color: '#FFFFFF',
                        },
                      }}
                    >
                      Know More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
