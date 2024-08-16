

// export default Watering;
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { green } from '@mui/material/colors';
import axios from 'axios';

const images = [
    {
      id: 1,
      title: "Soil Moisture Sensors",
      description:
        "These sensors measure the moisture content in the soil and adjust watering schedules accordingly.",
      imgSrc: "https://tse2.mm.bing.net/th?id=OIP.UcAh9QvnCFSTV9yK_goCfAHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 2,
      title: "Weather-Based Controllers",
      description:
        "These systems use local weather data to adjust irrigation schedules.",
      imgSrc: "https://tse2.mm.bing.net/th?id=OIP.4lhX34vO4yhpew6pnJtT9QHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 3,
      title: "Precision Drip Systems",
      description:
        "Deliver water directly to the plant roots, minimizing evaporation and runoff.",
      imgSrc: "https://tse4.mm.bing.net/th?id=OIP.qRdK7xPSm3nHrm2jtTLXzgHaDt&pid=Api&P=0&h=180",
    },
    {
      id: 4,
      title: "Rainwater Harvesting",
      description:
        "Collecting and storing rainwater for irrigation helps conserve water.",
      imgSrc: "https://tse3.mm.bing.net/th?id=OIP.rwWiE5dP5YeMUpiKKt6N_gHaEo&pid=Api&P=0&h=180",
    },
    {
      id: 5,
      title: "Hydroponic Systems",
      description:
        "Grow plants in a nutrient-rich water solution, eliminating the need for soil.",
      imgSrc: "https://tse3.mm.bing.net/th?id=OIP.YZwnWUvRO2t2KPoSIekHHgHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 6,
      title: "Drones for Monitoring",
      description:
        "Drones equipped with sensors and cameras can monitor plant health.",
      imgSrc: "https://tse1.mm.bing.net/th?id=OIP.T1Eif3gGv-yEUTR29lLufQHaD2&pid=Api&P=0&h=180",
    },
  ];

const Watering = () => {
  const [alertMessage, setAlertMessage] = useState("");

  const sendEmail = (message) => {
    const emailData = {
      name: 'Home Garden Emporium',
      scheduleTime: message,
    };

    axios.post('http://localhost:3001/send-email', emailData)
      .then((response) => {
        console.log('Email sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  useEffect(() => {
    const checkTimeForAlert = () => {
      const now = new Date();
      const hour = now.getHours();

      if (hour >= 6 && hour < 9) {
        const message = "Good morning! It's time to check your plant's watering schedule.";
        setAlertMessage(message);
        sendEmail(message);
      } else if (hour >= 14 && hour < 18) {
        const message = "Good evening! Time to check your plant's watering schedule.";
        setAlertMessage(message);
        sendEmail(message);
      } else {
        setAlertMessage(""); // Clear alert outside the specified times
      }
    };

    checkTimeForAlert();
    const interval = setInterval(checkTimeForAlert, 3600000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundImage: 'url("https://i.pinimg.com/originals/18/ab/83/18ab83b13a8f1802a8500b8ed6596dc8.gif")', backgroundSize: 'cover', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ bgcolor: green[600] }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Smart Irrigation System
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        {alertMessage && <Alert severity="info">{alertMessage}</Alert>}

        <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 4 }}>
          Advanced Watering Technologies
        </Typography>

        <Grid container spacing={4}>
          {images.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={image.imgSrc}
                  alt={image.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {image.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {image.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: green[600], p: 6, mt: 4 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" paragraph>
          Email: <a href="mailto:support@example.com" style={{ color: 'white' }}>support@example.com</a>
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" paragraph>
          Instagram: <a href="https://instagram.com/example" style={{ color: 'white' }}>@example</a>
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" paragraph>
          Facebook: <a href="https://facebook.com/example" style={{ color: 'white' }}>Facebook Page</a>
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" paragraph>
          WhatsApp: <a href="https://wa.me/1234567890" style={{ color: 'white' }}>+1234567890</a>
        </Typography>
      </Box>
    </div>
  );
};

export default Watering;
