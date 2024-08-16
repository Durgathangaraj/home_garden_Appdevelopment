import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Card,
  CardMedia,
  CardContent,
} 
from '@mui/material';

function AboutUsPage() {
  return (
    <div style={{ backgroundImage: 'url(https://moellerip.com/wp-content/uploads/2021/07/bigstock-Development-Of-Seedling-Growth-274172959.jpg)', backgroundSize: 'cover', minHeight: '100vh', color: 'white' }}>
      <AppBar position="static" style={{ backgroundColor: 'rgba(0, 100, 0, 0.8)' }}>
        <Toolbar>
          <Typography variant="h6">Home Garden Emporium</Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Box py={8}>
          <Typography variant="h3" gutterBottom>
            About Us
          </Typography>

          {/* Image and Description */}
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  image="https://nurserylive.com/cdn/shop/collections/c9cb804384a431392eb3d2a53bd8074c-798576_404x404.jpg?v=1681381567"
                  alt="Who We Are"
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Who We Are
              </Typography>
              <Typography variant="h6" paragraph>
                We are Home Garden Emporium, your dedicated partner in creating beautiful and thriving gardens. Established with a passion for horticulture, we provide an extensive range of plants, garden tools, and accessories designed to bring nature closer to your home. Our journey began with a single goal: to make gardening accessible and enjoyable for everyone. Over the years, we have grown into a leading name in the industry, driven by our commitment to quality and customer satisfaction.
              </Typography>
              <Typography variant="h6" paragraph>
                With a team of experienced horticulturists and garden enthusiasts, we pride ourselves on offering personalized advice and top-notch products tailored to your unique gardening needs. Whether you're a seasoned gardener or just starting out, Home Garden Emporium is here to help you cultivate your green paradise.
              </Typography>
            </Grid>
          </Grid>

          {/* Vision and Mission */}
          <Box py={4}>
            <Typography variant="h5" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="h6" paragraph>
              To be the most trusted and innovative name in gardening solutions, renowned for our exceptional products and services that inspire and support our customers in creating beautiful, sustainable outdoor spaces.
            </Typography>

            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="h6" paragraph>
              Wow every customer every time through premium products, outstanding service, and a commitment to delivering value through innovation, technology, and a people-first approach. Our mission is to enhance your gardening experience by providing high-quality solutions that meet your needs and exceed your expectations.
            </Typography>
          </Box>

          {/* Core Values */}
          <Typography variant="h5" gutterBottom>
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Character</Typography>
                  <Typography variant="body2" paragraph>
                    Trustworthiness, Commitment, Integrity, Ethics, Fair-play, Compliance, Transparency, Persistence, Ownership, Finishing to the end, Doing the most difficult task first
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Compassion</Typography>
                  <Typography variant="body2" paragraph>
                    Empathy, Respect, Gratitude, Inclusiveness
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Customer Centric</Typography>
                  <Typography variant="body2" paragraph>
                    Customer (External as well as Internal i.e. Employees & Partners), Responsiveness, Pro-Feedback, Accountability
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Collective Growth</Typography>
                  <Typography variant="body2" paragraph>
                    Profitability, Cost-consciousness, Inclusiveness, Sustainability, Community service, Social Responsibility
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Continuous Transformation</Typography>
                  <Typography variant="body2" paragraph>
                    Experiment, Innovation, Continuous Improvement, Curiosity, Sharing & seeking knowledge, Collaboration, Being Devil's advocate, Introspection, Resilience, Agility, Adaptability, Diversity
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Achievements */}
          <Box py={4}>
            <Typography variant="h5" gutterBottom>
              Our Achievements
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="2012: Best e-Store of the Year by International Institute of Fashion Design (IIFD)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2012: Most Admired Retailer of the Year in Leisure Category by Images Retail Group" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2013: Internet E-retailer of the Year by Asia Retail Congress (ET NOW- Award for Retail Excellence 2013)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2013: Specialty e-Retailer of the Year by Franchise India (Indian e-Retail Award 2013)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2013: Mr. Vikaas Gutgutia, Founder and MD, Ferns N Petals Pvt. Ltd was chosen as one of the Inspirational Leaders of New India and Ferns N Petals is listed in Indian Power Brands by Planman Media" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2014: Specialty e-Retailer of the Year by Franchise India Group" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2015: Ferns N Petals gets Delhi NCR 50 Hot Brands Award" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2015: FNP Weddings & Events was honoured with an Appreciation Award at Lagan Mandap Awards" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2016: FNP Weddings & Events bags Floral Designer of the Year Award presented by EEMA" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2016: FNP Weddings & Events wins Silver for its Decor / Ambient Design in WOW Awards" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2016: Ferns N Petals gets Business Leadership Award at International Franchise & Retail Show and Award" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2017: Vilasa wins 'Exquisitely Designed Wedding Venue Award' at the Ravishing Design Awards" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2017: The Ritz bags Silver in Best Venue Category presented by EEMA" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2018: Wedding Design Hub wins Gold in 'Best Production House (Weddings)' Category at Spotlight Awards" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2019: Ferns N Petals has been ranked amongst the Top 100 Franchise Opportunities" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2019: Ferns N Petals has been honoured with Future of Workplace & Leadership Award" />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>

      <footer style={{ backgroundColor: 'rgba(0, 50, 0, 0.8)', color: 'white', padding: '2rem' }}>
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
                  <Link href="/" color="inherit">Home</Link>
                </ListItem>
                <ListItem>
                  <Link href="/products" color="inherit">Products</Link>
                </ListItem>
                <ListItem>
                  <Link href="/contact" color="inherit">Contact</Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Follow Us</Typography>
              <List>
                <ListItem>
                  <Link href="https://facebook.com" color="inherit">Facebook</Link>
                </ListItem>
                <ListItem>
                  <Link href="https://twitter.com" color="inherit">Twitter</Link>
                </ListItem>
                <ListItem>
                  <Link href="https://instagram.com" color="inherit">Instagram</Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Typography variant="body2" align="center" style={{ marginTop: '2rem' }}>
            © 2024 Home Garden Emporium. All rights reserved.
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

export default AboutUsPage;
