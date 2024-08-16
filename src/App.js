

import React from 'react';
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom';
import Login from './components/Login';
import Registeration from './components/Registeration';
//import MasonryImageList from './components/MasonryImageList';
import ResponsiveAppBar from './components/Home';
import GardeningPage from './components/GardeningPage';
import PlantCare from './components/PlantCare';
import ContactUs from './components/ContactUs';

 // Ensure this matches the renamed file

import CurrentLocation from './components/CurrentLocation';
import Watering from './components/Watering';
import Floweringplants from './components/Floweringplants';
import AboutUs from './components/AboutUs';
import SoilAndFertilizers from './components/SoilAndFertilizers';
import Faq from './components/Faq';
import Seeds from './components/Seeds';
import Chatbox from './components/Chatbox';
import Accessories from './components/Accessories';
import Customer from './components/Customer';
import Customize from './components/Customize';







function App()
{
  return(
      <Router>
    <div className="App">
     
       <Routes>

        <Route path="/" element ={<ResponsiveAppBar/>}/>
        <Route path="/gardening"element ={<GardeningPage/>}/>
        
        <Route path="/login"element ={<Login/>}/>
        <Route path="/Registeration" element ={<Registeration/>}/>
        <Route path="/cl" element ={<CurrentLocation/>}/>
        <Route path="/pl" element ={<PlantCare/>}/>
        <Route path="/fp" element ={<Floweringplants/>}/>
        <Route path="/w" element ={<Watering/>}/>
        <Route path="/about" element ={<AboutUs/>}/>
        <Route path="/sf" element ={<SoilAndFertilizers/>}/>
        <Route path="/contact" element ={<ContactUs/>}/>
        <Route path="/faq" element ={<Faq/>}/>
        <Route path="/seeds" element ={<Seeds/>}/>
        <Route path="/cb" element ={<Chatbox/>}/>
        <Route path="/c" element ={<Customer/>}/>
        
        
        <Route path="/w" element ={<Watering/>}/>
        <Route path="/ac" element ={<Accessories/>}/>
        <Route path="/cus" element ={<Customize/>}/>
        {/* <Route path="/sf" element ={<Soil/>}/> */}
        
    
       </Routes>
       
    </div>
      </Router>
      
       // <Route path"/m"element ={<ResponsiveAppBar/>}/>
  );
}
export default App;