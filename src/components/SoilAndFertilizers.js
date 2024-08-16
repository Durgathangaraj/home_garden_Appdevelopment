import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Drawer,
  List,
  Link,
  ListItem,
  ListItemText,
  IconButton,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Rating,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const products = [
  {
    category: 'Organic Soil',
    items: [
      {
        name: 'Potting Mix',
        description: 'Perfect for potted plants and container gardening.',
        price: 100,
        rating: 4,
        image:
          'https://tse4.explicit.bing.net/th?id=OIP.m0I_HNJLOZ7YuUQnyLKHOAHaE8&pid=Api&P=0&h=180',
      },
      {
        name: 'Compost',
        description: 'Rich organic material for nourishing your plants.',
        price: 120,
        rating: 5,
        image:
          'https://tse3.mm.bing.net/th?id=OIP.fewuhMBKstZouc8cTOgaegHaFj&pid=Api&P=0&h=180',
      },
      {
        name: 'Garden Soil',
        description: 'Enriched soil for enhancing your garden beds.',
        price: 90,
        rating: 3.5,
        image:
          'https://tse1.mm.bing.net/th?id=OIP.dEx5Uzy6DZ5kRs8kmjWisgHaHf&pid=Api&P=0&h=180',
      },
    ],
  },
  {
    category: 'Fertilizers',
    items: [
      {
        name: 'All-Purpose Fertilizer',
        description: 'Balanced nutrients for all types of plants.',
        price: 150,
        rating: 4.5,
        image:
          'https://tse2.mm.bing.net/th?id=OIP.iSTgoi_25BxXKeICBMYsKgHaEk&pid=Api&P=0&h=180',
      },
      {
        name: 'Liquid Fertilizer',
        description: 'Easy to apply and quickly absorbed by plants.',
        price: 130,
        rating: 4,
        image:
          'https://tse1.mm.bing.net/th?id=OIP.YzkBTzyuXo2205eOM68W5gHaE8&pid=Api&P=0&h=180',
      },
      {
        name: 'Slow-Release Fertilizer',
        description: 'Provides nutrients gradually over time.',
        price: 180,
        rating: 5,
        image:
          'https://tse1.mm.bing.net/th?id=OIP.8_xkLqHgxGhRkdfPDJT7MwHaFj&pid=Api&P=0&h=180',
      },
    ],
  },
  {
    category: 'Specialty Soils',
    items: [
      {
        name: 'Cactus Soil',
        description: 'Well-draining mix for cacti and succulents.',
        price: 80,
        rating: 4.5,
        image:
          'https://tse1.mm.bing.net/th?id=OIP.GLzEVuNnCQVabkiTqdcUcwHaFj&pid=Api&P=0&h=180',
      },
      {
        name: 'Orchid Mix',
        description: 'Special blend for orchids and other epiphytes.',
        price: 95,
        rating: 3.5,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.W_tEBxn4IGqJaGFFEp_i6AHaEc&pid=Api&P=0&h=180',
      },
      {
        name: 'Acidic Soil',
        description: 'Ideal for acid-loving plants like blueberries.',
        price: 110,
        rating: 4,
        image:
          'https://tse1.mm.bing.net/th?id=OIP.-NXWB_xdmloj8NrmlRn1agHaE9&pid=Api&P=0&h=180',
      },
    ],
  },
  {
    category: 'Organic Fertilizers',
    items: [
      {
        name: 'Bone Meal',
        description: 'High phosphorus content for root development.',
        price: 85,
        rating: 5,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.fF1I-Vh2AvX_8EIG389nLwHaHa&pid=Api&P=0&h=180',
      },
      {
        name: 'Blood Meal',
        description: 'Rich in nitrogen, perfect for leafy growth.',
        price: 95,
        rating: 4.5,
        image:
          'https://tse2.mm.bing.net/th?id=OIP.lpW-3OVI4qvoMJuYlNh7QAHaEl&pid=Api&P=0&h=180',
      },
      {
        name: 'Fish Emulsion',
        description: 'Liquid fertilizer for rapid plant growth.',
        price: 110,
        rating: 4,
        image:
          'https://tse1.mm.bing.net/th?id=OIP._X6Kwku3SjPNvZFsJHA40gHaHa&pid=Api&P=0&h=180',
      },
    ],
  },
  {
    category: 'Lawn Care',
    items: [
      {
        name: 'Lawn Fertilizer',
        description: 'Specially formulated for lush, green lawns.',
        price: 130,
        rating: 4,
        image:
          'https://tse3.mm.bing.net/th?id=OIP.sUPwVcIHLSa4OSaSH0mUlAHaE8&pid=Api&P=0&h=180',
      },
      {
        name: 'Weed & Feed',
        description: 'Nourishes your lawn while controlling weeds.',
        price: 140,
        rating: 4.5,
        image:
          'https://tse1.mm.bing.net/th?id=OIP.H22AkvXSuMMXSta1fWy-9gHaHa&pid=Api&P=0&h=180',
      },
      {
        name: 'Lawn Starter',
        description: 'Boosts new lawn growth with essential nutrients.',
        price: 160,
        rating: 3.5,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.s-MHx8gZQNDx7HTgupcu9wHaDh&pid=Api&P=0&h=180',
      },
    ],
  },
  {
    category: 'Hydroponic Nutrients',
    items: [
      {
        name: 'Basic Nutrient Solution',
        description: 'Essential nutrients for hydroponic systems.',
        price: 250,
        rating: 5,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.kF-dAcTcagH5rguzBAwAIQHaE8&pid=Api&P=0&h=180',
      },
      {
        name: 'Bloom Booster',
        description: 'Encourages flowering in hydroponic plants.',
        price: 270,
        rating: 4.5,
        image:
          'https://tse2.mm.bing.net/th?id=OIP.oHCUpcgWUy4O3HGfQ-IVBwHaHa&pid=Api&P=0&h=180',
      },
      {
        name: 'Micro Nutrient Pack',
        description: 'Supplemental nutrients for hydroponic systems.',
        price: 300,
        rating: 4,
        image:
          'https://tse1.mm.bing.net/th?id=OIP.bsNXAWj7Ye1-jFfb-DJ_QwAAAA&pid=Api&P=0&h=180',
      },
    ],
  },
];

function SoilAndFertilizers() {
  const [cart, setCart] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const updatedProducts = products.map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedCategory === 'All' || selectedCategory === category.category)
      ),
    }));

    setFilteredProducts(updatedProducts);
  }, [searchTerm, selectedCategory]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleOrderSubmit = () => {
    // You can handle order submission here (e.g., send data to a server)
    setIsDialogOpen(false);
    setCart([]);
    setCustomerName('');
    setCustomerEmail('');
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Container>
      <AppBar position="static" color="primary" style={{backgroundColor: 'rgba(0, 50, 0, 0.8)'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Soil & Fertilizers
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ marginRight: 2, backgroundColor: 'white' }}
            />
            <FormControl variant="outlined" size="small" sx={{ marginRight: 2 }}>
              <InputLabel id="category-select-label">Category</InputLabel>
              <Select
                labelId="category-select-label"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                label="Category"
                sx={{ backgroundColor: 'white' }}
              >
                <MenuItem value="All">All</MenuItem>
                {products.map((category) => (
                  <MenuItem key={category.category} value={category.category}>
                    {category.category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <IconButton
              color="inherit"
              aria-label="cart"
              onClick={toggleDrawer}
              sx={{ marginRight: 2 }}
            >
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: 2 }}>
        {filteredProducts.map(
          (category) =>
            category.items.length > 0 && (
              <Box key={category.category} sx={{ marginBottom: 4 }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                  {category.category}
                </Typography>
                <Slider dots={true} infinite={false} speed={500} slidesToShow={3} slidesToScroll={3}>
                  {category.items.map((product, index) => (
                    <Card key={index} sx={{ maxWidth: 345, marginRight: 2 }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={product.image}
                        alt={product.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.description}
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: 1 }}>
                          Price: ${product.price}
                        </Typography>
                        <Rating
                          name="product-rating"
                          value={product.rating}
                          precision={0.5}
                          readOnly
                          sx={{ marginTop: 1 }}
                        />
                        <Button
                          variant="contained"
                          style={{backgroundColor: 'rgba(0, 50, 0, 0.8)'}}
                          sx={{ marginTop: 1 }}
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </Slider>
              </Box>
            )
        )}
      </Box>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 2 }}>
            Shopping Cart
          </Typography>
          <List>
            {cart.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={item.name}
                  secondary={`Price: $${item.price}`}
                />
                <IconButton
                  edge="end"
                  aria-label="remove"
                  onClick={() => handleRemoveFromCart(index)}
                >
                  <CloseIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ padding: 2, textAlign: 'center' }}>
            <Typography variant="h6">Total: ${calculateTotalPrice()}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsDialogOpen(true)}
              sx={{ marginTop: 2 }}
              disabled={cart.length === 0}
            >
              Place Order
            </Button>
          </Box>
        </Box>
      </Drawer>

      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Place Your Order</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={handleOrderSubmit}
            variant="contained"
            color="primary"
            disabled={!customerName || !customerEmail}
          >
            Submit Order
          </Button>
        </DialogActions>
      </Dialog>
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
    </Container>
  );
}

export default SoilAndFertilizers;
