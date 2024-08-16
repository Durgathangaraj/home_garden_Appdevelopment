import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  InputBase,
  Menu,
  List,
  Link,
  ListItem,
  ListItemText,
  MenuItem,
  Box,
  CssBaseline,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';

const plantCategories = [
  {
    title: 'House Plants',
    description:
      'Learn how to care for a variety of houseplants, including watering, lighting, and soil requirements.',
    image: 'https://tse4.mm.bing.net/th?id=OIP.ejcdOSABsyitf0g--WI_dAHaE8&pid=Api&P=0&h=180',
    subcategories: [
      {
        name: 'African Violet',
        description:
          'African Violets are small houseplants known for their beautiful blooms. They require bright, indirect light and careful watering.',
        image: 'https://tse4.mm.bing.net/th?id=OIP.cMTAy1JzM5m4g1EkozHnrgHaE7&pid=Api&P=0&h=180',
      },
      {
        name: 'Monstera',
        description:
          'Monstera is a tropical plant known for its large, split leaves. It thrives in bright, indirect light and needs occasional watering.',
        image: 'https://tse3.mm.bing.net/th?id=OIP.vlp1QzQ2Nh9MMiql_LC9VQHaE8&pid=Api&P=0&h=180',
      },
      {
        name: 'Spider Plant',
        description:
          'Spider Plants are easy-to-grow houseplants with arching leaves. They prefer bright, indirect light and moderate watering.',
        image: 'https://tse2.mm.bing.net/th?id=OIP.rlak7A1xbSpGH4jXUgH4_QHaE8&pid=Api&P=0&h=180',
      },
    ],
  },
  {
    title: 'Growing Tips',
    description:
      'Explore various tips for successful plant growth, including soil preparation, watering techniques, and companion planting.',
    image: 'https://tse4.mm.bing.net/th?id=OIP.WX-5U69D-6DAnqi9l3iY5gHaHa&pid=Api&P=0&h=180',
    subcategories: [
      {
        name: 'Epsom Salt',
        description:
          'Epsom salt can be used to improve nutrient uptake in plants. It is especially beneficial for tomatoes and peppers.',
        image: 'https://tse3.mm.bing.net/th?id=OIP.K4Db0RdXVY7JXTQ5CG--LgHaE8&pid=Api&P=0&h=180',
      },
      {
        name: 'Mulch',
        description:
          'Mulching helps retain soil moisture and suppress weeds. Use organic mulch for best results.',
        image: 'https://tse3.mm.bing.net/th?id=OIP.uppix-WsA7szxBO2zP6OXAHaE9&pid=Api&P=0&h=180',
      },
      {
        name: 'Garden Friends',
        description:
          'Encourage beneficial insects in your garden to help control pests naturally. Ladybugs and bees are excellent garden allies.',
        image: 'https://tse1.mm.bing.net/th?id=OIP.vtEBW3t-jNaNNabg9JZVbwHaEy&pid=Api&P=0&h=180',
      },
    ],
  },
  {
    title: 'Pests and Diseases',
    description:
      'Identify and manage common plant pests and diseases to keep your plants healthy and thriving.',
    image: 'https://tse4.mm.bing.net/th?id=OIP.LGvZK2Unz4lAdP8jWBYj-AHaFF&pid=Api&P=0&h=180',
    subcategories: [
      {
        name: 'Aphids',
        description:
          'Aphids are small sap-sucking insects that can damage plants. Use insecticidal soap or neem oil for control.',
        image: 'https://tse2.mm.bing.net/th?id=OIP.Qn3xMVpYLQCWQW6u8eoqgwHaCz&pid=Api&P=0&h=180',
      },
      {
        name: 'Mealybugs',
        description:
          'Mealybugs are soft-bodied insects that feed on plant sap. Remove them with a cotton swab dipped in alcohol.',
        image: 'https://gardenerspath.com/wp-content/uploads/2021/05/How-to-Identify-and-Control-Mealybugs-Cover.jpg',
      },
      {
        name: 'Powdery Mildew',
        description:
          'Powdery mildew is a fungal disease that appears as a white powdery coating on leaves. Improve air circulation and apply fungicide if necessary.',
        image: 'https://tse1.mm.bing.net/th?id=OIP.Uf1pWzSTFtkpc4lxtxolggHaD4&pid=Api&P=0&h=180',
      },
    ],
  },
  {
    title: 'Plant Care Tips',
    description:
      'Discover essential tips for maintaining healthy and thriving plants, from watering and fertilizing to pruning and repotting.',
    image: 'https://tse1.mm.bing.net/th?id=OIP.JTo4KZCV6S7_hdlH7h-5EAHaEK&pid=Api&P=0&h=180',
    subcategories: [
      {
        name: 'Watering',
        description:
          'Proper watering is crucial for plant health. Overwatering can lead to root rot, while underwatering can cause wilting. Know your plant’s specific needs.',
        image: 'https://tse4.mm.bing.net/th?id=OIP.HMStq040BpA6LuLefWHfqQHaE8&pid=Api&P=0&h=180',
      },
      {
        name: 'Fertilizing',
        description:
          'Regular fertilization provides essential nutrients to your plants. Use a balanced fertilizer during the growing season for best results.',
        image: 'https://tse3.mm.bing.net/th?id=OIP.uxCCRttZLXW92qiGrlKoIQHaE8&pid=Api&P=0&h=180',
      },
      {
        name: 'Pruning',
        description:
          'Pruning helps maintain plant shape and encourages new growth. Remove dead or diseased branches regularly.',
        image: 'https://tse3.mm.bing.net/th?id=OIP.cCl-wuLX38f_47bsvfh7mwAAAA&pid=Api&P=0&h=180',
      },
      {
        name: 'Repotting',
        description:
          'Repotting gives plants fresh soil and more room to grow. Look for signs like roots growing out of the drainage holes.',
        image: 'https://tse3.mm.bing.net/th?id=OIP.lYaAA9Yg8aqKo2kqqM5klAHaEP&pid=Api&P=0&h=180',
      },
    ],
  },
];

// Custom styles for the search bar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

// Custom styles for the search icon wrapper
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Custom styles for the input base of the search bar
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function PlantCare() {
  // State for managing the anchor element of the dropdown menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Function to handle opening the dropdown menu
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to handle closing the dropdown menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url(https://wallpapercave.com/wp/wp2945419.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: 'rgba(0, 50, 0, 0.8)'}}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>House Plants</MenuItem>
            <MenuItem onClick={handleClose}>Growing Tips</MenuItem>
            <MenuItem onClick={handleClose}>Pests and Diseases</MenuItem>
            <MenuItem onClick={handleClose}>Plant Care Tips</MenuItem>
          </Menu>
          <Typography variant="h6" component="div"    sx={{ flexGrow: 1 }}>
            Plant Care Guide
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 4, paddingBottom: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ color: 'white' }}>
          Plant Care Guide
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: 'white' }}>
          There are many plants we love to grow, care for, and even eat! Plants come in all shapes and sizes. Some with blooms, others with attractive foliage, and others with unique forms.
          With hundreds of articles at plantcaretoday.com, we’ve provided some quick links to help you get started finding your plant care area of interest.
        </Typography>

        <Grid container spacing={4}>
          {plantCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={category.title}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 2,
                  backgroundColor: index % 2 === 0 ? 'rgba(255, 255, 255, 0.8)' : 'rgba(230, 230, 250, 0.8)',
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={category.image}
                  alt={category.title}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: 'darkslateblue' }}>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {category.description}
                  </Typography>

                  {category.subcategories.map((subcat) => (
                    <Accordion key={subcat.name} sx={{ marginBottom: 1 }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1" sx={{ color: 'darkgreen' }}>{subcat.name}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <CardMedia
                          component="img"
                          height="100"
                          image={subcat.image}
                          alt={subcat.name}
                        />
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {subcat.description}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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
    </Box>
  );
}

export default PlantCare;
