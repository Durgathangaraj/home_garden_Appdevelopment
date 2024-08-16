// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button, Container, Paper, Typography } from '@mui/material';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get('http://localhost:3002/users');

//       // Find the user with matching email and password
//       const user = response.data.find(
//         (user) => user.email === email && user.password === password
//       );

//       if (user) {
//         console.log('Login successful:', user);
//         setError('');
//         // Redirect to another page or perform any action after successful login
//       } else {
//         setError('Invalid email or password');
//       }
//     } catch (err) {
//       console.error('Error during login:', err);
//       setError('An error occurred during login');
//     }
//   };

//   const Background = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh',
//     width: '100%',
//     backgroundImage: 'url(https://t4.ftcdn.net/jpg/06/18/79/73/240_F_618797399_8few1Po23uzUTQyUld6frmtfeeKGDaKI.jpg)',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//   };

//   return (
//     <div style={Background}>
//       <Container component="main" maxWidth="xs">
//         <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <Typography variant="h5">LOGIN</Typography>
//           <TextField
//             label="Email"
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             label="Password"
//             type="password"
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button variant="contained" color="primary" href="/" fullWidth onClick={handleLogin}>
//             LOGIN
//           </Button>
//           {error && <Typography color="error">{error}</Typography>}
//           <Button color="primary" href="/Registeration" sx={{ mt: 2 }}>
//             <u>DON'T HAVE AN ACCOUNT</u>
//           </Button>
//         </Paper>
//       </Container>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Paper, Typography, Snackbar, Alert } from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false); // Snackbar open state
  const [shouldRedirect, setShouldRedirect] = useState(false); // Redirection state

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:3002/users');

      // Find the user with matching email and password
      const user = response.data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        console.log('Login successful:', user);
        setError('');
        setOpen(true); // Open Snackbar on successful login
        setShouldRedirect(true); // Trigger redirection after Snackbar
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('An error occurred during login');
    }
  };

  const handleClose = () => {
    setOpen(false); // Close Snackbar
  };

  useEffect(() => {
    if (shouldRedirect && !open) {
      navigate('/'); // Redirect to homepage after Snackbar closes
    }
  }, [open, shouldRedirect, navigate]);

  const Background = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
    backgroundImage: 'url(https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <div style={Background}>
      <Snackbar
        open={open}
        autoHideDuration={2000} // Duration for 2 seconds
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
            color: '#fff',
          }}
        >
          Login successful!
        </Alert>
      </Snackbar>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5">LOGIN</Typography>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            LOGIN
          </Button>
          {error && <Typography color="error">{error}</Typography>}
          <Button color="primary" href="/Registeration" sx={{ mt: 2 }}>
            <u>DON'T HAVE AN ACCOUNT?</u>
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
