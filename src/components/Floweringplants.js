// // import Floweringplants from './components/Floweringplants';

// import React, { useState, useEffect } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Box,
//   Drawer,
//   List,
//   Link,
//   ListItem,
//   ListItemText,
//   IconButton,
//   Badge,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Rating,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
// } from '@mui/material';

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import CloseIcon from '@mui/icons-material/Close';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';

// const products = [
//   {
//     category: 'Indoor Garden',
//     items: [
//       {
//         name: 'Peace Lily',
//         description: 'An easy-to-care-for plant that thrives indoors.',
//         price: 150,
//         rating: 4,
//         image:
//           'https://tse3.mm.bing.net/th?id=OIP.iHI04jh4Es7fikhtSBUTVQHaLI&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Snake Plant',
//         description: 'A hardy indoor plant that purifies air.',
//         price: 200,
//         rating: 5,
//         image:
//           'https://tse4.mm.bing.net/th?id=OIP.VsjL5J_cyPvJM1ZnMPCXGQHaJQ&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Fern',
//         description: 'Lush and vibrant, perfect for indoor settings.',
//         price: 180,
//         rating: 3.5,
//         image:
//           'https://www.thespruce.com/thmb/FHrfZqom-qXgu7dIhTMtwnT7lnI=/4281x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grow-organic-fiddlehead-ferns-2539638-hero-23c689cdd2b74f0c9e817cc6e710f0b8.jpg',
//       },
//     ],
//   },
//   {
//     category: 'Vertical Garden',
//     items: [
//       {
//         name: 'Wall Planters',
//         description: 'Perfect for creating a vertical garden on your wall.',
//         price: 500,
//         rating: 4.5,
//         image:
//           'https://tse2.mm.bing.net/th?id=OIP.Shfj1vmsSpSmraR7upUUnwHaHa&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Hanging Pots',
//         description: 'Ideal for hanging plants in small spaces.',
//         price: 300,
//         rating: 4,
//         image:
//           'https://tse3.mm.bing.net/th?id=OIP.SqQ5H-Sw_pKdwB82T41E0wHaKO&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Vertical Garden Kit',
//         description: 'Complete kit for starting a vertical garden.',
//         price: 600,
//         rating: 5,
//         image:
//           'https://tse4.mm.bing.net/th?id=OIP.rJXRr3DzMNSOD73mRvghWwHaLH&pid=Api&P=0&h=180',
//       },
//     ],
//   },
//   {
//     category: 'Miniature Gardens',
//     items: [
//       {
//         name: 'Bonsai Tree',
//         description: 'A small tree for indoor decoration.',
//         price: 450,
//         rating: 4.5,
//         image:
//           'https://tse4.mm.bing.net/th?id=OIP.FxGtOUg8tKKUjdszIKFmAAHaHa&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Fairy Garden Kit',
//         description: 'Create your own miniature garden scene.',
//         price: 250,
//         rating: 3.5,
//         image:
//           'https://tse4.mm.bing.net/th?id=OIP.Mrm5TuLxEgL-tVcE6_C1UwHaJ4&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Succulent Set',
//         description: 'A variety of small succulents for decoration.',
//         price: 350,
//         rating: 4,
//         image:
//           'https://tse4.mm.bing.net/th?id=OIP.H2G7NpnFYNVTpoYW9Kej6AHaHp&pid=Api&P=0&h=180',
//       },
//     ],
//   },
//   {
//     category: 'Air Purifying Plants Packs',
//     items: [
//       {
//         name: 'Air Purifying Pack 1',
//         description: 'Includes Spider Plant, Aloe Vera, and more.',
//         price: 400,
//         rating: 5,
//         image:
//           'https://tse4.mm.bing.net/th?id=OIP.riC09MnbZrqlPcawTWSaggHaHa&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Air Purifying Pack 2',
//         description: 'Includes Peace Lily, Bamboo Palm, and more.',
//         price: 450,
//         rating: 4.5,
//         image:
//           'https://tse3.mm.bing.net/th?id=OIP.Qa0-pYi60g6--swlrXdD_AHaJQ&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Air Purifying Pack 3',
//         description: 'Includes Snake Plant, Rubber Plant, and more.',
//         price: 500,
//         rating: 4,
//         image:
//           'https://tse2.mm.bing.net/th?id=OIP.YH5J4-akk54SXeaUhiMLbQHaJ4&pid=Api&P=0&h=180',
//       },
//     ],
//   },
//   {
//     category: 'Plants by Occasions',
//     items: [
//       {
//         name: 'Birthday Plant Gift',
//         description: 'Give a plant as a unique birthday gift.',
//         price: 350,
//         rating: 4,
//         image:
//           'https://tse4.mm.bing.net/th?id=OIP.EaFvSW8qts8lvjNQdJMlvwHaHa&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Anniversary Plant Gift',
//         description: 'Celebrate anniversaries with a living gift.',
//         price: 400,
//         rating: 4.5,
//         image:
//           'https://cdn.notonthehighstreet.com/fs/1f/23/68a3-6a1e-42ef-9eba-81764e6adfa0/original_personalised-crate-silver-wedding-anniversary.jpg',
//       },
//       {
//         name: 'Thank You Plant Gift',
//         description: 'Express gratitude with a thoughtful plant.',
//         price: 300,
//         rating: 3.5,
//         image:
//           'https://tse4.mm.bing.net/th?id=OIP.U84GZqpdubknAE9TGIrJdQAAAA&pid=Api&P=0&h=180',
//       },
//     ],
//   },
//   {
//     category: 'Flowering Plants',
//     items: [
//       {
//         name: 'Orchid',
//         description: 'A beautiful flowering plant that lasts long.',
//         price: 500,
//         rating: 5,
//         image:
//           'https://tse4.mm.bing.net/th?id=OIP.O9b-yDzRZn5HQU7xRrcG2QHaJQ&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Rose Plant',
//         description: 'Classic and elegant flowering plant.',
//         price: 400,
//         rating: 4.5,
//         image:
//           'https://tse4.mm.bing.net/th?id=OIP.ND1D6lAx3JccmsLM5o_0pgHaE8&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Lavender',
//         description: 'Fragrant and soothing flowering plant.',
//         price: 300,
//         rating: 4,
//         image:
//           'https://tse1.mm.bing.net/th?id=OIP.c62YSpbGZZMZqUpz4Nju4QHaE7&pid=Api&P=0&h=180',
//       },
//     ],
//   },
// ];

// function Floweringplants() {
//   const [cart, setCart] = useState([]);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [orderDialogOpen, setOrderDialogOpen] = useState(false);
//   const [address, setAddress] = useState('');
//   const [contact, setContact] = useState('');
//   const [selectedRating, setSelectedRating] = useState(0);
//   const [selectedPriceRange, setSelectedPriceRange] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState(products);

//   const toggleCart = () => setCartOpen(!cartOpen);

//   const handleAddToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   const handleRemoveFromCart = (product) => {
//     setCart(cart.filter((item) => item !== product));
//   };

//   const handleOrderDialogOpen = () => {
//     setOrderDialogOpen(true);
//   };

//   const handleOrderDialogClose = () => {
//     setOrderDialogOpen(false);
//   };

//   const handleOrderPlacement = () => {
//     // Handle order placement logic here
//     setCart([]);
//     handleOrderDialogClose();
//   };

//   const handleFilterChange = () => {
//     const filtered = products.map((category) => ({
//       ...category,
//       items: category.items.filter(
//         (item) =>
//           item.rating >= selectedRating &&
//           (!selectedPriceRange ||
//             (selectedPriceRange === 'low' && item.price < 300) ||
//             (selectedPriceRange === 'medium' &&
//               item.price >= 300 &&
//               item.price < 500) ||
//             (selectedPriceRange === 'high' && item.price >= 500))
//       ),
//     }));

//     setFilteredProducts(filtered);
//   };

//   useEffect(() => {
//     handleFilterChange();
//   }, [selectedRating, selectedPriceRange]);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
 
//     <Container>
//       <AppBar position="static" style={{ backgroundColor: 'rgba(0, 50, 0, 0.8)'}}>
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//          FloweringPlants
//           </Typography>
//           <IconButton
//             size="large"
//             aria-label="show cart items"
//             color="inherit"
//             onClick={toggleCart}
//           >
//             <Badge badgeContent={cart.length} color="error">
//               <ShoppingCartIcon />
//             </Badge>
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Box my={4}>
//         <Typography variant="h4" gutterBottom>
//           Explore Our Products
//         </Typography>

//         <Box mb={3} display="flex" justifyContent="space-between">
//           <FormControl variant="outlined" sx={{ minWidth: 120 }}>
//             <InputLabel>Rating</InputLabel>
//             <Select
//               value={selectedRating}
//               onChange={(e) => setSelectedRating(e.target.value)}
//               label="Rating"
//             >
//               <MenuItem value={0}>All</MenuItem>
//               <MenuItem value={3}>3 & Above</MenuItem>
//               <MenuItem value={4}>4 & Above</MenuItem>
//               <MenuItem value={5}>5</MenuItem>
//             </Select>
//           </FormControl>

//           <FormControl variant="outlined" sx={{ minWidth: 150 }}>
//             <InputLabel>Price Range</InputLabel>
//             <Select
//               value={selectedPriceRange}
//               onChange={(e) => setSelectedPriceRange(e.target.value)}
//               label="Price Range"
//             >
//               <MenuItem value="">All</MenuItem>
//               <MenuItem value="low">Below $300</MenuItem>
//               <MenuItem value="medium">$300 - $500</MenuItem>
//               <MenuItem value="high">Above $500</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>

//         <Slider {...settings}>
//           {filteredProducts.map((category) =>
//             category.items.map((item) => (
//               <Card key={item.name} sx={{ maxWidth: 345, m: 2 }}>
//                 <CardMedia
//                   component="img"
//                   alt={item.name}
//                   height="140"
//                   image={item.image}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {item.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {item.description}
//                   </Typography>
//                   <Typography variant="h6" color="text.primary" sx={{ mt: 1 }}>
//                     ${item.price}
//                   </Typography>
//                   <Rating value={item.rating} readOnly />
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     sx={{ mt: 1 }}
//                     onClick={() => handleAddToCart(item)}
//                     style={{ backgroundColor: "green"}}
//                   >
//                     Add to Cart
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))
//           )}
//         </Slider>
//       </Box>

//       <Drawer anchor="right" open={cartOpen} onClose={toggleCart}>
//         <Box sx={{ width: 350 }}>
//           <List>
//             {cart.map((item, index) => (
//               <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <ListItemText
//                   primary={item.name}
//                   secondary={`$${item.price}`}
//                 />
//                 <IconButton onClick={() => handleRemoveFromCart(item)}>
//                   <CloseIcon />
//                 </IconButton>
//               </ListItem>
//             ))}
//           </List>
//           <Box textAlign="center" my={2}>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleOrderDialogOpen}
//               disabled={cart.length === 0}
//             >
//               Place Order
//             </Button>
//           </Box>
//         </Box>
//       </Drawer>

//       <Dialog open={orderDialogOpen} onClose={handleOrderDialogClose}>
//         <DialogTitle>Order Details</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Address"
//             type="text"
//             fullWidth
//             variant="outlined"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//           <TextField
//             margin="dense"
//             label="Contact"
//             type="text"
//             fullWidth
//             variant="outlined"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleOrderDialogClose} color="secondary">
//             Cancel
//           </Button>
//           <Button onClick={handleOrderPlacement} color="primary">
//             Confirm Order
//           </Button>
//         </DialogActions>
//       </Dialog>
//  <footer style={{ backgroundColor: 'rgba(0, 50, 0, 0.8)', color: 'white', padding: '2rem' }}>
//  <Container>
//    <Grid container spacing={4}>
//      <Grid item xs={12} md={4}>
//        <Typography variant="h6">Contact Us</Typography>
//        <List>
//          <ListItem>
//            <ListItemText primary="Email: contact@homegardenemporium.com" />
//          </ListItem>
//          <ListItem>
//            <ListItemText primary="Phone: +1 (234) 567-890" />
//          </ListItem>
//        </List>
//      </Grid>
//      <Grid item xs={12} md={4}>
//        <Typography variant="h6">Quick Links</Typography>
//        <List>
//          <ListItem>
//            <Link href="/" color="inherit">Home</Link>
//          </ListItem>
//          <ListItem>
//            <Link href="/products" color="inherit">Products</Link>
//          </ListItem>
//          <ListItem>
//            <Link href="/contact" color="inherit">Contact</Link>
//          </ListItem>
//        </List>
//      </Grid>
//      <Grid item xs={12} md={4}>
//        <Typography variant="h6">Follow Us</Typography>
//        <List>
//          <ListItem>
//            <Link href="https://facebook.com" color="inherit">Facebook</Link>
//          </ListItem>
//          <ListItem>
//            <Link href="https://twitter.com" color="inherit">Twitter</Link>
//          </ListItem>
//          <ListItem>
//            <Link href="https://instagram.com" color="inherit">Instagram</Link>
//          </ListItem>
//        </List>
//      </Grid>
//    </Grid>
//    <Typography variant="body2" align="center" style={{ marginTop: '2rem' }}>
//      © 2024 Home Garden Emporium. All rights reserved.
//    </Typography>
//  </Container>
// </footer>
//     </Container>

//   );
// }

// export default Floweringplants;

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

const products = [
  {
    category: 'Indoor Garden',
    items: [
      {
        name: 'Peace Lily',
        description: 'An easy-to-care-for plant that thrives indoors.',
        price: 150,
        rating: 4,
        image:
          'https://tse3.mm.bing.net/th?id=OIP.iHI04jh4Es7fikhtSBUTVQHaLI&pid=Api&P=0&h=180',
      },
      {
        name: 'Snake Plant',
        description: 'A hardy indoor plant that purifies air.',
        price: 200,
        rating: 5,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.VsjL5J_cyPvJM1ZnMPCXGQHaJQ&pid=Api&P=0&h=180',
      },
      {
        name: 'Fern',
        description: 'Lush and vibrant, perfect for indoor settings.',
        price: 180,
        rating: 3.5,
        image:
          'https://www.thespruce.com/thmb/FHrfZqom-qXgu7dIhTMtwnT7lnI=/4281x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grow-organic-fiddlehead-ferns-2539638-hero-23c689cdd2b74f0c9e817cc6e710f0b8.jpg',
      },
    ],
  },
  {
    category: 'Vertical Garden',
    items: [
      {
        name: 'Wall Planters',
        description: 'Perfect for creating a vertical garden on your wall.',
        price: 500,
        rating: 4.5,
        image:
          'https://tse2.mm.bing.net/th?id=OIP.Shfj1vmsSpSmraR7upUUnwHaHa&pid=Api&P=0&h=180',
      },
      {
        name: 'Hanging Pots',
        description: 'Ideal for hanging plants in small spaces.',
        price: 300,
        rating: 4,
        image:
          'https://tse3.mm.bing.net/th?id=OIP.SqQ5H-Sw_pKdwB82T41E0wHaKO&pid=Api&P=0&h=180',
      },
      {
        name: 'Vertical Garden Kit',
        description: 'Complete kit for starting a vertical garden.',
        price: 600,
        rating: 5,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.rJXRr3DzMNSOD73mRvghWwHaLH&pid=Api&P=0&h=180',
      },
    ],
  },
  {
    category: 'Miniature Gardens',
    items: [
      {
        name: 'Bonsai Tree',
        description: 'A small tree for indoor decoration.',
        price: 450,
        rating: 4.5,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.FxGtOUg8tKKUjdszIKFmAAHaHa&pid=Api&P=0&h=180',
      },
      {
        name: 'Fairy Garden Kit',
        description: 'Create your own miniature garden scene.',
        price: 250,
        rating: 3.5,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.Mrm5TuLxEgL-tVcE6_C1UwHaJ4&pid=Api&P=0&h=180',
      },
      {
        name: 'Succulent Set',
        description: 'A variety of small succulents for decoration.',
        price: 350,
        rating: 4,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.H2G7NpnFYNVTpoYW9Kej6AHaHp&pid=Api&P=0&h=180',
      },
    ],
  },
  {
    category: 'Air Purifying Plants Packs',
    items: [
      {
        name: 'Air Purifying Pack 1',
        description: 'Includes Spider Plant, Aloe Vera, and more.',
        price: 400,
        rating: 5,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.riC09MnbZrqlPcawTWSaggHaHa&pid=Api&P=0&h=180',
      },
      {
        name: 'Air Purifying Pack 2',
        description: 'Includes Peace Lily, Bamboo Palm, and more.',
        price: 450,
        rating: 4.5,
        image:
          'https://tse3.mm.bing.net/th?id=OIP.Qa0-pYi60g6--swlrXdD_AHaJQ&pid=Api&P=0&h=180',
      },
      {
        name: 'Air Purifying Pack 3',
        description: 'Includes Snake Plant, Rubber Plant, and more.',
        price: 500,
        rating: 4,
        image:
          'https://tse2.mm.bing.net/th?id=OIP.YH5J4-akk54SXeaUhiMLbQHaJ4&pid=Api&P=0&h=180',
      },
    ],
  },
  {
    category: 'Plants by Occasions',
    items: [
      {
        name: 'Birthday Plant Gift',
        description: 'Give a plant as a unique birthday gift.',
        price: 350,
        rating: 4,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.EaFvSW8qts8lvjNQdJMlvwHaHa&pid=Api&P=0&h=180',
      },
      {
        name: 'Anniversary Plant Gift',
        description: 'Celebrate anniversaries with a living gift.',
        price: 400,
        rating: 4.5,
        image:
          'https://cdn.notonthehighstreet.com/fs/1f/23/68a3-6a1e-42ef-9eba-81764e6adfa0/original_personalised-crate-silver-wedding-anniversary.jpg',
      },
      {
        name: 'Thank You Plant Gift',
        description: 'Express gratitude with a thoughtful plant.',
        price: 300,
        rating: 3.5,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.U84GZqpdubknAE9TGIrJdQAAAA&pid=Api&P=0&h=180',
      },
    ],
  },
  {
    category: 'Flowering Plants',
    items: [
      {
        name: 'Orchid',
        description: 'A beautiful flowering plant that lasts long.',
        price: 500,
        rating: 5,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.hxrt-KuCrL0iW5mL9cD4YgHaFj&pid=Api&P=0&h=180',
      },
      {
        name: 'Rose Plant',
        description: 'Classic and elegant flowering plant.',
        price: 400,
        rating: 4.5,
        image:
          'https://tse2.mm.bing.net/th?id=OIP.OjFBLT7yf6-Zx4T7TrFzJAHaGw&pid=Api&P=0&h=180',
      },
      {
        name: 'Lavender',
        description: 'Fragrant and soothing flowering plant.',
        price: 300,
        rating: 4,
        image:
          'https://tse1.mm.bing.net/th?id=OIP.bVE5LJ6BW1mGavzf_mgLVgHaFj&pid=Api&P=0&h=180',
      },
    ],
  },
];

function Floweringplants() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    filterProducts();
  }, [selectedRating, selectedPriceRange]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const openOrderDialog = () => {
    setOrderDialogOpen(true);
  };

  const closeOrderDialog = () => {
    setOrderDialogOpen(false);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(Number(event.target.value));
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const handleOrder = () => {
    closeOrderDialog();
  };

  const filterProducts = () => {
    const filtered = products.map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.rating >= selectedRating &&
          (selectedPriceRange === '' ||
            (selectedPriceRange === 'low' && item.price < 200) ||
            (selectedPriceRange === 'medium' && item.price >= 200 && item.price < 400) ||
            (selectedPriceRange === 'high' && item.price >= 400))
      ),
    }));
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: 'rgba(0, 50, 0, 0.8)'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home Garden Emporium
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Contact</Button>
          <IconButton color="inherit" onClick={toggleCart}>
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container>
        <Box sx={{ my: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Our Flowering Plants
          </Typography>

          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between' }}>
            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel>Rating</InputLabel>
              <Select
                value={selectedRating}
                label="Rating"
                onChange={handleRatingChange}
              >
                <MenuItem value={0}>All Ratings</MenuItem>
                <MenuItem value={3}>3 Stars & Up</MenuItem>
                <MenuItem value={4}>4 Stars & Up</MenuItem>
                <MenuItem value={5}>5 Stars</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel>Price Range</InputLabel>
              <Select
                value={selectedPriceRange}
                label="Price Range"
                onChange={handlePriceRangeChange}
              >
                <MenuItem value="">All Prices</MenuItem>
                <MenuItem value="low">Below ₹200</MenuItem>
                <MenuItem value="medium">₹200 - ₹400</MenuItem>
                <MenuItem value="high">Above ₹400</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Grid container spacing={4}>
            {filteredProducts.map((category) =>
              category.items.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt={item.name}
                      height="200"
                      image={item.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                      <Typography variant="h6" color="text.primary" sx={{ mt: 1 }}>
                        ₹{item.price}
                      </Typography>
                      <Rating value={item.rating} readOnly precision={0.5} />
                      <Button
                      style={{ backgroundColor: 'rgba(0, 50, 0, 0.8)'}}
                        variant="variant"
                        // color="white"
                        onClick={() => addToCart(item)}
                        sx={{ mt: 2 }}
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Container>

      <Drawer anchor="right" open={cartOpen} onClose={toggleCart}>
        <Box sx={{ width: 350 }}>
          <IconButton onClick={toggleCart} sx={{ ml: 'auto', display: 'block' }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ p: 2 }}>
            Shopping Cart
          </Typography>
          <List>
            {cart.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={item.name}
                  secondary={`₹${item.price}`}
                />
                <IconButton onClick={() => removeFromCart(index)}>
                  <CloseIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={openOrderDialog}
          >
            Place Order
          </Button>
        </Box>
      </Drawer>

      <Dialog open={orderDialogOpen} onClose={closeOrderDialog}>
        <DialogTitle>Place Order</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Address"
            type="text"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Contact Number"
            type="text"
            fullWidth
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeOrderDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleOrder} color="primary">
            Confirm Order
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
      </Grid>    <Grid item xs={12} md={4}>      <Typography variant="h6">Follow Us</Typography>      <List>        <ListItem>          <Link href="https://facebook.com" color="inherit">Facebook</Link>        </ListItem>        <ListItem>          <Link href="https://twitter.com" color="inherit">Twitter</Link>        </ListItem>        <ListItem>          <Link href="https://instagram.com" color="inherit">Instagram</Link>        </ListItem>      </List>
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

export default Floweringplants;
