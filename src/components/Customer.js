
// export default Customer;
// import React, { useState } from 'react';
// import axios from 'axios';

// function Customer() {
//   const [name, setName] = useState('');
//   const [scheduleTime, setScheduleTime] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent the form from submitting the traditional way
//     try {
//       const response = await axios.post('http://localhost:3001/send-email', {
//         name,           // Use the name provided in the form
//         scheduleTime    // Use the scheduled time provided in the form
//       });

//       console.log(response.data);
//       alert('Your request has been sent!');
//     } catch (error) {
//       console.error('Error sending request:', error);
//       alert('There was an error sending your request.');
//     }
//   };

//   return (
//     <div>
//       <h1>Schedule Gardening Service</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Schedule Time:</label>
//           <input
//             type="datetime-local"
//             value={scheduleTime}
//             onChange={(e) => setScheduleTime(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// export default Customer;
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Customer.css'; // Assuming you will use a CSS file for styling

// function Customer() {
//   const [name, setName] = useState('');
//   const [scheduleTime, setScheduleTime] = useState('');
//   const [address, setAddress] = useState('');
//   const [gardener, setGardener] = useState('');
//   const [area, setArea] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');

//   const handleRazorpayPayment = () => {
//     alert('Payment Successful!');
//     // You can integrate Razorpay here for real payment processing
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/send-email', {
//         name,
//         scheduleTime,
//         address,
//         gardener,
//         area,
//         paymentMethod,
//       });

//       console.log(response.data);
//       alert('Your request has been sent!');
//     } catch (error) {
//       console.error('Error sending request:', error);
//       alert('There was an error sending your request.');
//     }
//   };

//   return (
//     <div className="customer-container" style={{ backgroundImage: `url(https://gifdb.com/images/high/happy-emoji-gardening-rose-wigmoar9xnclsrj2.gif)` }}>
//       <h1>Schedule Gardening Service</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Schedule Time:</label>
//           <input
//             type="datetime-local"
//             value={scheduleTime}
//             onChange={(e) => setScheduleTime(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Address:</label>
//           <input
//             type="text"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Select Gardener:</label>
//           <select value={gardener} onChange={(e) => setGardener(e.target.value)} required>
//             <option value="">Select a Gardener</option>
//             <option value="Gardener 1">🌿 Gardener 1</option>
//             <option value="Gardener 2">🌻 Gardener 2</option>
//             <option value="Gardener 3">🌼 Gardener 3</option>
//             <option value="Gardener 4">🌱 Gardener 4</option>
//             <option value="Gardener 5">🍃 Gardener 5</option>
//           </select>
//         </div>
//         <div>
//           <label>Area to be Gardened (in sq. ft.):</label>
//           <input
//             type="number"
//             value={area}
//             onChange={(e) => setArea(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Payment Method:</label>
//           <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
//             <option value="">Select a Payment Method</option>
//             <option value="Cash on Delivery">Cash on Delivery</option>
//             <option value="Razorpay">Online Payment (Razorpay)</option>
//           </select>
//         </div>
//         {paymentMethod === 'Razorpay' && (
//           <div className="razorpay-section">
//             <p>Total Amount: ₹{area * 10}</p> {/* Assuming ₹10 per sq. ft. */}
//             <img src="https://d6xcmfyh68wv8.cloudfront.net/blog-content/uploads/2021/11/UPI-QR-code.png" alt="UPI QR Code" />
//             <button type="button" onClick={handleRazorpayPayment}>Pay Now</button>
//           </div>
//         )}
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// export default Customer;
import React, { useState } from 'react';
import axios from 'axios';
import './Customer.css'; // Import the CSS file

function Customer() {
  const [name, setName] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [address, setAddress] = useState('');
  const [gardener, setGardener] = useState('');
  const [area, setArea] = useState('');
  const [paymentOption, setPaymentOption] = useState('');
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const totalAmount = 1000; // Example amount; you can calculate based on the area

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/send-email', {
        name,
        scheduleTime,
        address,
        gardener,
        area,
        paymentOption,
        totalAmount
      });

      console.log(response.data);
      alert('Your request has been sent!');
    } catch (error) {
      console.error('Error sending request:', error);
      alert('There was an error sending your request.');
    }
  };

  const handlePayment = () => {
    // Simulate a successful payment
    setIsPaymentSuccessful(true);
    setTimeout(() => setIsPaymentSuccessful(false), 3000); // Hide notification after 3 seconds
  };

  return (
    <div className="customer-container">
      <h1 className="header">Gardening Service</h1>
      <form onSubmit={handleSubmit} className="customer-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Schedule Time:</label>
          <input
            type="datetime-local"
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Select Gardener:</label>
          <select value={gardener} onChange={(e) => setGardener(e.target.value)} required>
            <option value="">Select a gardener</option>
            <option value="Gardener 1">Gardener 1</option>
            <option value="Gardener 2">Gardener 2</option>
            <option value="Gardener 3">Gardener 3</option>
            <option value="Gardener 4">Gardener 4</option>
            <option value="Gardener 5">Gardener 5</option>
          </select>
        </div>
        <div className="form-group">
          <label>Area to be Gardened (in sq. ft.):</label>
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Payment Option:</label>
          <select value={paymentOption} onChange={(e) => setPaymentOption(e.target.value)} required>
            <option value="">Select payment option</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Razorpay">Razorpay</option>
          </select>
        </div>
        
        {paymentOption === 'Razorpay' && (
          <div className="payment-section">
            <p>Total Amount: <span className="amount">₹{totalAmount}</span></p>
            <img src="https://d6xcmfyh68wv8.cloudfront.net/blog-content/uploads/2021/11/UPI-QR-code.png" alt="UPI QR Code" className="upi-qr" />
            <button type="button" onClick={handlePayment} className="pay-now-button">
              Pay Now
            </button>
          </div>
        )}
        
        <button type="submit" className="submit-button">
          Send
        </button>
      </form>

      {isPaymentSuccessful && (
        <div className="notification">
          Payment Successful!
        </div>
      )}
    </div>
  );
}

export default Customer;
