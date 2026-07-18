import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import SpellcheckOutlinedIcon from '@mui/icons-material/SpellcheckOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';

const coursesData = [
  {
    id: 'tuition',
    icon: SchoolOutlinedIcon,
    title: 'TUITION',
    subtitle: 'LKG to XII (All Subjects)',
    points: ['Concept Clarity', 'Homework Support', 'Exam Preparation'],
  },
  {
    id: 'abacus',
    icon: CalculateOutlinedIcon,
    title: 'ABACUS',
    subtitle: 'Mental Maths & Concentration',
    points: ['Mental Maths', 'Faster Calculation', 'Improve Concentration', 'Memory Power'],
  },
  {
    id: 'phonics',
    icon: SpellcheckOutlinedIcon,
    title: 'PHONICS',
    subtitle: 'ENGLISH & TAMIL',
    points: ['Reading Skills', 'Pronunciation', 'Vocabulary', 'Confidence Building'],
  },
  {
    id: 'handwriting',
    icon: EditOutlinedIcon,
    title: 'HAND WRITING',
    subtitle: 'Cursive & Print Speed',
    points: ['Neat Writing', 'Better Speed', 'Good Presentation', 'Builds Confidence'],
  },
  {
    id: 'drawing',
    icon: PaletteOutlinedIcon,
    title: 'DRAWING CLASSES',
    subtitle: 'In Association With Zenarts Academy',
    points: ['Enhance Creativity', 'Fine Motor Skills', 'Colour Sense', 'Imagination'],
  },
  {
    id: 'yoga',
    icon: SelfImprovementOutlinedIcon,
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
        py: { xs: 5, sm: 7, md: 9 },
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Header Title & Subtitle */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5, md: 6 } }}>
          {/* Green Pill Tag */}
          <Typography
            variant="subtitle2"
            sx={{
              color: '#1E9457',
              fontWeight: 800,
              fontSize: { xs: '0.75rem', sm: '0.82rem' },
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            OUR COURSES
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              color: '#101B33',
              fontSize: { xs: '1.65rem', sm: '2.3rem', md: '2.7rem' },
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
              fontSize: { xs: '0.88rem', sm: '0.98rem' },
            }}
          >
            A wide range of programs designed to bring out the best in every student.
          </Typography>
        </Box>

        {/* 6 Cards Grid: 2 columns on Mobile (xs), 3 columns on Tablet (sm), 6 columns on Desktop (lg) */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              lg: 'repeat(6, 1fr)',
            },
            gap: { xs: 1.5, sm: 2, lg: 2.2 },
          }}
        >
          {coursesData.map((course) => {
            const Icon = course.icon;
            return (
              <Card
                key={course.id}
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E8EEF5',
                  borderRadius: '20px',
                  p: 0,
                  boxShadow: '0 4px 18px rgba(16, 27, 51, 0.03)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    borderColor: '#1E9457',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 30px rgba(30, 148, 87, 0.1)',
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: 1.8, sm: 2.2, lg: 2 },
                    '&:last-child': { pb: { xs: 1.8, sm: 2.2, lg: 2 } },
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    textAlign: 'center',
                    alignItems: 'center',
                  }}
                >
                  {/* Top Line Icon */}
                  <Box
                    sx={{
                      width: { xs: 44, sm: 52 },
                      height: { xs: 44, sm: 52 },
                      borderRadius: '14px',
                      backgroundColor: 'rgba(30, 148, 87, 0.08)',
                      color: '#1E9457',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 1.5,
                    }}
                  >
                    <Icon sx={{ fontSize: { xs: 26, sm: 30 } }} />
                  </Box>

                  {/* Course Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '0.88rem', sm: '1rem', lg: '0.95rem' },
                      fontWeight: 800,
                      color: '#101B33',
                      mb: 0.4,
                      letterSpacing: '0.01em',
                      lineHeight: 1.2,
                    }}
                  >
                    {course.title}
                  </Typography>

                  {/* Course Subtitle */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#1E9457',
                      fontWeight: 700,
                      fontSize: { xs: '0.68rem', sm: '0.72rem' },
                      mb: 1.8,
                      display: 'block',
                      minHeight: { xs: 28, sm: 32 },
                      lineHeight: 1.2,
                    }}
                  >
                    {course.subtitle}
                  </Typography>

                  {/* Bullet Points */}
                  <Box
                    component="ul"
                    sx={{
                      width: '100%',
                      p: 0,
                      m: 0,
                      mb: 2.5,
                      listStyleType: 'none',
                      textAlign: 'left',
                      flexGrow: 1,
                    }}
                  >
                    {course.points.map((pt, idx) => (
                      <Box
                        component="li"
                        key={idx}
                        sx={{
                          fontSize: { xs: '0.72rem', sm: '0.78rem' },
                          color: '#4A5568',
                          fontWeight: 500,
                          py: 0.3,
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 0.8,
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            color: '#1E9457',
                            fontWeight: 800,
                            fontSize: '0.75rem',
                            lineHeight: 1,
                            mt: '2px',
                          }}
                        >
                          •
                        </Box>
                        <span>{pt}</span>
                      </Box>
                    ))}
                  </Box>

                  {/* Know More Button */}
                  <Button
                    variant="outlined"
                    onClick={() => handleKnowMore(course.title)}
                    sx={{
                      mt: 'auto',
                      width: '100%',
                      borderRadius: '10px',
                      py: { xs: 0.5, sm: 0.7 },
                      fontSize: { xs: '0.72rem', sm: '0.78rem' },
                      fontWeight: 700,
                      borderColor: '#1E9457',
                      color: '#1E9457',
                      textTransform: 'none',
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
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
