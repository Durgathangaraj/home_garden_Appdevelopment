import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Card, CardContent, Select, MenuItem, FormControl, InputLabel, Paper } from '@mui/material';

const Customize = () => {
  const [flowerOption, setFlowerOption] = useState('');
  const [potOption, setPotOption] = useState('');
  const [cart, setCart] = useState([]);

  const handleFlowerChange = (event) => {
    setFlowerOption(event.target.value);
  };

  const handlePotChange = (event) => {
    setPotOption(event.target.value);
  };

  const handleAddToCart = () => {
    if (flowerOption && potOption) {
      setCart([...cart, { flower: flowerOption, pot: potOption }]);
      alert('Added to cart!');
    } else {
      alert('Please select both flower and pot options.');
    }
  };

  return (
    <div>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Home Garden Customization
        </Typography>
        <Paper style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h4" gutterBottom>
            Customize Your Garden
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Choose Flower
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel>Flower Type</InputLabel>
                    <Select
                      value={flowerOption}
                      onChange={handleFlowerChange}
                    >
                      <MenuItem value="Rose">Rose</MenuItem>
                      <MenuItem value="Tulip">Tulip</MenuItem>
                      <MenuItem value="Lily">Lily</MenuItem>
                    </Select>
                  </FormControl>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Choose Pot Design
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel>Pot Design</InputLabel>
                    <Select
                      value={potOption}
                      onChange={handlePotChange}
                    >
                      <MenuItem value="Ceramic">Ceramic</MenuItem>
                      <MenuItem value="Plastic">Plastic</MenuItem>
                      <MenuItem value="Terracotta">Terracotta</MenuItem>
                    </Select>
                  </FormControl>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={4} marginTop={2}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Review Your Selection
                  </Typography>
                  <Typography variant="body1">
                    Flower: {flowerOption || 'None'}
                  </Typography>
                  <Typography variant="body1">
                    Pot: {potOption || 'None'}
                  </Typography>
                  <Button variant="contained" color="primary" onClick={handleAddToCart}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Customize;
