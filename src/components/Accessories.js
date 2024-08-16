import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Slider,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Modal,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const products = [
  {
    id: 1,
    name: "Porcupines Plastic Miniature Garden Toys - 3 Pieces",
    price: 199,
    originalPrice: 258,
    image:
      "https://nurserylive.com/cdn/shop/products/nurserylive-miniature-garden-toys-porcupines-plastic-miniature-garden-toys-3-pieces-16969219047564_295x295.jpg?v=1634226636",
    description: "Porcupines plastic miniature garden toys set of 3.",
    reviews: 48,
    offers: "⚡ 4+ Offers Inside",
    category: "Toys",
  },
  {
    id: 2,
    name: "College Couple Plastic Miniature Garden Toys (Blue, Orange) - 1 Pair",
    price: 199,
    originalPrice: 258,
    image:
      "https://nurserylive.com/cdn/shop/products/nurserylive-miniature-garden-toys-college-couple-plastic-miniature-garden-toys-blue-orange-1-pair-16968791818380_295x295.jpg?v=1634216554",
    description:
      "College couple plastic miniature garden toys in Blue and Orange.",
    reviews: 50,
    offers: "⚡ 4+ Offers Inside",
    category: "Toys",
  },
  {
    id: 3,
    name: "Moss Stick (3 Feet) (Set of 2)",
    price: 299,
    originalPrice: 350,
    image:
      "https://nurserylive.com/cdn/shop/products/nurserylive-gardening-accessories-moss-stick-3-feet-16969036038284_295x295.jpg?v=1634224468",
    description: "Moss stick for supporting plants, set of 2.",
    reviews: 50,
    offers: "⚡ 4+ Offers Inside",
    category: "Tools",
  },
  {
    id: 4,
    name: "Pruning Secateur with Grip No. MMI 61 - Gardening Tool",
    price: 259,
    originalPrice: 345,
    image:
      "https://nurserylive.com/cdn/shop/products/nurserylive-pruning-shear-no-mmi-58-gardening-tool-1-811577_222x295.jpg?v=1680591216",
    description: "Pruning secateur with a grip for comfortable use.",
    reviews: 55,
    offers: "⚡ 4+ Offers Inside",
    category: "Tools",
  },
  {
    id: 5,
    name: "3 inch (8 cm) Khurpa Steel Handle with Grip No. MMI 89 - Gardening Tool",
    price: 259,
    originalPrice: 345,
    image:
      "https://nurserylive.com/cdn/shop/products/nurserylive-2-inch-5-cm-khurpa-steel-handle-with-grip-no-mmi-88-gardening-tool-1-320602_222x295.jpg?v=1679748230g",
    description: "3 inch Khurpa with a steel handle and grip.",
    reviews: 55,
    offers: "Save 25%",
    category: "Tools",
  },
  {
    id: 6,
    name: "Plastic Hand Trowel No. 1021 - Gardening Tool",
    price: 159,
    originalPrice: 199,
    image:
      "https://nurserylive.com/cdn/shop/products/nurserylive-gardening-tools-plastic-hand-trowel-no-1021-gardening-tool-16969208725644_600x600.jpg?v=1634226304",
    description: "Plastic hand trowel for gardening.",
    reviews: 52,
    offers: "⚡ 4+ Offers Inside",
    category: "Tools",
  },
  {
    id: 7,
    name: "Bridge Plastic Miniature Garden Toy - 1 Piece",
    price: 99,
    originalPrice: 129,
    image:
      "https://nurserylive.com/cdn/shop/products/nurserylive-gardening-tools-plastic-hand-cultivator-no-1019-gardening-tool-16969208168588_600x600.jpg?v=1634226298",
    description: "Bridge plastic miniature garden toy.",
    reviews: 48,
    offers: "⚡ 4+ Offers Inside",
    category: "Toys",
  },
  {
    id: 8,
    name: "Toddler Couple Plastic Miniature Garden Toys (Pink, Blue) - 1 Set",
    price: 199,
    originalPrice: 262,
    image:
      "https://sp.yimg.com/ib/th?id=OIP.AfmrTXdaJXUwHxnUSbgIGQHaHa&pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
    description:
      "Toddler couple plastic miniature garden toys in Pink and Blue.",
    reviews: 51,
    offers: "⚡ 4+ Offers Inside",
    category: "Toys",
  },
  {
    id: 9,
    name: "Garden Rake Brazilian Type No. MMI-98 (10 Teeth) - Gardening Tool",
    price: 259,
    originalPrice: 345,
    image:
      "https://tse1.mm.bing.net/th?id=OIP.kFm5jjOR7WfzSP3QjujykAAAAA&pid=Api&rs=1&c=1&qlt=95&w=110&h=110",
    description: "Garden rake Brazilian type with 10 teeth.",
    reviews: 47,
    offers: "⚡ 4+ Offers Inside",
    category: "Tools",
  },
];

const Accessories = () => {
  const [category, setCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert(`${product.name} added to cart`);
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCartClick = () => {
    setOpenCartModal(true);
  };

  const handleCloseCartModal = () => {
    setOpenCartModal(false);
  };

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  // Filter and sort products
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <div style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)', backgroundSize: 'cover', minHeight: '100vh', padding: '16px' }}>
      <AppBar position="static" style={{ backgroundColor: 'green' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Accessories
          </Typography>
          <IconButton color="inherit" onClick={handleCartClick}>
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <span>☰</span>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={openDrawer} onClose={handleDrawerToggle}>
        <div style={{ width: 250, padding: 16 }}>
          <Typography variant="h6">Filter Options</Typography>
          <List>
            <ListItem>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Category</InputLabel>
                <Select value={category} onChange={handleCategoryChange} label="Category">
                  <MenuItem value="all">All</MenuItem>
                  {/* Add more categories as needed */}
                </Select>
              </FormControl>
            </ListItem>
            <ListItem>
              <Slider
                value={priceRange}
                onChange={handlePriceRangeChange}
                valueLabelDisplay="auto"
                min={0}
                max={500}
              />
            </ListItem>
          </List>
        </div>
      </Drawer>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', marginBottom: '16px' }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ width: '30%', backgroundColor: 'white' }}
        />

        <FormControl variant="outlined" style={{ width: '30%', backgroundColor: 'white' }}>
          <InputLabel>Sort by</InputLabel>
          <Select value={sortOption} onChange={handleSortChange} label="Sort by">
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="price-asc">Price: Low to High</MenuItem>
            <MenuItem value="price-desc">Price: High to Low</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography color="textSecondary">
                  <strike>₹{product.originalPrice}</strike> ₹{product.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">{product.offers}</Typography>
                <Typography variant="body2" color="textSecondary">{product.reviews} reviews</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => handleOpenModal(product)}>
                  View Details
                </Button>
                <Button size="small" style={{ color: 'white', backgroundColor: 'green' }} onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal open={openModal} onClose={handleCloseModal}>
        <div style={{ width: '50%', margin: '50px auto', backgroundColor: 'white', padding: '16px', borderRadius: '8px', outline: 'none' }}>
          {selectedProduct && (
            <>
              <Typography variant="h5">{selectedProduct.name}</Typography>
              <Typography color="textSecondary" style={{ marginBottom: '8px' }}>
                <strike>₹{selectedProduct.originalPrice}</strike> ₹{selectedProduct.price}
              </Typography>
              <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', height: 'auto' }} />
              <Typography variant="body1" style={{ marginTop: '16px' }}>{selectedProduct.description}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleAddToCart(selectedProduct);
                  handleCloseModal();
                }}
                style={{ marginTop: '16px', backgroundColor: 'green', color: 'white' }}
              >
                Add to Cart
              </Button>
            </>
          )}
        </div>
      </Modal>

      <Modal open={openCartModal} onClose={handleCloseCartModal}>
        <div style={{ width: '50%', margin: '50px auto', backgroundColor: 'white', padding: '16px', borderRadius: '8px', outline: 'none' }}>
          <Typography variant="h5">Cart</Typography>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} style={{ marginBottom: '8px' }}>
                <Typography>{item.name} - ₹{item.price}</Typography>
              </div>
            ))
          ) : (
            <Typography>No items in cart.</Typography>
          )}
          <Button size="small" color="primary" disabled={cartItems.length === 0} style={{ marginTop: '16px' }}>
            Place Order
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Accessories;

