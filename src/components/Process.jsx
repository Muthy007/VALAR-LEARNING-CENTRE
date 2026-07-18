import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

const stepsData = [
  {
    icon: AssignmentIndOutlinedIcon,
    title: 'Admission',
    desc: 'Understand student needs and goals',
  },
  {
    icon: QuizOutlinedIcon,
    title: 'Assessment',
    desc: 'Evaluate learning levels and skills',
  },
  {
    icon: PsychologyOutlinedIcon,
    title: 'Personal Learning Plan',
    desc: 'Customized plan for each student',
  },
  {
    icon: SchoolOutlinedIcon,
    title: 'Regular Classes',
    desc: 'Concept based interactive learning',
  },
  {
    icon: AnalyticsOutlinedIcon,
    title: 'Weekly Review',
    desc: 'Track progress and provide feedback',
  },
  {
    icon: AssessmentOutlinedIcon,
    title: 'Monthly Report',
    desc: 'Updates shared with parents',
  },
];

export default function Process() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="process"
      sx={{
        backgroundColor: '#F8F9FB',
        py: { xs: 6, sm: 8, md: 10 },
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6, md: 8 } }}>
          <Chip
            label="OUR TEACHING PROCESS"
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
            A Journey Of Growth
          </Typography>
        </Box>

        {/* 6 Steps Timeline */}
        <Box sx={{ position: 'relative' }}>
          {/* Dashed Connecting Line for Desktop */}
          {!isMobile && (
            <Box
              sx={{
                position: 'absolute',
                top: 36,
                left: '8%',
                right: '8%',
                height: 2,
                borderTop: '2px dashed #1E9457',
                zIndex: 0,
                opacity: 0.4,
              }}
            />
          )}

          <Grid container spacing={{ xs: 3, sm: 4, md: 2 }} alignItems="flex-start">
            {stepsData.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Grid item xs={12} sm={6} md={2} key={idx}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {/* Circle Icon Badge */}
                    <Box
                      sx={{
                        width: 72,
                        height: 72,
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        border: '2px solid #1E9457',
                        color: '#1E9457',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 6px 20px rgba(30, 148, 87, 0.15)',
                        mb: 2,
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          backgroundColor: '#1E9457',
                          color: '#FFFFFF',
                          transform: 'scale(1.08)',
                        },
                      }}
                    >
                      <Icon sx={{ fontSize: 32 }} />
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '1rem', sm: '0.98rem' },
                        fontWeight: 800,
                        color: '#101B33',
                        mb: 0.8,
                        lineHeight: 1.25,
                      }}
                    >
                      {step.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '0.8rem',
                        color: '#4A5568',
                        lineHeight: 1.35,
                        maxWidth: 180,
                      }}
                    >
                      {step.desc}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
