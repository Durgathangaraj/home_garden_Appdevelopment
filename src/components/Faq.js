import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Button
} from '@mui/material';
import { green } from '@mui/material/colors';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const faqs = [
  {
    question: 'What is Home Garden Emporium?',
    answer: 'Home Garden Emporium is your one-stop shop for all things related to home gardening, including plants, soil, fertilizers, and gardening tools.',
  },
  {
    question: 'How do I place an order?',
    answer: 'You can place an order through our website by adding items to your cart and proceeding to checkout. You can also contact us directly for personalized assistance.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Currently, we offer shipping within the country only. We are working on expanding our shipping options to international destinations.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of purchase, provided that the items are in their original condition. For more details, please refer to our Return Policy page.',
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can reach our customer support team via email at support@homegardenemporium.com or call us at +1 (234) 567-890.',
  },
];

const Faq = () => {
  return (
    <div style={{ 
      backgroundImage: 'url("https://cdn.wallpapersafari.com/20/6/zfLJul.jpg")', 
      
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      minHeight: '100vh', 
      paddingBottom: '4rem' 
    }}>
      <AppBar position="static" sx={{ bgcolor: green[600] }}
        style={{ backgroundColor: 'skyblue'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Floral Fantasy
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom align="center" sx={{ color: 'white', mb: 4 }}>
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={4}>
          {faqs.map((faq, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ mb: 2, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <CardHeader
                  title={faq.question}
                  action={
                    <IconButton aria-label="expand">
                      <ArrowDropDownIcon />
                    </IconButton>
                  }
                />
                <CardContent>
                  <Typography variant="body1">
                    {faq.answer}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </div>

      
  );
};

export default Faq;
