import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, AppBar, Toolbar } from '@mui/material';
// import logo from './logo.png'; // Assuming the logo.png is in the same directory as Chatbox.js


const predefinedResponses = {
  "hello": "Hi there! Welcome to Home Garden Emporium. How can we assist you today?",
  "what is home garden emporium?": "Home Garden Emporium is your one-stop shop for all gardening needs. We offer a wide range of plants, seeds, gardening tools, and accessories.",
  "what products do you offer?": "We offer a variety of products including seeds, plants, gardening tools, soil, pots, and fertilizers.",
  "how can I contact you?": "You can contact us via email at support@homegardenemporium.com or call us at (123) 456-7890.",
  "what are your store hours?": "Our store hours are Monday to Saturday, 9 AM to 6 PM. We are closed on Sundays.",
  "where are you located?": "We are located at 123 Garden Lane, Green City, GC 12345.",
  "do you offer delivery?": "Yes, we offer delivery within a 20-mile radius of our store.",
  "what is your return policy?": "We accept returns within 30 days of purchase with a receipt. Please visit our store for more details.",
  "can I order online?": "Yes, you can place an order online through our website.",
  "do you have gift cards?": "Yes, we offer gift cards in various denominations. You can purchase them in-store or online.",
  "are there any discounts?": "We offer seasonal discounts and promotions. Check our website or visit us in-store for current offers.",
  "can I track my order?": "Yes, once your order is shipped, you will receive a tracking number via email.",
  "how do I care for my plants?": "Plant care varies by species. Please refer to our care guides or ask in-store for specific advice.",
  "do you offer gardening workshops?": "Yes, we offer various gardening workshops throughout the year. Check our website for the schedule.",
  "what are your most popular products?": "Our most popular products include succulents, rose bushes, and high-quality gardening tools.",
  "do you sell plant fertilizers?": "Yes, we offer a range of plant fertilizers for different types of plants.",
  "can I get a refund?": "Refunds are available within 30 days of purchase with a receipt. Please contact us for more details.",
  "what types of seeds do you sell?": "We sell vegetable seeds, flower seeds, and herb seeds.",
  "do you have organic products?": "Yes, we offer a selection of organic seeds, fertilizers, and gardening supplies.",
  "what is the best soil for indoor plants?": "We recommend using a well-draining potting mix for indoor plants.",
  "do you offer custom plant arrangements?": "Yes, we can create custom plant arrangements for special occasions. Contact us for more details.",
  "can I bring my own pots?": "Yes, you can bring your own pots for repotting. We also offer a wide selection of pots for purchase.",
  "how often should I water my plants?": "Watering frequency depends on the plant type and environmental conditions. Refer to our care guides for specific recommendations.",
  "do you have outdoor furniture?": "We focus on gardening supplies and do not carry outdoor furniture. However, we have a variety of outdoor decor items.",
  "what is the best time to plant tomatoes?": "Tomatoes should be planted after the last frost when the soil temperature is consistently warm.",
  "do you sell gardening tools?": "Yes, we offer a range of gardening tools including trowels, pruners, and watering cans.",
  "can I visit your store?": "Yes, we welcome visitors to our store during our operating hours. We look forward to seeing you!",
  "do you have plant care products?": "Yes, we have a variety of plant care products including pest control, plant food, and soil enhancers.",
  "what are your payment methods?": "We accept cash, credit/debit cards, and mobile payments.",
  
};

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '' || messages.length >= 100) return; 

    
    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    const responseText = predefinedResponses[input.toLowerCase()] || predefinedResponses["default"];
    const aiMessage = { text: responseText, sender: 'ai' };
    
    
    setMessages([...messages, userMessage, aiMessage]);
    setInput('');
  };

  return (
    <div style={{ backgroundImage: 'url(https://i.pinimg.com/564x/09/08/cd/0908cdf2317df8d779996c09947bc0fb.jpg)', backgroundSize: 'cover', minHeight: '100vh' }}>
      <AppBar position="static" style={{ backgroundColor: '#4CAF50' }}>
        <Toolbar>
          {/* <img src={logo} alt="Home Garden Emporium Logo" style={{ height: '40px' }} /> */}
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
            Home Garden Emporium Chatbox
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper style={{ padding: '16px', maxWidth: '500px', margin: '50px auto', position: 'relative', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <Typography variant="h6">Chat with us!</Typography>
        <div style={{ maxHeight: '300px', overflowY: 'scroll', marginBottom: '16px', padding: '10px' }}>
          {messages.map((msg, index) => (
            <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '10px 0' }}>
              <Typography
                variant="body1"
                style={{
                  display: 'inline-block',
                  padding: '10px',
                  borderRadius: '15px',
                  backgroundColor: msg.sender === 'user' ? '#e0f7fa' : '#c8e6c9',
                  color: '#000'
                }}
              >
                {msg.text}
              </Typography>
            </div>
          ))}
        </div>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
          placeholder="Type your message..."
          variant="outlined"
          size="small"
        />
        <Button onClick={handleSend} variant="contained" color="primary" fullWidth style={{ marginTop: '8px'  }}
        >
          Send
        </Button>
      </Paper>
    </div>
  );
};

export default Chatbox;
