import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  ListItem,
  ListItemText,
  List,
  Link,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Modal,
  TextField,
  IconButton,
  Paper,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import FilterListIcon from "@mui/icons-material/FilterList";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// Sample seeds data
const seedsData = [
    // Vegetables
    {
      id: 1,
      name: "Tomato",
      category: "Vegetables",
      image: "https://tse2.mm.bing.net/th?id=OIP.hD-CreJpkei8Q-WmfC4ssQHaE7&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Moderate",
      growthTime: "6-8 weeks",
      nutrition: "Rich in Vitamin C and K",
    },
    {
      id: 2,
      name: "Carrot",
      category: "Vegetables",
      image: "https://tse3.mm.bing.net/th?id=OIP.Rr-2sBBGnW2LPw3cjiBzYAHaE8&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Light",
      growthTime: "8-10 weeks",
      nutrition: "High in beta-carotene, fiber, and antioxidants",
    },
    {
      id: 3,
      name: "Lettuce",
      category: "Vegetables",
      image: "https://tse3.mm.bing.net/th?id=OIP.jW7lJnV5dxLp7kUv6yO13AHaFj&pid=Api&P=0&h=180",
      sunlight: "Partial Sun",
      water: "Regular",
      growthTime: "6-8 weeks",
      nutrition: "Low in calories, good source of Vitamin A and K",
    },
    {
      id: 4,
      name: "Bell Pepper",
      category: "Vegetables",
      image: "https://tse3.mm.bing.net/th?id=OIP.Md0qz36xnUqB9vERywbGrgHaE7&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Moderate",
      growthTime: "10-12 weeks",
      nutrition: "Rich in Vitamin C and antioxidants",
    },
    {
      id: 5,
      name: "Cucumber",
      category: "Vegetables",
      image: "https://tse2.mm.bing.net/th?id=OIP.cpLNEUYEpAr4L7GqxdJwnwHaHa&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Regular",
      growthTime: "8-10 weeks",
      nutrition: "Hydrating, good source of Vitamin K",
    },
    {
      id: 6,
      name: "Spinach",
      category: "Vegetables",
      image: "https://tse2.mm.bing.net/th?id=OIP.-7iMFYMkwiQHove_mZ_wOQHaD4&pid=Api&P=0&h=180",
      sunlight: "Partial Sun",
      water: "Regular",
      growthTime: "6-8 weeks",
      nutrition: "Rich in iron, calcium, and Vitamin A",
    },
    // Fruits
    {
      id: 7,
      name: "Strawberry",
      category: "Fruits",
      image: "https://www.thespruce.com/thmb/X49OaQM4f-JuhqOoXrl8nip1tIk=/5400x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grow-strawberries-from-seed-2539934-01-73c138a5c3454c41b285a56c9807ad01.jpg",
      sunlight: "Full Sun",
      water: "Regular",
      growthTime: "6-8 weeks",
      nutrition: "Rich in Vitamin C, fiber, and antioxidants",
    },
    {
      id: 8,
      name: "Apple",
      category: "Fruits",
      image: "https://tse3.mm.bing.net/th?id=OIP.leZGpAF8KjMsLurSr5kdhwHaE5&pid=Api&P=0&h=180",
      
      sunlight: "Full Sun",
      water: "Regular",
      growthTime: "8-12 weeks",
      nutrition: "Good source of fiber and Vitamin C",
    },
    {
      id: 9,
      name: "Blueberry",
      category: "Fruits",
      image: "https://tse1.mm.bing.net/th?id=OIP.oi3Yh-thDoljGupvfYyyJQHaHa&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Regular",
      growthTime: "10-14 weeks",
      nutrition: "High in antioxidants and Vitamin C",
    },
    {
      id: 10,
      name: "Grapes",
      category: "Fruits",
      image: "https://tse1.mm.bing.net/th?id=OIP.n8He1pjlDxTkIPoPmWeitwHaE8&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Moderate",
      growthTime: "8-12 weeks",
      nutrition: "Rich in Vitamin C and K, good source of antioxidants",
    },
    {
      id: 11,
      name: "Lemon",
      category: "Fruits",
      image: "https://tse3.mm.bing.net/th?id=OIP.k1p7DUm8tyYWWEkmeXH08wHaE8&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Moderate",
      growthTime: "8-12 weeks",
      nutrition: "High in Vitamin C and antioxidants",
    },
    {
      id: 12,
      name: "Watermelon",
      category: "Fruits",
      image: "https://tse3.mm.bing.net/th?id=OIP.VdaXEGlRmCE9S9a2K-C7yAHaE8&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Regular",
      growthTime: "12-16 weeks",
      nutrition: "Hydrating, good source of Vitamin C",
    },
    // Herbs
    {
      id: 13,
      name: "Basil",
      category: "Herbs",
      image: "https://tse3.mm.bing.net/th?id=OIP.S2iyIgFg4wLmM64kn-TGwwAAAA&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Regular",
      growthTime: "6-8 weeks",
      nutrition: "Rich in Vitamin K and A, antioxidant properties",
    },
    {
      id: 14,
      name: "Mint",
      category: "Herbs",
      image: "https://tse2.mm.bing.net/th?id=OIP.1yZZJuKsmZR7wSh5jAaNPwHaE8&pid=Api&P=0&h=180",
      sunlight: "Partial Sun",
      water: "Regular",
      growthTime: "8-10 weeks",
      nutrition: "Good source of Vitamin A, aids digestion",
    },
    {
      id: 15,
      name: "Rosemary",
      category: "Herbs",
      image: "https://tse1.mm.bing.net/th?id=OIP._1WjVUnLCxab1_xX_JhhSwHaGw&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Moderate",
      growthTime: "10-12 weeks",
      nutrition: "Rich in antioxidants and anti-inflammatory compounds",
    },
    {
      id: 16,
      name: "Thyme",
      category: "Herbs",
      image: "https://tse3.mm.bing.net/th?id=OIP.NvE8thKcnCSiZl5oGg6F5AHaHa&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Moderate",
      growthTime: "8-10 weeks",
      nutrition: "Good source of Vitamin C and A, has antiseptic properties",
    },
    {
      id: 17,
      name: "Cilantro",
      category: "Herbs",
      image: "https://tse1.mm.bing.net/th?id=OIP.CubcBB9nMhRWLRqRJ7KFqAHaEK&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Regular",
      growthTime: "6-8 weeks",
      nutrition: "Rich in Vitamin K, aids digestion",
    },
    {
      id: 18,
      name: "Parsley",
      category: "Herbs",
      image: "https://tse4.mm.bing.net/th?id=OIP.a6x36TY39G3zizFdWn5DTgHaHa&pid=Api&P=0&h=180",
      sunlight: "Partial Sun",
      water: "Regular",
      growthTime: "6-8 weeks",
      nutrition: "High in Vitamin K, C, and A",
    },
    // Microgreens
    {
      id: 19,
      name: "Sunflower Microgreens",
      category: "Microgreens",
      image: "https://tse2.mm.bing.net/th?id=OIP.JR6hUbPjLR69LROapU-l2gHaE8&pid=Api&P=0&h=180",
      sunlight: "Partial Sun",
      water: "Light",
      growthTime: "2-3 weeks",
      nutrition: "Rich in protein, vitamins, and minerals",
    },
    {
      id: 20,
      name: "Radish Microgreens",
      category: "Microgreens",
      image: "https://tse2.mm.bing.net/th?id=OIP.Xn6-TMa9R5alxTlD9qVZHQHaHa&pid=Api&P=0&h=180",
      sunlight: "Partial Sun",
      water: "Light",
      growthTime: "2-3 weeks",
      nutrition: "High in Vitamin C, aids digestion",
    },
    {
      id: 21,
      name: "Broccoli Microgreens",
      category: "Microgreens",
      image: "https://tse1.mm.bing.net/th?id=OIP.QDDBkNOL7XlcMG0iUnlaywHaFk&pid=Api&P=0&h=180",
      sunlight: "Partial Sun",
      water: "Light",
      growthTime: "2-3 weeks",
      nutrition: "Rich in vitamins and antioxidants",
    },
    {
      id: 22,
      name: "Pea Shoots",
      category: "Microgreens",
      image: "https://tse1.mm.bing.net/th?id=OIP.mv1IWwBX23x3I1HbybKwKgHaEZ&pid=Api&P=0&h=180",
      sunlight: "Partial Sun",
      water: "Light",
      growthTime: "2-3 weeks",
      nutrition: "Good source of vitamins A, C, and K",
    },
    {
      id: 23,
      name: "Wheatgrass",
      category: "Microgreens",
      image: "https://tse1.mm.bing.net/th?id=OIP.xO0Uv6v6Y97E5lmG6Ed4KQHaD-&pid=Api&P=0&h=180",
      sunlight: "Partial Sun",
      water: "Light",
      growthTime: "2-3 weeks",
      nutrition: "High in vitamins and chlorophyll",
    },
    {
      id: 24,
      name: "Arugula Microgreens",
      category: "Microgreens",
      image: "https://tse1.mm.bing.net/th?id=OIP.XlptfkyfCf5e0VCwg44SsgHaFj&pid=Api&P=0&h=180",
      sunlight: "Partial Sun",
      water: "Light",
      growthTime: "2-3 weeks",
      nutrition: "Rich in vitamins and minerals",
    },
    // Trees
    {
      id: 25,
      name: "Maple",
      category: "Trees",
      image: "https://tse4.mm.bing.net/th?id=OIP.2snWAzF-MHdWNMLyCqJnbAHaE8&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Moderate",
      growthTime: "2-3 years",
      nutrition: "Provides maple syrup",
    },
    {
      id: 26,
      name: "Oak",
      category: "Trees",
      image: "https://tse4.mm.bing.net/th?id=OIP.iNRzGYq7xENek07SjGX17AHaFj&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Moderate",
      growthTime: "5-10 years",
      nutrition: "Provides acorns",
    },
    {
      id: 27,
      name: "Pine",
      category: "Trees",
      image: "https://tse3.mm.bing.net/th?id=OIP.i8AjhwegR6uHgZaEKPM4KwHaFj&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Light",
      growthTime: "3-5 years",
      nutrition: "Provides pine nuts",
    },
    {
      id: 28,
      name: "Cherry",
      category: "Trees",
      image: "https://tse3.mm.bing.net/th?id=OIP.U_bcJPIO-_dTBUiG49cOAwHaFj&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Regular",
      growthTime: "3-5 years",
      nutrition: "Produces cherries, rich in antioxidants",
    },
    {
      id: 29,
      name: "Apple",
      category: "Trees",
      image: "https://tse2.mm.bing.net/th?id=OIP.fYAtST1xlEq7zZeJqPdobAHaF7&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Regular",
      growthTime: "3-5 years",
      nutrition: "Produces apples, good source of fiber and Vitamin C",
    },
    {
      id: 30,
      name: "Peach",
      category: "Trees",
      image: "https://tse4.mm.bing.net/th?id=OIP.ovSYytHb3Ok4o41uQiR9GAHaE8&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Regular",
      growthTime: "3-5 years",
      nutrition: "Produces peaches, rich in vitamins and minerals",
    },
    // Grass
    {
      id: 31,
      name: "Kentucky Bluegrass",
      category: "Grass",
      image: "https://tse2.mm.bing.net/th?id=OIP.5EmqPEC7AdFVhwtWV-MwSgHaE8&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Regular",
      growthTime: "6-8 weeks",
      nutrition: "Used for lawns and pastures",
    },
    {
      id: 32,
      name: "Bermudagrass",
      category: "Grass",
      image: "https://tse4.mm.bing.net/th?id=OIP.7ErUeAN2ltgLkytzxnXlbAHaED&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Moderate",
      growthTime: "6-8 weeks",
      nutrition: "Used for lawns and pastures",
    },
    {
      id: 33,
      name: "Zoysia Grass",
      category: "Grass",
      image: "https://tse1.mm.bing.net/th?id=OIP.qgiRM9bB3UjFhS1ttFYpKgHaEz&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Moderate",
      growthTime: "6-8 weeks",
      nutrition: "Used for lawns and pastures",
    },
    {
      id: 34,
      name: "Fescue",
      category: "Grass",
      image: "https://tse4.mm.bing.net/th?id=OIP.6306BQMRqX_KFY4zZ7-kTAHaHa&pid=Api&P=0&h=180",
      sunlight: "Partial Sun",
      water: "Regular",
      growthTime: "6-8 weeks",
      nutrition: "Used for lawns and pastures",
    },
    {
      id: 35,
      name: "Ryegrass",
      category: "Grass",
      image: "https://tse1.mm.bing.net/th?id=OIP.wC0EJCIHPWs-Gi5_IUZ0owHaHa&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Regular",
      growthTime: "6-8 weeks",
      nutrition: "Used for lawns and pastures",
    },
    {
      id: 36,
      name: "Buffalo Grass",
      category: "Grass",
      image: "https://tse4.mm.bing.net/th?id=OIP.LKqiDGMgcljHEmduspuVlgHaE8&pid=Api&P=0&h=180",
      sunlight: "Full Sun",
      water: "Light",
      growthTime: "6-8 weeks",
      nutrition: "Used for lawns and pastures",
    },
  ];
  

const Seeds = () => {
    const Seeds = () => {
        console.log("Rendering Seeds component"); // Add this to check if the component is rendering
      
        // Rest of the code
      };
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedSeed, setSelectedSeed] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      const fetchCartItems = async () => {
          try {
              const cartSnapshot = await getDocs(collection(db, "cart"));
        const cartList = cartSnapshot.docs.map(doc => doc.data());
        setCartItems(cartList);
      } catch (error) {
          console.error("Error fetching cart items: ", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleViewChange = (viewType) => {
      setView(viewType);
  };

  const handleSearchChange = (e) => {
      setSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
      setFilter(e.target.value);
  };

  const handleSeedClick = (seed) => {
    setSelectedSeed(seed);
  };

  const handleCloseModal = () => {
    setSelectedSeed(null);
  };

  const handleAddToCart = async (seed) => {
    try {
      console.log("Adding to cart:", seed);
      await addDoc(collection(db, "cart"), {
        seedId: seed.id,
        name: seed.name,
        category: seed.category,
    });
      alert(`${seed.name} has been added to the cart!`);
      
      // Update cart items
      const updatedCartSnapshot = await getDocs(collection(db, "cart"));
      const updatedCartList = updatedCartSnapshot.docs.map(doc => doc.data());
      setCartItems(updatedCartList);
    } catch (error) {
      console.error("Error adding to cart: ", error.message); // Log error message
      alert("Failed to add to cart. Please check the console for details.");
    }
  };
  

  const handleCartClick = () => {
      navigate('/cart'); // Navigate to the cart page
  };

  const filteredSeeds = seedsData.filter(
    (seed) =>
      seed.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "" || seed.category === filter)
  );

  return (
          <div style={{ 
              backgroundImage: 'url("https://moellerip.com/wp-content/uploads/2021/07/bigstock-Development-Of-Seedling-Growth-274172959.jpg")', 
              
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              minHeight: '100vh', 
              paddingBottom: '4rem' 
            }}>
    <Container maxWidth="lg" sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Floral Fantasy
      </Typography>
      <AppBar position="static" sx={{ marginBottom: 2 }}
      style={{ backgroundColor: 'rgba(0, 100, 0, 0.8)' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Seeds
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
            sx={{ marginLeft: 2, flex: 1 }}
          />
          <IconButton onClick={() => handleViewChange("grid")}>
            <ViewModuleIcon />
          </IconButton>
          <IconButton onClick={() => handleViewChange("list")}>
            <ViewListIcon />
          </IconButton>
          <IconButton onClick={handleCartClick} sx={{ marginLeft: 2 }}>
            <ShoppingCartIcon />
            <Typography variant="caption" sx={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '0.75rem' }}>
              {cartItems.length}
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Grid container alignItems="center">
          <FilterListIcon sx={{ marginRight: 1 }} />
          <Typography variant="h6" sx={{ marginRight: 2 }}>
            Filter By:
          </Typography>
          <Select value={filter} onChange={handleFilterChange} sx={{ minWidth: 200 }}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Vegetables">Vegetables</MenuItem>
            <MenuItem value="Herbs">Herbs</MenuItem>
            <MenuItem value="Fruits">Fruits</MenuItem>
            <MenuItem value="Microgreens">Microgreens</MenuItem>
            <MenuItem value="Trees">Trees</MenuItem>
            <MenuItem value="Grass">Grass</MenuItem>
          </Select>
        </Grid>
      </Paper>
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {filteredSeeds.map((seed) => (
          <Grid
            item
            xs={view === "grid" ? 4 : 12}
            key={seed.id}
            onClick={() => handleSeedClick(seed)}
          >
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={seed.image}
                alt={seed.name}
              />
              <CardContent>
                <Typography variant="h5">{seed.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {seed.category}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleAddToCart(seed)}
                    >
                  Buy
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedSeed && (
        <Modal open={Boolean(selectedSeed)} onClose={handleCloseModal}>
          <Paper sx={{ margin: "auto", padding: 2, maxWidth: 600 }}>
            <Typography variant="h4">{selectedSeed.name}</Typography>
            <img src={selectedSeed.image} alt={selectedSeed.name} width="100%" />
            <Typography variant="h6">Category: {selectedSeed.category}</Typography>
            <Typography>Sunlight: {selectedSeed.sunlight}</Typography>
            <Typography>Water: {selectedSeed.water}</Typography>
            <Typography>Growth Time: {selectedSeed.growthTime}</Typography>
            <Typography>Nutrition: {selectedSeed.nutrition}</Typography>
            <Button onClick={handleCloseModal}>Close</Button>
          </Paper>
        </Modal>
      )}
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
};

export default Seeds;
