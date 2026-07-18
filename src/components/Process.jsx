import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import CoPresentOutlinedIcon from '@mui/icons-material/CoPresentOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

const stepsData = [
  {
    icon: ArticleOutlinedIcon,
    title: 'Admission',
    desc: 'Understand student needs and goals',
  },
  {
    icon: FactCheckOutlinedIcon,
    title: 'Assessment',
    desc: 'Evaluate learning levels and skills',
  },
  {
    icon: LocalLibraryOutlinedIcon,
    title: 'Personal Learning Plan',
    desc: 'Customized plan for each student',
  },
  {
    icon: CoPresentOutlinedIcon,
    title: 'Regular Classes',
    desc: 'Concept based interactive learning',
  },
  {
    icon: QueryStatsOutlinedIcon,
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
        backgroundColor: '#FFFFFF',
        py: { xs: 5, sm: 7, md: 9 },
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6, md: 7 } }}>
          {/* Green Subtitle Tag */}
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
            OUR TEACHING PROCESS
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
                top: 34,
                left: '8%',
                right: '8%',
                height: 2,
                borderTop: '2px dashed #1E9457',
                zIndex: 0,
                opacity: 0.4,
              }}
            />
          )}

          <Grid container spacing={{ xs: 2.5, sm: 3, md: 2 }} alignItems="flex-start">
            {stepsData.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Grid item xs={6} sm={4} md={2} key={idx}>
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
                    {/* Double Ring Circle Icon Badge */}
                    <Box
                      sx={{
                        width: { xs: 60, sm: 68 },
                        height: { xs: 60, sm: 68 },
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        border: '2px solid #1E9457',
                        outline: '4px solid rgba(30, 148, 87, 0.1)',
                        color: '#1E9457',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 6px 18px rgba(30, 148, 87, 0.12)',
                        mb: 1.8,
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          backgroundColor: '#1E9457',
                          color: '#FFFFFF',
                          transform: 'scale(1.08)',
                          outline: '6px solid rgba(30, 148, 87, 0.2)',
                        },
                      }}
                    >
                      <Icon sx={{ fontSize: { xs: 26, sm: 30 } }} />
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '0.88rem', sm: '0.95rem' },
                        fontWeight: 800,
                        color: '#101B33',
                        mb: 0.6,
                        lineHeight: 1.25,
                      }}
                    >
                      {step.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '0.74rem', sm: '0.78rem' },
                        color: '#4A5568',
                        lineHeight: 1.35,
                        maxWidth: 170,
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
