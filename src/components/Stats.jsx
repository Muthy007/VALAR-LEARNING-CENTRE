import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const statsData = [
  {
    icon: GroupsIcon,
    numericValue: 500,
    suffix: '+',
    label: 'Happy Students',
  },
  {
    icon: AutoStoriesIcon,
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
    icon: ThumbUpIcon,
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
        gap: { xs: 1.5, sm: 2, md: 2.5 },
        justifyContent: 'center',
        borderRight: {
          xs: 'none',
          md: !isLast ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
        },
      }}
    >
      {/* Large Solid Green Icon */}
      <Box
        sx={{
          color: '#1E9457',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon sx={{ fontSize: { xs: 40, sm: 48, md: 54 } }} />
      </Box>

      {/* Number and Label */}
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '1.75rem', sm: '2.3rem', md: '2.7rem' },
            fontWeight: 900,
            lineHeight: 1,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
          }}
        >
          {count}
          {suffix}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: '0.78rem', sm: '0.88rem' },
            color: 'rgba(255, 255, 255, 0.85)',
            fontWeight: 500,
            mt: 0.4,
            whiteSpace: 'nowrap',
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
      { threshold: 0.25 }
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
    <Box
      ref={containerRef}
      sx={{
        backgroundColor: '#101B33',
        color: '#FFFFFF',
        py: { xs: 3.5, sm: 4, md: 4.5 },
        px: { xs: 3, sm: 4, md: 6, lg: 10 },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: { xs: 3, sm: 3, md: 2 },
        }}
      >
        {statsData.map((stat, idx) => (
          <CountUpItem
            key={idx}
            icon={stat.icon}
            numericValue={stat.numericValue}
            suffix={stat.suffix}
            label={stat.label}
            hasTriggered={hasTriggered}
            isLast={idx === statsData.length - 1}
          />
        ))}
      </Box>
    </Box>
  );
}
