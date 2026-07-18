import React from 'react';
import { Box, Container, Typography, Grid, Avatar, Paper, Chip } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import FaceIcon from '@mui/icons-material/Face';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const features = [
  {
    num: '01',
    title: 'Experienced Faculty',
    description: 'Skilled educators dedicated to inspiring and mentoring every child.',
    icon: WorkspacePremiumIcon,
    bgColor: '#101B33',
    accentColor: '#1E9457',
  },
  {
    num: '02',
    title: 'Personal Attention',
    description: 'Small batch sizes to focus on each student’s unique growth speed.',
    icon: FaceIcon,
    bgColor: '#1E9457',
    accentColor: '#101B33',
  },
  {
    num: '03',
    title: 'Concept-Based Learning',
    description: 'Deep understanding over rote learning for lasting academic clarity.',
    icon: LightbulbIcon,
    bgColor: '#101B33',
    accentColor: '#1E9457',
  },
  {
    num: '04',
    title: 'Overall Development',
    description: 'Harmonizing academics, creative arts, confidence, and wellness.',
    icon: RocketLaunchIcon,
    bgColor: '#1E9457',
    accentColor: '#101B33',
  },
];

export default function Features() {
  return (
    <Box
      id="why-valar"
      sx={{
        py: { xs: 7, sm: 9, md: 11 },
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(16, 27, 51, 0.06)',
        borderBottom: '1px solid rgba(16, 27, 51, 0.06)',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 3 } }}>
        {/* Section Heading */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, sm: 7 } }}>
          <Chip
            label="WHY CHOOSE US"
            sx={{
              backgroundColor: 'rgba(16, 27, 51, 0.06)',
              color: '#101B33',
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
            Why Parents Trust Valar Learning Centre
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#4A5568',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '0.95rem', sm: '1.08rem' },
              lineHeight: 1.6,
            }}
          >
            We empower children in Poonamallee to excel academically, think critically, and grow into confident achievers.
          </Typography>
        </Box>

        {/* 4 Items in Responsive Grid: 2x2 on Mobile (xs=6), 4 in a row on Desktop (md=3) */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 3.5 }} alignItems="stretch">
          {features.map((feat) => {
            const IconComp = feat.icon;
            const isNavy = feat.bgColor === '#101B33';

            return (
              <Grid item xs={6} md={3} key={feat.num} style={{ display: 'flex' }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.2, sm: 3 },
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    borderRadius: 5,
                    backgroundColor: '#FBF9F4',
                    border: '1.5px solid rgba(16, 27, 51, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 16px 35px rgba(16, 27, 51, 0.1)',
                      borderColor: isNavy ? '#101B33' : '#1E9457',
                      backgroundColor: '#FFFFFF',
                    },
                  }}
                >


                  {/* Circular Icon Avatar */}
                  <Avatar
                    sx={{
                      width: { xs: 54, sm: 66 },
                      height: { xs: 54, sm: 66 },
                      backgroundColor: feat.bgColor,
                      color: '#FFFFFF',
                      mt: 1,
                      mb: 2,
                      boxShadow: isNavy
                        ? '0 6px 18px rgba(16, 27, 51, 0.25)'
                        : '0 6px 18px rgba(30, 148, 87, 0.3)',
                    }}
                  >
                    <IconComp sx={{ fontSize: { xs: 26, sm: 32 } }} />
                  </Avatar>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: '0.98rem', sm: '1.2rem' },
                      fontWeight: 800,
                      color: '#101B33',
                      mb: 1,
                      lineHeight: 1.25,
                    }}
                  >
                    {feat.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#4A5568',
                      fontSize: { xs: '0.78rem', sm: '0.9rem' },
                      lineHeight: 1.5,
                      mt: 'auto',
                    }}
                  >
                    {feat.description}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
