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
import { Home, Dashboard, Storage, MenuBook, DarkMode, GitHub } from '@mui/icons-material';
import { useState } from 'react';

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

export default function Banner() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // Additional dark mode implementation logic can be added here
    };

    return (
        <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: 'white', borderBottom: '1px solid #eaeaea' }}>
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
                                color: 'black',
                                display: { xs: 'none', sm: 'block' }
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
                                    color: 'black',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 0.5,
                                    px: { xs: 0.5, sm: 1.5 },
                                    py: 1,
                                    fontSize: { xs: '0.875rem', sm: '1rem' },
                                    '&:hover': {
                                        color: '#0d47a1',
                                        textDecoration: 'none'
                                    }
                                }}
                            >
                                <Typography sx={{ display: { xs: 'none', md: 'block' } }}>
                                    {link.title}
                                </Typography>
                            </Box>
                        ))}

                        {/* Dark Mode Toggle */}
                        <IconButton 
                            color="primary" 
                            onClick={toggleDarkMode}
                            aria-label="Toggle dark mode"
                            sx={{ color: 'black' }}
                        >
                            <DarkMode />
                        </IconButton>

                        {/* GitHub Link */}
                        <IconButton 
                            color="primary"
                            component="a"
                            href="https://github.com/apache/kvrocks-controller"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub repository"
                            sx={{ color: 'black' }}
                        >
                            <GitHub />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}