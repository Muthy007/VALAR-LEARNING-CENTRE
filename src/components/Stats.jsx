import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

const statsData = [
  {
    icon: SchoolOutlinedIcon,
    numericValue: 500,
    suffix: '+',
    label: 'Happy Students',
  },
  {
    icon: MenuBookOutlinedIcon,
    numericValue: 15,
    suffix: '+',
    label: 'Courses',
  },
  {
    icon: PersonOutlinedIcon,
    numericValue: 10,
    suffix: '+',
    label: 'Experienced Faculty',
  },
  {
    icon: ThumbUpOutlinedIcon,
    numericValue: 95,
    suffix: '%',
    label: 'Parent Satisfaction',
  },
];

function CountUpItem({ icon: Icon, numericValue, suffix, label, hasTriggered, isLast }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!hasTriggered) return;

    let start = 0;
    const end = numericValue;
    const duration = 1800; // 1.8 seconds animation
    const increment = Math.ceil(end / (duration / 25));
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [hasTriggered, numericValue]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: { xs: 1.5, sm: 2.5 },
        justifyContent: { xs: 'flex-start', sm: 'center' },
        borderRight: {
          xs: 'none',
          md: !isLast ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
        },
        pr: { md: 2 },
      }}
    >
      <Box
        sx={{
          width: { xs: 44, sm: 54 },
          height: { xs: 44, sm: 54 },
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
        <Icon sx={{ fontSize: { xs: 24, sm: 30 } }} />
      </Box>

      <Box>
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '1.6rem', sm: '2.1rem', md: '2.4rem' },
            fontWeight: 900,
            lineHeight: 1.05,
            color: '#FFFFFF',
          }}
        >
          {count}
          {suffix}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: '0.78rem', sm: '0.86rem' },
            color: 'rgba(255, 255, 255, 0.82)',
            fontWeight: 500,
            mt: 0.3,
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Stats() {
  const containerRef = useRef(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Box ref={containerRef} sx={{ py: { xs: 4, sm: 5 }, backgroundColor: '#F8F9FB' }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: '#101B33',
            color: '#FFFFFF',
            borderRadius: { xs: '24px', md: '30px' },
            py: { xs: 3.5, sm: 4.5, md: 5 },
            px: { xs: 2.5, sm: 4, md: 6 },
            boxShadow: '0 16px 40px rgba(16, 27, 51, 0.22)',
          }}
        >
          <Grid container spacing={{ xs: 3, sm: 3, md: 4 }} alignItems="center">
            {statsData.map((stat, idx) => (
              <Grid item xs={6} md={3} key={idx}>
                <CountUpItem
                  icon={stat.icon}
                  numericValue={stat.numericValue}
                  suffix={stat.suffix}
                  label={stat.label}
                  hasTriggered={hasTriggered}
                  isLast={idx === statsData.length - 1}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
