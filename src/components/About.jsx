import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import valarBuildingImg from '../assets/valar_building.png';

const aboutCards = [
  {
    icon: VisibilityOutlinedIcon,
    title: 'Our Vision',
    text: 'To be a trusted learning partner that empowers students to achieve excellence in academics and in life.',
  },
  {
    icon: TrackChangesOutlinedIcon,
    title: 'Our Mission',
    text: 'To deliver quality education through innovative teaching methods, personal care and holistic development of every child.',
  },
  {
    icon: FavoriteBorderOutlinedIcon,
    title: 'Why VALAR?',
    text: 'We focus on concept clarity, individual attention, activity based learning and overall development of every student.',
  },
];

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: '#F8F9FB',
        py: { xs: 6, sm: 8, md: 10 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 6, lg: 8 }} alignItems="center">
          {/* Left Text & 3 Info Cards */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: { md: 580, lg: 620 } }}>
              <Chip
                label="ABOUT VALAR LEARNING CENTRE"
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
                  fontSize: { xs: '1.75rem', sm: '2.4rem', md: '2.8rem' },
                  fontWeight: 800,
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                Building Strong Foundations For A Bright Future
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#4A5568',
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.65,
                  mb: 4,
                }}
              >
                At VALAR Learning Centre, we believe every child is unique and has immense potential.
                Our mission is to provide a nurturing environment that builds confidence, creativity,
                and strong foundations through concept-based learning and personalized attention.
              </Typography>

              {/* 3 Cards Row */}
              <Grid container spacing={2}>
                {aboutCards.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Grid item xs={12} sm={4} key={index}>
                      <Card
                        elevation={0}
                        sx={{
                          height: '100%',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid rgba(16, 27, 51, 0.08)',
                          borderRadius: '16px',
                          p: 0.5,
                        }}
                      >
                        <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                          <Box
                            sx={{
                              width: 38,
                              height: 38,
                              borderRadius: '10px',
                              backgroundColor: 'rgba(30, 148, 87, 0.12)',
                              color: '#1E9457',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mb: 1.5,
                            }}
                          >
                            <Icon sx={{ fontSize: 22 }} />
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: '0.95rem',
                              fontWeight: 800,
                              color: '#101B33',
                              mb: 0.8,
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: '0.78rem',
                              color: '#4A5568',
                              lineHeight: 1.45,
                            }}
                          >
                            {item.text}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Grid>

          {/* Right Image with Doodle Decorations */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              {/* Playful Floating Doodles around image */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -20,
                  left: { xs: 10, md: 30 },
                  color: '#1E9457',
                  opacity: 0.8,
                }}
              >
                <MenuBookIcon sx={{ fontSize: 32 }} />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: 40,
                  right: { xs: 5, md: 20 },
                  color: '#101B33',
                  opacity: 0.6,
                }}
              >
                <AutoAwesomeIcon sx={{ fontSize: 28 }} />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -15,
                  right: { xs: 30, md: 60 },
                  color: '#1E9457',
                  opacity: 0.7,
                }}
              >
                <StarBorderIcon sx={{ fontSize: 32 }} />
              </Box>

              {/* Storefront / Building Photo */}
              <Box
                component="img"
                src={valarBuildingImg}
                alt="Valar Learning Centre Storefront Building"
                sx={{
                  width: '90%',
                  maxHeight: { xs: 320, sm: 440, md: 500 },
                  objectFit: 'cover',
                  borderRadius: { xs: '30px 100px 30px 30px', md: '40px 140px 40px 40px' },
                  boxShadow: '0 16px 45px rgba(16, 27, 51, 0.12)',
                  border: '4px solid #FFFFFF',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
