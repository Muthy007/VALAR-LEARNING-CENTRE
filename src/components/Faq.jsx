import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';

const faqs = [
  {
    question: 'What age groups are eligible for courses at Valar Learning Centre?',
    answer:
      'We offer courses for children aged 3 to 15 years. Tuitions are available for primary, middle, and high school students, while Phonics, Abacus, and Handwriting are tailored for early learners and school kids.',
  },
  {
    question: 'Where is the centre located in Poonamallee?',
    answer:
      'Our address is 7/46, First floor, Vaniyar Street, Near Meenu Apartment, Senneerkuppam, Poonamallee, Chennai - 600056. It is conveniently accessible with safe surroundings.',
  },
  {
    question: 'Are Zenarts Academy Drawing Classes suitable for beginners?',
    answer:
      'Yes! Our drawing classes with Zenarts Academy welcome beginners as well as kids with prior interest. We guide them step-by-step from fundamental shapes to shading and creative painting.',
  },
  {
    question: 'What subjects are covered under Tuitions?',
    answer:
      'We cover core academic subjects including Mathematics, Science, English, Tamil, and Social Studies for State Board & CBSE curricula with a focus on concept clarity and exam preparation.',
  },
  {
    question: 'Who can join the Yoga classes?',
    answer:
      'Our Yoga classes are exclusively for women. They are designed to improve health, flexibility, mental stress relief, and overall physical wellness.',
  },
  {
    question: 'How can I enroll my child or schedule a visit?',
    answer:
      'You can call us directly at +91 91502 81166 or visit our centre during working hours (Monday to Saturday, 9:00 AM – 7:30 PM). Our staff will assist you with batch timings and registration.',
  },
];

export default function Faq() {
  const [expanded, setExpanded] = useState('panel0');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 7, sm: 9, md: 11 },
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderTop: '1px solid rgba(16, 27, 51, 0.06)',
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2.5, sm: 3 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6 } }}>
          <Chip
            icon={<HelpOutlinedIcon sx={{ fontSize: '1rem', color: '#101B33 !important' }} />}
            label="FREQUENTLY ASKED QUESTIONS"
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
            Have Questions? We Have Answers.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#4A5568',
              fontSize: { xs: '0.95rem', sm: '1.08rem' },
            }}
          >
            Find quick answers to common queries about our courses, timings, and admissions.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map((faq, index) => {
            const panelId = `panel${index}`;
            const isSelected = expanded === panelId;

            return (
              <Accordion
                key={index}
                expanded={isSelected}
                onChange={handleChange(panelId)}
                elevation={0}
                sx={{
                  borderRadius: '16px !important',
                  border: isSelected
                    ? '1.5px solid #1E9457'
                    : '1.5px solid rgba(16, 27, 51, 0.08)',
                  backgroundColor: isSelected ? 'rgba(30, 148, 87, 0.03)' : '#FBF9F4',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&::before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: isSelected ? '#1E9457' : '#101B33' }} />}
                  sx={{
                    px: { xs: 2.5, sm: 3 },
                    py: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: isSelected ? '#1E9457' : '#101B33',
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: { xs: 2.5, sm: 3 }, pb: 2.5, pt: 0 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#4A5568',
                      fontSize: { xs: '0.9rem', sm: '0.98rem' },
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
