import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Card, CardContent } from '@mui/material';
import { yellow, grey } from '@mui/material/colors';
import bgimg from "../bgimg.jpeg"
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        // Handle login logic (API calls, validation, etc.)
    };

    return (
        <div
            style={{
                height: '100vh',
                width: '100%',
                padding: 0,
                margin: 0,
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `url(${bgimg})`,
                backgroundSize: 'cover', // Ensures the background image covers the full screen
                backgroundPosition: 'center', // Centers the background image
                backgroundAttachment: 'fixed', // Optional: Keep background fixed on scroll
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {/* Background Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better contrast
                    zIndex: -1, // Ensure the overlay is behind the content
                }}
            />

            <Card
                sx={{
                    width: '100%',
                    maxWidth: 400,
                    padding: 3,
                    marginLeft: '100px',
                    borderRadius: 2,
                    backgroundColor: 'transparent',
                    boxShadow: 3,
                    zIndex: 1, // Ensure card is on top of the overlay
                }}
            >
                <CardContent>
                    <Typography component="h1" variant="h5" align="center" sx={{ marginBottom: 2, color: 'white' }}>
                        Sign In
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            InputLabelProps={{
                                style: {
                                    color: yellow[500], // Custom label color
                                    fontSize: '1rem', // Change font size
                                    fontWeight: 'bold', // Make the label bold
                                },
                            }}
                            autoFocus
                            sx={{
                                '& .MuiInputLabel-root': {
                                    color: yellow[500], // Yellow label for better visibility
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: grey[300], // Light gray border color
                                    },
                                    '&:hover fieldset': {
                                        borderColor: yellow[500], // Yellow border on hover
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: yellow[500], // Yellow border on focus
                                    },
                                    '& input': {
                                        color: 'white', // White text color inside input
                                    }
                                },
                            }}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="email"
                            autoFocus
                            InputLabelProps={{
                                style: {
                                    color: yellow[500], // Custom label color
                                    fontSize: '1rem', // Change font size
                                    fontWeight: 'bold', // Make the label bold
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: grey[300], // Light gray border color
                                    },
                                    '&:hover fieldset': {
                                        borderColor: yellow[500], // Yellow border on hover
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: yellow[500], // Yellow border on focus
                                    },
                                    '& input': {
                                        color: 'white', // White text color inside input
                                    },
                                },
                            }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                backgroundColor: "#00aff4", // Yellow background for the button

                            }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
};

export default LoginPage;