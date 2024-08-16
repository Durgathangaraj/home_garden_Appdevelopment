import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
  Link,
  TextField,
  Button,
  Grid,
  CssBaseline,
  Paper,
} from '@mui/material';
import { db } from '../firebase'; // Ensure this path is correct and that db is a Firestore instance
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; // Ensure these imports are correct

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      subject,
      message,
      timestamp: serverTimestamp(),
    };

    try {
      // Attempt to add the document to the Firestore collection
      await addDoc(collection(db, 'contacts'), contactData);
      alert('Message sent successfully!');
      // Clear the form fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      // Handle the error by displaying an alert and logging the error message
      alert('An error occurred while sending the message.');
      console.error('Error adding document:', error.message);
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://cdn.wallpapersafari.com/84/55/YZ6MjA.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingBottom: '4rem',
      }}
    >
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        {/* Header */}
        <AppBar position="static" style={{ backgroundColor: 'rgba(0, 50, 0, 0.8)' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Home Garden Emporium
            </Typography>
            {/* Add navigation buttons or logo here if needed */}
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Box
          component="main"
          sx={{ padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)', marginTop: 2 }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Get in Touch
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    multiline
                    rows={4}
                    label="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }}
                  >
                    Send
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
          <footer
            style={{
              backgroundColor: 'rgba(0, 50, 0, 0.8)',
              color: 'white',
              padding: '2rem',
            }}
          >
            <Container>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6">Contact Us</Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Email: contact@homegardenemporium.com" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Phone: +1 (234) 567-890" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6">Quick Links</Typography>
                  <List>
                    <ListItem>
                      <Link href="/" color="inherit">
                        Home
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="/products" color="inherit">
                        Products
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="/contact" color="inherit">
                        Contact
                      </Link>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6">Follow Us</Typography>
                  <List>
                    <ListItem>
                      <Link href="https://facebook.com" color="inherit">
                        Facebook
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="https://twitter.com" color="inherit">
                        Twitter
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="https://instagram.com" color="inherit">
                        Instagram
                      </Link>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Typography variant="body2" align="center" style={{ marginTop: '2rem' }}>
                © 2024 Home Garden Emporium. All rights reserved.
              </Typography>
            </Container>
          </footer>
        </Box>
      </Container>
    </div>
  );
};

export default ContactUs;
