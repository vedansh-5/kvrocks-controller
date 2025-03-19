'use client'; // Add this at the top to mark it as a client component

/* 
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License. 
 */

import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Home, Dashboard, Storage, MenuBook, DarkMode, LightMode, GitHub } from '@mui/icons-material';
import { createContext, useState, useEffect, useContext } from 'react';

// Create a context for dark mode state
export const DarkModeContext = createContext({
    isDarkMode: false,
    toggleDarkMode: () => {}
});

// Custom hook to use the dark mode context
export const useDarkMode = () => useContext(DarkModeContext);

const links = [
    {
        url: 'https://github.com/apache/kvrocks-controller/wiki',
        title: 'Documentation',
        _blank: true
    },
    {
        url: '/namespaces',
        title: 'Namespaces',
    },
    {
        url: '/dashboard',
        title: 'Dashboard',
    },
    {
        url: '/',
        title: 'Home',
    }
];

// DarkModeProvider component
export function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    
    // Load saved preference on mount
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(savedDarkMode);
        
        // Apply dark mode to document if enabled
        if (savedDarkMode) {
            document.documentElement.classList.add('dark-mode');
            document.body.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
            document.body.classList.remove('dark-mode');
        }
    }, []);
    
    const toggleDarkMode = () => {
        setIsAnimating(true);
        
        setTimeout(() => {
            setIsDarkMode(prevMode => {
                const newMode = !prevMode;
                
                // Save preference
                localStorage.setItem('darkMode', String(newMode));
                
                // Apply to document
                if (newMode) {
                    document.documentElement.classList.add('dark-mode');
                    document.body.classList.add('dark-mode');
                } else {
                    document.documentElement.classList.remove('dark-mode');
                    document.body.classList.remove('dark-mode');
                }
                
                return newMode;
            });
            
            setTimeout(() => {
                setIsAnimating(false);
            }, 300);
        }, 100);
    };
    
    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

export default function Banner() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [isAnimating, setIsAnimating] = useState(false);
    
    const handleToggle = () => {
        setIsAnimating(true);
        toggleDarkMode();
        setTimeout(() => {
            setIsAnimating(false);
        }, 400);
    };

    return (
        <AppBar 
            position="static" 
            color="default" 
            elevation={0} 
            sx={{ 
                backgroundColor: isDarkMode ? '#020c1b' : 'white', // Darker blue background
                borderBottom: `1px solid ${isDarkMode ? '#112240' : '#eaeaea'}`,
                boxShadow: isDarkMode ? '0 2px 12px rgba(0, 0, 0, 0.5)' : '0 2px 8px rgba(0, 0, 0, 0.08)',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
                    {/* Left side: Logo and title */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Image src="/logo.svg" width={40} height={40} alt='Apache Kvrocks Logo' style={{ marginRight: '12px' }} />
                        <Typography 
                            variant="h6" 
                            component="div" 
                            sx={{ 
                                fontWeight: 600, 
                                color: isDarkMode ? '#ffffff' : 'black', // Pure white in dark mode
                                fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                display: { xs: 'none', sm: 'block' },
                                '&:hover': {
                                    color: isDarkMode ? '#64ffda' : '#0d47a1',
                                },
                                transition: 'color 0.3s ease'
                            }}
                        >
                            Kvrocks Controller
                        </Typography>
                    </Box>

                    {/* Right side: Navigation links and icons */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
                        {/* Navigation Links - Ordered as requested: Home, Dashboard, Namespaces, Documentation */}
                        {[...links].reverse().map((link, index) => (
                            <Box 
                                component={Link}
                                href={link.url}
                                key={index}
                                target={link._blank ? "_blank" : "_self"}
                                sx={{
                                    color: isDarkMode ? '#ffffff' : 'black', // Pure white in dark mode
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 0.5,
                                    px: { xs: 0.5, sm: 1.5 },
                                    py: 1,
                                    fontSize: { xs: '0.875rem', sm: '1rem' },
                                    position: 'relative',
                                    '&:hover': {
                                        color: '#64ffda', // Same teal color for both modes
                                    },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        width: '0',
                                        height: '2px',
                                        bottom: '0',
                                        left: '0',
                                        backgroundColor: '#64ffda', // Same teal color for both modes
                                        transition: 'width 0.3s ease-in-out',
                                        marginLeft: { xs: '0.5px', sm: '1.5px' }
                                    },
                                    '&:hover::after': {
                                        width: 'calc(100% - 16px)'  // Adjusting for padding
                                    },
                                    transition: 'color 0.3s ease'
                                }}
                            >
                                <Typography sx={{ 
                                    display: { xs: 'none', md: 'block' },
                                    color: 'inherit'
                                }}>
                                    {link.title}
                                </Typography>
                            </Box>
                        ))}

                        {/* Dark Mode Toggle with Animated Icon Change */}
                        <IconButton 
                            color="primary" 
                            onClick={handleToggle}
                            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                            sx={{ 
                                color: isDarkMode ? '#ffffff' : 'black', // Pure white in dark mode
                                position: 'relative',
                                '&:hover': { color: '#64ffda' }, // Same teal color for both modes
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '0',
                                    height: '2px',
                                    bottom: '5px',
                                    left: '25%',
                                    backgroundColor: '#64ffda', // Same teal color for both modes
                                    transition: 'width 0.3s ease-in-out'
                                },
                                '&:hover::after': {
                                    width: '50%'
                                },
                                transition: 'color 0.3s ease',
                                pointerEvents: isAnimating ? 'none' : 'auto'
                            }}
                        >
                            {/* Animated icon container */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    animation: isAnimating 
                                        ? 'iconSpin 0.4s ease-in-out' 
                                        : 'none',
                                    '@keyframes iconSpin': {
                                        '0%': { 
                                            transform: 'rotate(0deg) scale(1)',
                                            opacity: 1
                                        },
                                        '50%': { 
                                            transform: 'rotate(180deg) scale(0.5)',
                                            opacity: 0.3
                                        },
                                        '100%': { 
                                            transform: 'rotate(360deg) scale(1)',
                                            opacity: 1
                                        }
                                    }
                                }}
                            >
                                {isDarkMode ? <LightMode /> : <DarkMode />}
                            </Box>
                        </IconButton>

                        {/* GitHub Link */}
                        <IconButton 
                            color="primary"
                            component="a"
                            href="https://github.com/apache/kvrocks-controller"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub repository"
                            sx={{ 
                                color: isDarkMode ? '#ffffff' : 'black', // Pure white in dark mode
                                position: 'relative',
                                '&:hover': { color: '#64ffda' }, // Same teal color for both modes
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '0',
                                    height: '2px',
                                    bottom: '5px',
                                    left: '25%',
                                    backgroundColor: '#64ffda', // Same teal color for both modes
                                    transition: 'width 0.3s ease-in-out'
                                },
                                '&:hover::after': {
                                    width: '50%'
                                },
                                transition: 'color 0.3s ease'
                            }}
                        >
                            <GitHub />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}