import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

const statsData = [
  {
    icon: SchoolOutlinedIcon,
    value: '500+',
    label: 'Happy Students',
  },
  {
    icon: MenuBookOutlinedIcon,
    value: '15+',
    label: 'Courses',
  },
  {
    icon: PersonOutlinedIcon,
    value: '10+',
    label: 'Experienced Faculty',
  },
  {
    icon: ThumbUpOutlinedIcon,
    value: '95%',
    label: 'Parent Satisfaction',
  },
];

export default function Stats() {
  return (
    <Box sx={{ py: { xs: 4, sm: 6 }, backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: '#101B33',
            color: '#FFFFFF',
            borderRadius: { xs: '24px', md: '32px' },
            py: { xs: 4, sm: 5, md: 6 },
            px: { xs: 2, sm: 4, md: 6 },
            boxShadow: '0 16px 40px rgba(16, 27, 51, 0.25)',
          }}
        >
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
            {statsData.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Grid item xs={6} md={3} key={idx}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: { xs: 1.5, sm: 2.5 },
                      justifyContent: { xs: 'flex-start', sm: 'center' },
                      borderRight: {
                        xs: 'none',
                        md: idx < 3 ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
                      },
                      pr: { md: 2 },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 46, sm: 58 },
                        height: { xs: 46, sm: 58 },
                        borderRadius: '16px',
                        backgroundColor: '#1E9457',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 6px 18px rgba(30, 148, 87, 0.35)',
                      }}
                    >
                      <Icon sx={{ fontSize: { xs: 26, sm: 34 } }} />
                    </Box>

                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.5rem' },
                          fontWeight: 900,
                          lineHeight: 1.05,
                          color: '#FFFFFF',
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: '0.78rem', sm: '0.9rem' },
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontWeight: 500,
                          mt: 0.2,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
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
