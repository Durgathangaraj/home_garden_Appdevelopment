// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import OpacityIcon from '@mui/icons-material/Opacity';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import InputBase from '@mui/material/InputBase';
// import { Link as RouterLink } from 'react-router-dom';
// import { Container, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
// import Link from "@mui/material/Link";
// import { Facebook, Instagram, Twitter, ShoppingCart, Apps, Home, Info, ContactMail, Help } from "@mui/icons-material";
// import { styled, alpha } from '@mui/material/styles';
// import SearchIcon from '@mui/icons-material/Search';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';

// // Styling for the search bar
// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: theme.palette.grey[200],
//   '&:hover': {
//     backgroundColor: theme.palette.grey[300],
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// const carouselImages = [
//   'https://as2.ftcdn.net/v2/jpg/02/91/15/05/1000_F_291150525_KrGedVdpp1mILROPK4BwZ8dF5x6w1H1B.jpg',
//   'https://png.pngtree.com/thumb_back/fh260/background/20231102/pngtree-lush-and-natural-dark-green-leaf-texture-as-a-background-image_13731302.png',
//   'https://png.pngtree.com/thumb_back/fh260/background/20231014/pngtree-textured-backdrop-with-dark-green-leaf-pattern-image_13676664.png',
//   'https://img.freepik.com/premium-photo/dark-green-leaves-background_1268-26306.jpg',
// ];


// const itemData = [
//   {
//     img: 'https://mygardenemporium.com/cdn/shop/collections/Screenshot_2024-02-10_at_8.04.06_PM.png?v=1707911315&width=535',
//     title: 'Indoor Plants',
//   },
//   {
//     img: 'https://mygardenemporium.com/cdn/shop/collections/Turtle_Vine.jpg?v=1708855826&width=535',
//     title: 'Flowering Plants',
//   },
//   {
//     img: 'https://mygardenemporium.com/cdn/shop/collections/Hanging_Pots.jpg?v=1708856730&width=535',
//     title: 'Hanging plants',
//   },
//   {
//     img: 'https://mygardenemporium.com/cdn/shop/collections/low_maintence_plants.jpg?v=1708859588&width=535',
//     title: 'Low Maintenance Plants',
//   },
//   {
//     img: 'https://mygardenemporium.com/cdn/shop/collections/apf.jpg?v=1716964833&width=535',
//     title: 'Air Purifying Plants',
//   },
//   {
//     img: 'https://mygardenemporium.com/cdn/shop/files/Notocactus_magnificus_150_990673bc-d39c-4c42-b2e4-ddf697539966.jpg?v=1713714720&width=360',
//     title: 'Cacti & Succulents',
//   },
//   {
//     img: 'https://mygardenemporium.com/cdn/shop/files/PeperomiaAngulata.jpg?v=1708779014&width=713',
//     title: 'Climbers & Creepers',
//   },
//   {
//     img: 'https://www.tamaragardencentre.com/wp-content/uploads/2024/04/il_600x600.5327826827_d3oz.avif',
//     title: 'Bonsai Plants',
//   },
//   {
//     img: 'https://www.tamaragardencentre.com/wp-content/uploads/2023/04/chrysanthemum-5.jpg',
//     title: 'Seasonal Plants',
//   },
// ];

// export default function HomePage() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [currentMenu, setCurrentMenu] = useState(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [carouselIndex, setCarouselIndex] = useState(0)

//   const handleClick = (event, menu) => {
//     setAnchorEl(event.currentTarget);
//     setCurrentMenu(menu);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setCurrentMenu(null);
//   };

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   return (
//     <div>
//       <Box sx={{ flexGrow: 1 }} className="App-bg">
//         <AppBar position="static" style={{  padding: '10px 0' , backgroundColor: 'rgba(0, 80, 0, 1)'}}>
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//               onClick={toggleDrawer(true)}
//               >
//               <MenuIcon />
//             </IconButton>
//             <img
//               src="https://mygardenemporium.com/cdn/shop/files/My_Garden_Emporium_2.png?v=1708828172&width=135"
//               alt="Logo"
//               style={{ height: '40px', marginRight: 'auto' }}
//               />
//                <Box sx={{  mr: 45}}>
             
//               <Typography variant="h5" component="div">
//                 Floral Fantasy
//               </Typography>
//             </Box>
              
           
//             <Button
//               color="inherit"
//               onClick={(event) => handleClick(event, 'plants')}
//               component={RouterLink} to="./cb"
//             >
//              Chatbox
//             </Button>
//             <Button
//               color="inherit"
//               onClick={(event) => handleClick(event, 'seeds')}
//                component={RouterLink} to="./seeds"
//             >
//               Seeds
//             </Button>
//             <Button
//               color="inherit"
//               onClick={(event) => handleClick(event, 'planters')}
//               component={RouterLink} to="./ac"
//             >
//              products
//             </Button>
//             <Button
//               color="inherit"
//               onClick={(event) => handleClick(event, 'soil-fertilizers')}
//               component={RouterLink} to="./sf" >
//               Soil & Fertilizers

//             </Button>
//             <Button
//               color="inherit"
//               onClick={(event) => handleClick(event, 'contact')}
//               component={RouterLink} to="./c"
//             >
//               Contact Us
//             </Button>

//             <Search style={{ backgroundColor: "white" }}>
//               <SearchIconWrapper>
//                 <SearchIcon />
//               </SearchIconWrapper>
//               <StyledInputBase
//                 placeholder="Search…"style={{ backgroundColor: "green" }}
//                 inputProps={{ 'aria-label': 'search' }}
//               />
//             </Search>
//             <IconButton
//               size="large"
//               edge="end"
//               color="inherit"
//               aria-label="apps"
//               sx={{ ml: 2 }}
//               onClick={(event) => handleClick(event, 'apps')}
//             >
//               <Apps />
//             </IconButton>
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl) && currentMenu === 'apps'}
//               onClose={handleClose}
//               sx={{ 
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(3, 100px)',
//                 gridAutoRows: '100px',
//                 gap: 1,
//               }}
//             >
//               <MenuItem onClick={handleClose} style={{ backgroundColor: "white" }}>
//                 <Button color="inherit" variant="outlined" href="/Login" style={{ backgroundColor: "white" }}>
//                   LOGIN
//                 </Button>
//               </MenuItem>
//               <MenuItem onClick={handleClose} style={{ backgroundColor: "white" }}>
//                 <Button color="inherit" variant="outlined" href="/Registeration" style={{ backgroundColor: "white" }}>
//                   SIGNUP
//                 </Button>
//               </MenuItem>
//             </Menu>

//             <IconButton
//               size="large"
//               edge="end"
//               color="inherit"
//               aria-label="cart"
//               sx={{ ml: 2 }}
//             >
//               <ShoppingCart />
//             </IconButton>
//           </Toolbar>
//         </AppBar>

//         <Drawer
//           anchor="left"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//         >
//           <List>
//             <ListItem button component={RouterLink} to="/">
//               <ListItemIcon><Home /></ListItemIcon>
//               <ListItemText primary="Home" />
//             </ListItem>
//             <ListItem button component={RouterLink} to="/gardening">
//               <ListItemIcon> <LocalFloristIcon /></ListItemIcon>
//               <ListItemText primary="Gardening" />
//             </ListItem>
//             <ListItem button component={RouterLink} to="/w">
//               <ListItemIcon> <OpacityIcon /></ListItemIcon>
//               <ListItemText primary="Watering" />
//             </ListItem>
//             <ListItem button component={RouterLink} to="/pl">
//               <ListItemIcon><LocalFloristIcon /></ListItemIcon>
//               <ListItemText primary="Plant Care" />
//             </ListItem>
//             <ListItem button component={RouterLink} to="/about">
//               <ListItemIcon><Info /></ListItemIcon>
//               <ListItemText primary="About Us" />
//             </ListItem>
//             <ListItem button component={RouterLink} to="/contact">
//               <ListItemIcon><ContactMail /></ListItemIcon>
//               <ListItemText primary="Contact Us" />
//             </ListItem>
//             <ListItem button component={RouterLink} to="/cl">
//               <ListItemIcon> <LocationOnIcon  /></ListItemIcon>
//               <ListItemText primary="CurrentLocation" />
//             </ListItem>
//             <ListItem button component={RouterLink} to="/faq">
//               <ListItemIcon><Help /></ListItemIcon>
//               <ListItemText primary="FAQ" />
//             </ListItem>
//           </List>
//         </Drawer>

//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl) && currentMenu === 'plants'}
//           onClose={handleClose}
//         >
//           <MenuItem onClick={handleClose} >Indoor Plants</MenuItem>
//           <MenuItem onClick={handleClose} component={RouterLink} to="./fp"> Flowering Plants</MenuItem>
//           <MenuItem onClick={handleClose}>Low Maintenance Plants</MenuItem>
//           <MenuItem onClick={handleClose}>Air Purifying Plants</MenuItem>
//           <MenuItem onClick={handleClose}>Low Light Plants</MenuItem>
//           <MenuItem onClick={handleClose}>Cacti & Succulents</MenuItem>
//           <MenuItem onClick={handleClose}>Hanging Plants</MenuItem>
//           <MenuItem onClick={handleClose}>Medicinal & Aromatic Plants</MenuItem>
//           <MenuItem onClick={handleClose}>Fruit-Bearing Botanical</MenuItem>
//           <MenuItem onClick={handleClose}>Seed Kits</MenuItem>
//         </Menu>

//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl) && currentMenu === 'seeds'}
//           onClose={handleClose}
//         >
//           <MenuItem onClick={handleClose}>Fruit Seeds</MenuItem>
//           <MenuItem onClick={handleClose}>Vegetable Seeds</MenuItem>
//           <MenuItem onClick={handleClose}>Microgreen Seeds</MenuItem>
//           <MenuItem onClick={handleClose}>Herb Seeds</MenuItem>
//           <MenuItem onClick={handleClose}>Tree & Grass Seeds</MenuItem>
//         </Menu>

//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl) && currentMenu === 'planters'}
//           onClose={handleClose}
//         >
//           <MenuItem onClick={handleClose}>Ceramic Planters</MenuItem>
//           <MenuItem onClick={handleClose}>Plastic Planters</MenuItem>
//           <MenuItem onClick={handleClose}>Metal Planters</MenuItem>
//           <MenuItem onClick={handleClose}>Hanging Planters</MenuItem>
//         </Menu>

//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl) && currentMenu === 'soil-fertilizers'}
//           onClose={handleClose}
//         >
//           <MenuItem onClick={handleClose}>Potting Mix</MenuItem>
//           <MenuItem onClick={handleClose}>Organic Fertilizers</MenuItem>
//           <MenuItem onClick={handleClose}>Compost</MenuItem>
//         </Menu>

//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl) && currentMenu === 'contact'}
//           onClose={handleClose}
//         >
//           <MenuItem onClick={handleClose}>Contact Form</MenuItem>
//           <MenuItem onClick={handleClose}>Email</MenuItem>
//           <MenuItem onClick={handleClose}>Phone</MenuItem>
//         </Menu>
//       </Box>
//       <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
//           <Slider
//             dots
//             infinite={true}
//             speed={1000}
//             slidesToShow={1}
//             slidesToScroll={1}
//             autoplay
//             autoplaySpeed={2000}
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
            
//               <div
//           style={{
//             position: 'absolute',
//             top: '30%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             textAlign: 'center',
//             color: 'white',
//             backgroundColor: 'rgba(0, 100, 0, 1)',
//             padding: '20px',
//             borderRadius: '8px',
//             width: '80%',
//             maxWidth: '600px',
//           }}
//         >
//           <Typography variant="h4" component="div" style={{ marginBottom: '10px' }}>
//           Transform your home with nature's touch
//           </Typography>
//           <Button variant="contained" color="secondary" component={RouterLink}
//           to="/products">
//             Explore Now
//           </Button>
//         </div>
              
//                </div>
//             ))}
//           </Slider>
//         </Box>

//       <Container sx={{ py: 4 }} maxWidth="md">
//         <Typography variant="h4" gutterBottom>
//           Featured Products
//         </Typography>
//         <Grid container spacing={4}>
//           {itemData.map((item, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <Card>
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={item.img}
//                   alt={item.title}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h6" component="div">
//                     {item.title}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small"  component={RouterLink} to="./fp" >Buy Now</Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>


     


//       <footer style={{ backgroundColor: 'rgba(0, 50, 0, 0.8)', color: 'white', padding: '2rem' }}>
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
//     </div>
 
    
//   );
// }


import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OpacityIcon from '@mui/icons-material/Opacity';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import { Link as RouterLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter, ShoppingCart, Apps, Home, Info, ContactMail, Help } from "@mui/icons-material";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// Styling for the search bar

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

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

const carouselImages = [
  'https://as2.ftcdn.net/v2/jpg/02/91/15/05/1000_F_291150525_KrGedVdpp1mILROPK4BwZ8dF5x6w1H1B.jpg',
  'https://png.pngtree.com/thumb_back/fh260/background/20231102/pngtree-lush-and-natural-dark-green-leaf-texture-as-a-background-image_13731302.png',
  'https://png.pngtree.com/thumb_back/fh260/background/20231014/pngtree-textured-backdrop-with-dark-green-leaf-pattern-image_13676664.png',
  'https://img.freepik.com/premium-photo/dark-green-leaves-background_1268-26306.jpg',
];
const itemData = [
  {
    img: 'https://mygardenemporium.com/cdn/shop/collections/Screenshot_2024-02-10_at_8.04.06_PM.png?v=1707911315&width=535',
    title: 'Indoor Plants',
  },
  {
    img: 'https://mygardenemporium.com/cdn/shop/collections/Turtle_Vine.jpg?v=1708855826&width=535',
    title: 'Flowering Plants',
  },
  {
    img: 'https://mygardenemporium.com/cdn/shop/collections/Hanging_Pots.jpg?v=1708856730&width=535',
    title: 'Hanging plants',
  },
  {
    img: 'https://mygardenemporium.com/cdn/shop/collections/low_maintence_plants.jpg?v=1708859588&width=535',
    title: 'Low Maintenance Plants',
  },
  {
    img: 'https://mygardenemporium.com/cdn/shop/collections/apf.jpg?v=1716964833&width=535',
    title: 'Air Purifying Plants',
  },
  {
    img: 'https://mygardenemporium.com/cdn/shop/files/Notocactus_magnificus_150_990673bc-d39c-4c42-b2e4-ddf697539966.jpg?v=1713714720&width=360',
    title: 'Cacti & Succulents',
  },
  {
    img: 'https://mygardenemporium.com/cdn/shop/files/PeperomiaAngulata.jpg?v=1708779014&width=713',
    title: 'Climbers & Creepers',
  },
  {
    img: 'https://www.tamaragardencentre.com/wp-content/uploads/2024/04/il_600x600.5327826827_d3oz.avif',
    title: 'Bonsai Plants',
  },
  {
    img: 'https://www.tamaragardencentre.com/wp-content/uploads/2023/04/chrysanthemum-5.jpg',
    title: 'Seasonal Plants',
  },
];

export default function HomePage() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    
 
    <div>
      <Box sx={{ flexGrow: 1 }} className="App-bg">
        <AppBar position="static" style={{ padding: '10px 0', backgroundColor: 'rgba(0, 80, 0, 1)' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <img
              src="https://mygardenemporium.com/cdn/shop/files/My_Garden_Emporium_2.png?v=1708828172&width=135"
              alt="Logo"
              style={{ height: '40px', marginRight: 'auto' }}
            />
            <Box sx={{ mr: 45 }}>
              <Typography variant="h5" component="div">
                Floral Fantasy
              </Typography>
            </Box>

            <Button
              color="inherit"
              onClick={(event) => handleClick(event, 'plants')}
              component={RouterLink} to="./cb"
            >
              Chatbox
            </Button>
            <Button
              color="inherit"
              onClick={(event) => handleClick(event, 'seeds')}
              component={RouterLink} to="./seeds"
            >
              Seeds
            </Button>
            <Button
              color="inherit"
              onClick={(event) => handleClick(event, 'planters')}
              component={RouterLink} to="./ac"
            >
              Products
            </Button>
            <Button
              color="inherit"
              onClick={(event) => handleClick(event, 'soil-fertilizers')}
              component={RouterLink} to="./sf"
            >
              Soil & Fertilizers
            </Button>
            <Button
              color="inherit"
              onClick={(event) => handleClick(event, 'contact')}
              component={RouterLink} to="./c"
            >
              Contact Us
            </Button>

            <Search style={{ backgroundColor: "white" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                style={{ backgroundColor: "green" }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="apps"
              sx={{ ml: 2 }}
              onClick={(event) => handleClick(event, 'apps')}
            >
              <Apps />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && currentMenu === 'apps'}
              onClose={handleClose}
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 100px)',
                gridAutoRows: '100px',
                gap: 1,
              }}
            >
              <MenuItem onClick={handleClose} style={{ backgroundColor: "white" }}>
                <Button color="inherit" variant="outlined" href="/Login" style={{ backgroundColor: "white" }}>
                  LOGIN
                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose} style={{ backgroundColor: "white" }}>
                <Button color="inherit" variant="outlined" href="/Registeration" style={{ backgroundColor: "white" }}>
                  SIGNUP
                </Button>
              </MenuItem>
            </Menu>

            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="cart"
              sx={{ ml: 2 }}
            >
              <ShoppingCart />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <List>
            <ListItem button component={RouterLink} to="/">
              <ListItemIcon><Home /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={RouterLink} to="/gardening">
              <ListItemIcon> <LocalFloristIcon /></ListItemIcon>
              <ListItemText primary="Gardening" />
            </ListItem>
            <ListItem button component={RouterLink} to="/cus">
              <ListItemIcon> <LocalFloristIcon /></ListItemIcon>
              <ListItemText primary="Customize" />
            </ListItem>
            <ListItem button component={RouterLink} to="/w">
              <ListItemIcon> <OpacityIcon /></ListItemIcon>
              <ListItemText primary="Watering" />
            </ListItem>
            <ListItem button component={RouterLink} to="/pl">
              <ListItemIcon><LocalFloristIcon /></ListItemIcon>
              <ListItemText primary="Plant Care" />
            </ListItem>
            <ListItem button component={RouterLink} to="/about">
              <ListItemIcon><Info /></ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button component={RouterLink} to="/contact">
              <ListItemIcon><ContactMail /></ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
            <ListItem button component={RouterLink} to="/cl">
              <ListItemIcon> <LocationOnIcon /></ListItemIcon>
              <ListItemText primary="Current Location" />
            </ListItem>
            <ListItem button component={RouterLink} to="/faq">
              <ListItemIcon><Help /></ListItemIcon>
              <ListItemText primary="FAQ" />
            </ListItem>
          </List>
        </Drawer>
      </Box>

      <div style={{ position: 'relative', height: '650px', overflow: 'hidden', width: '100%' }}>
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          afterChange={(index) => setCarouselIndex(index)}
          autoplay={true}
          autoplaySpeed={3000}
        >
          {carouselImages.map((image, index) => (
            <div key={index}>
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '650px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#fff',
                  textAlign: 'center',
                  padding: '0 20px',
                  boxSizing: 'border-box',
                }}
              >
                <div>
                  <h2>Enhance your home's exterior with a meticulously designed and maintained garden.</h2>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: 'green', color: 'white', marginTop: '20px' }}
                  >
                    Explore Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>Featured Products</Typography>
        <Grid container spacing={4}>
          {itemData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.img}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" component={RouterLink} to="./fp" >Buy Now</Button>
                </CardActions>
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
    </div>
 
    
  );
}
