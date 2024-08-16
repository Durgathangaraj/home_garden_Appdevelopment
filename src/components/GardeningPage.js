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
//         price: '₹150',
//         rating: 4,
//         image:
//           'https://tse3.mm.bing.net/th?id=OIP.iHI04jh4Es7fikhtSBUTVQHaLI&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Snake Plant',
//         description: 'A hardy indoor plant that purifies air.',
//         price: '₹200',
//         rating: 5,
//         image:
//           'https://tse4.mm.bing.net/th?id=OIP.VsjL5J_cyPvJM1ZnMPCXGQHaJQ&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Fern',
//         description: 'Lush and vibrant, perfect for indoor settings.',
//         price: '₹180',
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
//         price: '₹500',
//         rating: 4.5,
//         image:
//           'https://tse2.mm.bing.net/th?id=OIP.Shfj1vmsSpSmraR7upUUnwHaHa&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Hanging Pots',
//         description: 'Ideal for hanging plants in small spaces.',
//         price: '₹300',
//         rating: 4,
//         image:
//           'https://tse3.mm.bing.net/th?id=OIP.SqQ5H-Sw_pKdwB82T41E0wHaKO&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Vertical Garden Kit',
//         description: 'Complete kit for starting a vertical garden.',
//         price: '₹600',
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
//         price: '₹450',
//         rating: 4.5,
//         image:
//           'https://tse4.mm.bing.net/th?id=OIP.FxGtOUg8tKKUjdszIKFmAAHaHa&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Fairy Garden Kit',
//         description: 'Create your own miniature garden scene.',
//         price: '₹250',
//         rating: 3.5,
//         image:
//           'https://tse4.mm.bing.net/th?id=OIP.Mrm5TuLxEgL-tVcE6_C1UwHaJ4&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Succulent Set',
//         description: 'A variety of small succulents for decoration.',
//         price: '₹350',
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
//         price: '₹400',
//         rating: 5,
//         image:
//           'https://tse4.mm.bing.net/th?id=OIP.riC09MnbZrqlPcawTWSaggHaHa&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Air Purifying Pack 2',
//         description: 'Includes Peace Lily, Bamboo Palm, and more.',
//         price: '₹450',
//         rating: 4.5,
//         image:
//           'https://tse3.mm.bing.net/th?id=OIP.Qa0-pYi60g6--swlrXdD_AHaJQ&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Air Purifying Pack 3',
//         description: 'Includes Snake Plant, Rubber Plant, and more.',
//         price: '₹500',
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
//         price: '₹350',
//         rating: 4,
//         image:
//           'https://tse4.mm.bing.net/th?id=OIP.EaFvSW8qts8lvjNQdJMlvwHaHa&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Anniversary Plant Gift',
//         description: 'Celebrate anniversaries with a living gift.',
//         price: '₹400',
//         rating: 4.5,
//         image:
//           'https://cdn.notonthehighstreet.com/fs/1f/23/68a3-6a1e-42ef-9eba-81764e6adfa0/original_personalised-crate-silver-wedding-anniversary.jpg',
//       },
//       {
//         name: 'Thank You Plant Gift',
//         description: 'Express gratitude with a thoughtful plant.',
//         price: '₹300',
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
//         price: '₹500',
//         rating: 5,
//         image:
//           'https://tse1.mm.bing.net/th?id=OIP.1gyZgn4wvF75pQfC7ubokAHaE6&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Rose Plant',
//         description: 'Classic and elegant flowering plant.',
//         price: '₹400',
//         rating: 4.5,
//         image:
//           'https://tse4.mm.bing.net/th?id=OIP._uhyZl_z5yjZGbTVvYBBYQHaE7&pid=Api&P=0&h=180',
//       },
//       {
//         name: 'Lavender',
//         description: 'Fragrant and soothing flowering plant.',
//         price: '₹300',
//         rating: 4,
//         image:
//           'https://tse3.mm.bing.net/th?id=OIP.KZEMSAnGPDlSEiJoSBzb4wHaE8&pid=Api&P=0&h=180',
//       },
//     ],
//   },
// ];

// function GardeningPage() {
//   const [cart, setCart] = useState([]);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [orderDialogOpen, setOrderDialogOpen] = useState(false);
//   const [address, setAddress] = useState('');
//   const [quantity, setQuantity] = useState(1);
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [orderStatus, setOrderStatus] = useState('Not yet shipped');
//   const [carouselIndex, setCarouselIndex] = useState(0);

//   const carouselImages = [
//     'https://wallpapercave.com/wp/wp2980263.jpg',
//     'https://c1.wallpaperflare.com/preview/152/978/370/garden-flowers-home-garden-shed.jpg',
//     'https://wallpapercave.com/wp/wp7851936.jpg',
//     'https://png.pngtree.com/background/20230611/original/pngtree-picturesque-garden-in-a-lawn-with-trees-and-flowers-picture-image_3160419.jpg',
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
//     }, 2000);
//     return () => clearInterval(timer);
//   }, [carouselImages.length]);

//   const handleCartClick = () => {
//     setCartOpen(!cartOpen);
//   };

//   const handleAddToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   const handleRemoveFromCart = (index) => {
//     const newCart = cart.filter((_, i) => i !== index);
//     setCart(newCart);
//   };

//   const handlePlaceOrder = () => {
//     setOrderDialogOpen(true);
//   };

//   const handleOrderSubmit = () => {
//     // Logic for order submission
//     alert(`Order placed for ${quantity} item(s) to be delivered at ${address}`);
//     setOrderDialogOpen(false);
//     setCart([]); // Clear cart after order submission
//     setOrderStatus('Order placed, awaiting shipment');
//   };

//   return (
//     <div>
//       <AppBar position="static" style={{ backgroundColor: 'rgba(0, 50, 0, 0.8)' }}>
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Gardening Store
//           </Typography>
//           <IconButton color="inherit" onClick={handleCartClick}>
//             <Badge badgeContent={cart.length} color="error">
//               <ShoppingCartIcon />
//             </Badge>
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Drawer anchor="right" open={cartOpen} onClose={handleCartClick}>
//         <Box sx={{ width: 300, padding: 2 }}>
//           <IconButton
//             onClick={handleCartClick}
//             sx={{ float: 'right', marginBottom: 2 }}
//           >
//             <CloseIcon />
//           </IconButton>
//           <Typography variant="h6">Shopping Cart</Typography>
//           <List>
//             {cart.length === 0 ? (
//               <Typography variant="body2">Your cart is empty.</Typography>
//             ) : (
//               cart.map((item, index) => (
//                 <ListItem key={index} sx={{ borderBottom: '1px solid #ddd' }}>
//                   <CardMedia
//                     component="img"
//                     height="50"
//                     image={item.image}
//                     alt={item.name}
//                     sx={{ width: 50, marginRight: 2 }}
//                   />
//                   <ListItemText
//                     primary={item.name}
//                     secondary={`${item.price} - ${item.description}`}
//                   />
//                   <Rating value={item.rating} readOnly size="small" />
//                   <Button
//                     onClick={() => handleRemoveFromCart(index)}
//                     color="secondary"
//                   >
//                     Remove
//                   </Button>
//                 </ListItem>
//               ))
//             )}
//           </List>
//           {cart.length > 0 && (
//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               onClick={handlePlaceOrder}
//               style={{ marginTop: 20 }}
//             >
//               Place Order
//             </Button>
//           )}
//         </Box>
//       </Drawer>

//       <Dialog open={orderDialogOpen} onClose={() => setOrderDialogOpen(false)}>
//         <DialogTitle>Place Order</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Address"
//             fullWidth
//             variant="outlined"
//             margin="normal"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//           <TextField
//             label="Quantity"
//             fullWidth
//             variant="outlined"
//             margin="normal"
//             type="number"
//             value={quantity}
//             onChange={(e) => setQuantity(Number(e.target.value))}
//             inputProps={{ min: 1 }}
//           />
//           <FormControl fullWidth margin="normal">
//             <InputLabel>Payment Method</InputLabel>
//             <Select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             >
//               <MenuItem value="cash">Cash on Delivery</MenuItem>
//               <MenuItem value="googlePay">Google Pay</MenuItem>
//               <MenuItem value="paytm">Paytm</MenuItem>
//               <MenuItem value="phonePe">PhonePe</MenuItem>
//             </Select>
//           </FormControl>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOrderDialogOpen(false)} color="secondary">
//             Cancel
//           </Button>
//           <Button onClick={handleOrderSubmit} color="primary">
//             Submit Order
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Container>
//         <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
//           <Slider
//             dots
//             infinite
//             speed={500}
//             slidesToShow={1}
//             slidesToScroll={1}
//             autoplay
//             autoplaySpeed={1000}
//             arrows={false}
//             afterChange={(current) => setCarouselIndex(current)}
//           >
//             {carouselImages.map((image, index) => (
//               <div key={index} style={{ position: 'relative', width: '100%', height: '100vh' }}>
//               <img
              
//                 key={index}
//                 src={image}
//                 alt={`Carousel ${index}`}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                 }}
//               />
//                </div>
//             ))}
//           </Slider>
//         </Box>

//         {products.map((category) => (
//           <div key={category.category}>
//             <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
//               {category.category}
//             </Typography>
//             <Grid container spacing={4}>
//               {category.items.map((item) => (
//                 <Grid item xs={12} sm={6} md={4} key={item.name}>
//                   <Card>
//                     <CardMedia
//                       component="img"
//                       height="150"
//                       image={item.image}
//                       alt={item.name}
//                     />
//                     <CardContent>
//                       <Typography variant="h6">{item.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {item.description}
//                       </Typography>
//                       <Typography variant="h6">{item.price}</Typography>
//                       <Rating value={item.rating} readOnly />
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         fullWidth
//                         style={{ backgroundColor: 'green' }}
//                         onClick={() => handleAddToCart(item)}
//                       >
//                         Add to Cart
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </div>
//         ))}

// <footer style={{ backgroundColor: 'rgba(0, 50, 0, 0.8)', color: 'white', padding: '2rem' }}>
//         <Container>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={4}>
//               <Typography variant="h6">Contact Us</Typography>
//               <List>
//                 <ListItem>
//                   <ListItemText primary="Email: contact@homegardenemporium.com" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary="Phone: +1 (234) 567-890" />
//                 </ListItem>
//               </List>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Typography variant="h6">Quick Links</Typography>
//               <List>
//                 <ListItem>
//                   <Link href="/" color="inherit">Home</Link>
//                 </ListItem>
//                 <ListItem>
//                   <Link href="/products" color="inherit">Products</Link>
//                 </ListItem>
//                 <ListItem>
//                   <Link href="/contact" color="inherit">Contact</Link>
//                 </ListItem>
//               </List>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Typography variant="h6">Follow Us</Typography>
//               <List>
//                 <ListItem>
//                   <Link href="https://facebook.com" color="inherit">Facebook</Link>
//                 </ListItem>
//                 <ListItem>
//                   <Link href="https://twitter.com" color="inherit">Twitter</Link>
//                 </ListItem>
//                 <ListItem>
//                   <Link href="https://instagram.com" color="inherit">Instagram</Link>
//                 </ListItem>
//               </List>
//             </Grid>
//           </Grid>
//           <Typography variant="body2" align="center" style={{ marginTop: '2rem' }}>
//             © 2024 Home Garden Emporium. All rights reserved.
//           </Typography>
//         </Container>
//       </footer>
//      </Container>
//     </div>
//   );
// }

// export default GardeningPage;
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
  Snackbar,
  Alert,
} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import QrCodeIcon from '@mui/icons-material/QrCode';

const products = [
  {
    category: 'Indoor Garden',
    items: [
      {
        name: 'Peace Lily',
        description: 'An easy-to-care-for plant that thrives indoors.',
        price: '₹150',
        rating: 4,
        image:
          'https://tse3.mm.bing.net/th?id=OIP.iHI04jh4Es7fikhtSBUTVQHaLI&pid=Api&P=0&h=180',
      },
      {
        name: 'Snake Plant',
        description: 'A hardy indoor plant that purifies air.',
        price: '₹200',
        rating: 5,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.VsjL5J_cyPvJM1ZnMPCXGQHaJQ&pid=Api&P=0&h=180',
      },
      {
        name: 'Fern',
        description: 'Lush and vibrant, perfect for indoor settings.',
        price: '₹180',
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
        price: '₹500',
        rating: 4.5,
        image:
          'https://tse2.mm.bing.net/th?id=OIP.Shfj1vmsSpSmraR7upUUnwHaHa&pid=Api&P=0&h=180',
      },
      {
        name: 'Hanging Pots',
        description: 'Ideal for hanging plants in small spaces.',
        price: '₹300',
        rating: 4,
        image:
          'https://tse3.mm.bing.net/th?id=OIP.SqQ5H-Sw_pKdwB82T41E0wHaKO&pid=Api&P=0&h=180',
      },
      {
        name: 'Vertical Garden Kit',
        description: 'Complete kit for starting a vertical garden.',
        price: '₹600',
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
        price: '₹450',
        rating: 4.5,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.FxGtOUg8tKKUjdszIKFmAAHaHa&pid=Api&P=0&h=180',
      },
      {
        name: 'Fairy Garden Kit',
        description: 'Create your own miniature garden scene.',
        price: '₹250',
        rating: 3.5,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.Mrm5TuLxEgL-tVcE6_C1UwHaJ4&pid=Api&P=0&h=180',
      },
      {
        name: 'Succulent Set',
        description: 'A variety of small succulents for decoration.',
        price: '₹350',
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
        price: '₹400',
        rating: 5,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.riC09MnbZrqlPcawTWSaggHaHa&pid=Api&P=0&h=180',
      },
      {
        name: 'Air Purifying Pack 2',
        description: 'Includes Peace Lily, Bamboo Palm, and more.',
        price: '₹450',
        rating: 4.5,
        image:
          'https://tse3.mm.bing.net/th?id=OIP.Qa0-pYi60g6--swlrXdD_AHaJQ&pid=Api&P=0&h=180',
      },
      {
        name: 'Air Purifying Pack 3',
        description: 'Includes Snake Plant, Rubber Plant, and more.',
        price: '₹500',
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
        price: '₹350',
        rating: 4,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.EaFvSW8qts8lvjNQdJMlvwHaHa&pid=Api&P=0&h=180',
      },
      {
        name: 'Anniversary Plant Gift',
        description: 'Celebrate anniversaries with a living gift.',
        price: '₹400',
        rating: 4.5,
        image:
          'https://cdn.notonthehighstreet.com/fs/1f/23/68a3-6a1e-42ef-9eba-81764e6adfa0/original_personalised-crate-silver-wedding-anniversary.jpg',
      },
      {
        name: 'Thank You Plant Gift',
        description: 'Express gratitude with a thoughtful plant.',
        price: '₹300',
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
        price: '₹500',
        rating: 5,
        image:
          'https://tse1.mm.bing.net/th?id=OIP.1gyZgn4wvF75pQfC7ubokAHaE6&pid=Api&P=0&h=180',
      },
      {
        name: 'Rose Plant',
        description: 'Classic and elegant flowering plant.',
        price: '₹400',
        rating: 4.5,
        image:
          'https://tse4.mm.bing.net/th?id=OIP._uhyZl_z5yjZGbTVvYBBYQHaE7&pid=Api&P=0&h=180',
      },
      {
        name: 'Lavender',
        description: 'Aromatic and beautiful, perfect for gardens.',
        price: '₹350',
        rating: 4,
        image:
          'https://tse2.mm.bing.net/th?id=OIP.Beh9K6nEKPIvE1pe3Eb85wHaJ4&pid=Api&P=0&h=180',
      },
    ],
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <Box component="img"
          src="https://c1.wallpaperflare.com/preview/152/978/370/garden-flowers-home-garden-shed.jpg"
          alt="Banner 1"
          sx={{ width: '100%', height: '300px' }}
        />
      </div>
      <div>
        <Box component="img"
          src="https://wallpapercave.com/wp/wp7851936.jpg"
          alt="Banner 2"
          sx={{ width: '100%', height: '300px' }}
        />
      </div>
      <div>
        <Box component="img"
          src="https://wallpapercave.com/wp/wp2980263.jpg"
          alt="Banner 3"
          sx={{ width: '100%', height: '300px' }}
        />
      </div>
    </Slider>
  );
};

const GardeningPage = () => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    quantity: '',
    address: '',
  });
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentImage, setPaymentImage] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      const price = parseFloat(item.price.replace('₹', ''));
      return acc + price * (item.quantity || 1);
    }, 0);
    setTotalAmount(total);
  }, [cart]);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.name === product.name);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.name !== product.name);
    setCart(updatedCart);
  };

  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
  };

  const handleOrderDialogOpen = () => {
    setOrderDialogOpen(true);
  };

  const handleOrderDialogClose = () => {
    setOrderDialogOpen(false);
  };

  const handleOrderPlace = () => {
    // Reset the order details and cart
    setOrderDetails({
      name: '',
      quantity: '',
      address: '',
    });
    setCart([]);
    setOrderDialogOpen(false);
    setOrderPlaced(true);
    setPaymentImage('https://tse2.mm.bing.net/th?id=OIP.0-v2-a6VM_nWJQxdCaI8hgAAAA&pid=Api&P=0&h=180'); // Reset the payment image
    setPaymentSuccess(false); // Reset the payment success status
  };

  const handlePaymentMethodChange = (event) => {
    const method = event.target.value;
    setPaymentMethod(method);

    if (method === 'Google Pay' || method === 'PhonePe') {
      setPaymentImage('https://razorpay.com/blog-content/uploads/2021/11/Bharat-QR-code.png'); // QR code image for Google Pay or PhonePe
    } else {
      setPaymentImage('https://razorpay.com/blog-content/uploads/2021/11/Bharat-QR-code.png');
    }
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
  };

  const handleSnackbarClose = () => {
    setOrderPlaced(false);
  };

  return (
    <Container maxWidth="lg">
      <AppBar position="static" sx={{ backgroundColor: 'darkgreen' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Home Garden Emporium
          </Typography>
          <IconButton color="inherit" onClick={handleCartToggle}>
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: 2 }}>
        <Carousel />
      </Box>

      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {products.map((category, categoryIndex) => (
          <Grid item xs={12} key={categoryIndex}>
            <Typography variant="h5" gutterBottom>
              {category.category}
            </Typography>
            <Grid container spacing={3}>
              {category.items.map((product, productIndex) => (
                <Grid item xs={12} sm={6} md={4} key={productIndex}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.name}
                    />
                    <CardContent>
                      <Typography variant="h6">{product.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.description}
                      </Typography>
                      <Typography variant="h6">{product.price}</Typography>
                      <Rating value={product.rating} precision={0.5} readOnly />
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => handleAddToCart(product)}
                        sx={{ marginTop: 2 }}
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Drawer anchor="right" open={cartOpen} onClose={handleCartToggle}>
        <Box sx={{ width: 350 }}>
          <List>
            <ListItem>
              <Typography variant="h6">Shopping Cart</Typography>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleCartToggle}
                aria-label="close"
                sx={{ marginLeft: 'auto' }}
              >
                <CloseIcon />
              </IconButton>
            </ListItem>
            {cart.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={item.name}
                  secondary={`Quantity: ${item.quantity}`}
                />
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  <CloseIcon />
                </IconButton>
              </ListItem>
            ))}
            <ListItem>
              <Typography variant="h6">
                Total: ₹{totalAmount.toFixed(2)}
              </Typography>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                color="primary"
                startIcon={<LocalShippingIcon />}
                onClick={handleOrderDialogOpen}
              >
                Place Order
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Dialog open={orderDialogOpen} onClose={handleOrderDialogClose}>
        <DialogTitle>Order Details</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="dense"
            value={orderDetails.name}
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, name: e.target.value })
            }
          />
          <TextField
            label="Quantity"
            fullWidth
            margin="dense"
            value={orderDetails.quantity}
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, quantity: e.target.value })
            }
          />
          <TextField
            label="Address"
            fullWidth
            margin="dense"
            value={orderDetails.address}
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, address: e.target.value })
            }
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Payment Method</InputLabel>
            <Select
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <MenuItem value="Cash on Delivery">Cash on Delivery</MenuItem>
              <MenuItem value="PhonePe">Razorpay</MenuItem>
              <MenuItem value="Google Pay">Google Pay</MenuItem>
            </Select>
          </FormControl>
          {paymentImage && (
            <Box sx={{ textAlign: 'center', marginTop: 2 }}>
              <img src={paymentImage} alt="Payment QR Code" width="200" />
              <Button
                variant="contained"
                onClick={handlePaymentSuccess}
                sx={{ marginTop: 2 }}
              >
                Confirm Payment
              </Button>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOrderDialogClose}>Cancel</Button>
          <Button
            onClick={handleOrderPlace}
            variant="contained"
            color="primary"
          >
            Place Order
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={orderPlaced}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          Order placed successfully!
        </Alert>
      </Snackbar>
      
      {paymentSuccess && (
        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
          <Typography variant="h6">Payment Successful!</Typography>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.0-v2-a6VM_nWJQxdCaI8hgAAAA&pid=Api&P=0&h=180"
            alt="Payment Successful"
            width="200"
          />
        </Box>
      )}

    </Container>
  );
};

export default GardeningPage;
