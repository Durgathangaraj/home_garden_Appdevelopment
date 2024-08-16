// import React, { useState } from 'react';
// import { TextField, Button, Container, Paper, Typography } from '@mui/material';
// import axios from 'axios';

// const Registeration = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleRegister = async () => {
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:3002/users', {
//         firstName,
//         lastName,
//         email,
//         password,
//       });
//       // Handle successful registration
//       setSuccess('Registration successful');
//       console.log('Registration successful:', response.data);
//     } catch (err) {
//       // Handle error
//       setError('Registration failed');
//       console.error(err);
//     }
//   };

//   const Background = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100vh",
//     width: "100%",
//     backgroundImage: "url(https://static6.depositphotos.com/1017817/585/i/450/depositphotos_5850015-stock-photo-spring-background-with-daisies.jpg)",
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//   };

//   return (
//     <div style={Background}>
//       <Container component="main" maxWidth="xs">
//         <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <Typography variant="h5">SIGNUP</Typography>
//           <TextField
//             label="First Name"
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             required
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//           <TextField
//             label="Last Name"
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             required
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//           <TextField
//             label="Email Address"
//             type="email"
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             label="Password"
//             type="password"
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <TextField
//             label="Confirm Password"
//             type="password"
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             required
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
//             SIGNUP
//           </Button>
//           {error && <Typography color="error">{error}</Typography>}
//           {success && <Typography color="success.main">{success}</Typography>}
//           <Button color="primary" href="/Login" sx={{ mt: 2 }}>
//             <u>ALREADY HAVE AN ACCOUNT?</u>
//           </Button>
//         </Paper>
//       </Container>
//     </div>
//   );
// };

import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography, Snackbar, Alert } from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import axios from 'axios';

const Registeration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // Use boolean for success
  const [open, setOpen] = useState(false); // Snackbar open state

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3002/users', {
        firstName,
        lastName,
        email,
        password,
      });
      // Handle successful registration
      setSuccess(true);
      setOpen(true); // Open Snackbar on success
      console.log('Registration successful:', response.data);
    } catch (err) {
      // Handle error
      setError('Registration failed');
      console.error(err);
    }
  };

  const handleClose = () => {
    setOpen(false); // Close Snackbar
  };

  const Background = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100%",
    backgroundImage: "url(https://static6.depositphotos.com/1017817/585/i/450/depositphotos_5850015-stock-photo-spring-background-with-daisies.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div style={Background}>
      <Snackbar
        open={open}
        autoHideDuration={2000} // Set auto-hide duration to 2 seconds
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Position at the top-right corner
      >
        <Alert
          icon={<CheckCircleIcon fontSize="inherit" sx={{ color: '#fff' }} />} // White check icon
          onClose={handleClose}
          severity="success"
          sx={{
            width: '100%',
            backgroundColor: 'green',
            backgroundSize: 'cover',
            color: '#fff',
          }}
        >
          Registration successful!
        </Alert>
      </Snackbar>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5">SIGNUP</Typography>
          <TextField
            label="First Name"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="Email Address"
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
            SIGNUP
          </Button>
          {error && <Typography color="error">{error}</Typography>}
          <Button color="primary" href="/Login" sx={{ mt: 2 }}>
            <u>ALREADY HAVE AN ACCOUNT?</u>
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default Registeration;

