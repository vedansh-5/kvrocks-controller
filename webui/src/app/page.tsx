'use client';

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

import { Box, Button, Container, Divider, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useDarkMode } from './ui/banner';

export default function Home() {
    const { isDarkMode } = useDarkMode();
    
    // Enhanced features with better descriptions
    const features = [
        {
            title: "Centralized Cluster Management",
            description: "Seamlessly orchestrate multiple Kvrocks clusters from a single intuitive interface, with powerful controls for node deployment, migration, and scaling.",
            icon: <StorageIcon sx={{ 
                fontSize: 52, 
                color: 'white',
                background: 'linear-gradient(135deg, #2196f3 30%, #0d47a1 90%)',
                p: 1,
                borderRadius: '50%',
                boxShadow: '0 4px 8px rgba(33, 150, 243, 0.3)'
            }} />
        },
        {
            title: "Real-Time Monitoring & Analytics",
            description: "Track crucial metrics with customizable dashboards that provide insights into performance bottlenecks, resource utilization, and system health for proactive maintenance.",
            icon: <DashboardIcon sx={{ 
                fontSize: 52, 
                color: 'white',
                background: 'linear-gradient(135deg, #1976d2 30%, #0d47a1 90%)',
                p: 1,
                borderRadius: '50%',
                boxShadow: '0 4px 8px rgba(33, 150, 243, 0.3)'
            }} />
        },
        {
            title: "Advanced Configuration Management",
            description: "Define, version, and deploy configuration changes across your entire infrastructure with robust validation, rollback capabilities, and configuration templates.",
            icon: <SettingsIcon sx={{ 
                fontSize: 52, 
                color: 'white',
                background: 'linear-gradient(135deg, #1565C0 30%, #0d47a1 90%)',
                p: 1,
                borderRadius: '50%',
                boxShadow: '0 4px 8px rgba(33, 150, 243, 0.3)'
            }} />
        },
        {
            title: "Enterprise Security Controls",
            description: "Implement comprehensive access management with role-based permissions, audit logging, and secure communications between controller and nodes.",
            icon: <SecurityIcon sx={{ 
                fontSize: 52, 
                color: 'white',
                background: 'linear-gradient(135deg, #0d47a1 30%, #052c65 90%)',
                p: 1,
                borderRadius: '50%',
                boxShadow: '0 4px 8px rgba(33, 150, 243, 0.3)'
            }} />
        }
    ];

    const docs = [
        {
            title: "GitHub Repository",
            description: "Access the source code, contribute, and report issues.",
            icon: <GitHubIcon sx={{ fontSize: 36, color: isDarkMode ? "#90caf9" : "#1565C0" }} />,
            link: "https://github.com/apache/kvrocks-controller"
        },
        {
            title: "Documentation",
            description: "Learn how to use Kvrocks Controller effectively.",
            icon: <MenuBookIcon sx={{ fontSize: 36, color: isDarkMode ? "#90caf9" : "#1565C0" }} />,
            link: "https://github.com/apache/kvrocks-controller/wiki"
        }
    ];

    return (
        <Container maxWidth="lg" sx={{ 
            mt: 4, 
            mb: 4,
            color: isDarkMode ? 'white' : 'inherit',
            transition: 'color 0.3s ease',
        }}>
            {/* Hero Section with Logo */}
            <Box sx={{ 
                textAlign: 'center', 
                py: 8,
                background: isDarkMode 
                    ? 'linear-gradient(45deg, rgba(21,101,192,0.05) 0%, rgba(33,150,243,0.05) 100%)'
                    : 'linear-gradient(45deg, rgba(21,101,192,0.1) 0%, rgba(33,150,243,0.1) 100%)',
                borderRadius: 2,
                mb: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'background 0.3s ease'
            }}>
                {/* Logo */}
                <Box sx={{ mb: 3 }}>
                    <img 
                        src="/logo.svg" 
                        alt="Apache Kvrocks Controller Logo" 
                        style={{ 
                            width: "120px",
                            height: "auto",
                            filter: isDarkMode 
                                ? "drop-shadow(0px 4px 8px rgba(255, 255, 255, 0.2))" 
                                : "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))"
                        }}
                    />
                </Box>
                
                <Typography 
                    variant="h2" 
                    component="h1" 
                    gutterBottom
                    sx={{ 
                        fontWeight: 700,
                        background: isDarkMode 
                            ? 'linear-gradient(45deg, #42a5f5 0%, #90caf9 100%)'
                            : 'linear-gradient(45deg, #1565C0 0%, #42a5f5 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    Apache Kvrocks Controller
                </Typography>

                {/* Enhanced tagline with decorative line */}
                <Box sx={{ 
                    width: '120px', 
                    height: '3px', 
                    background: isDarkMode
                        ? 'linear-gradient(90deg, transparent, #90caf9, transparent)'
                        : 'linear-gradient(90deg, transparent, #1565C0, transparent)',
                    mb: 3,
                    borderRadius: '3px',
                    transition: 'background 0.3s ease'
                }} />

                <Typography variant="h5" color={isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary'} paragraph sx={{ 
                    maxWidth: '800px', 
                    mx: 'auto', 
                    mb: 4,
                    fontWeight: 300,
                    lineHeight: 1.5,
                    transition: 'color 0.3s ease'
                }}>
                    A comprehensive management interface for distributed Kvrocks clusters, 
                    designed for reliability, scalability, and operational excellence
                </Typography>
                <Stack 
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent="center"
                >
                    <Button 
                        variant="contained" 
                        href="/namespaces"
                        size="large" 
                        sx={{
                            background: 'linear-gradient(45deg, #1565C0 30%, #1976d2 90%)',
                            boxShadow: '0 3px 5px 2px rgba(33, 150, 243, .3)',
                            color: '#ffffff',
                            fontWeight: 'bold',
                            px: 4,
                            py: 1,
                            '&:hover': {
                                background: 'linear-gradient(45deg, #0d47a1 30%, #1565C0 90%)',
                                boxShadow: '0 4px 8px 2px rgba(33, 150, 243, .4)',
                                transform: 'scale(1.03)'
                            },
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Get Started
                    </Button>
                    <Button 
                        variant="outlined" 
                        size="large" 
                        href="https://github.com/apache/kvrocks-controller/issues/135"
                        sx={{
                            borderColor: isDarkMode ? '#90caf9' : '#1976d2',
                            color: isDarkMode ? '#90caf9' : '#1976d2',
                            fontWeight: 'medium',
                            px: 3,
                            '&:hover': {
                                borderColor: isDarkMode ? '#bbdefb' : '#0d47a1',
                                color: isDarkMode ? '#bbdefb' : '#0d47a1',
                                backgroundColor: isDarkMode ? 'rgba(144, 202, 249, 0.05)' : 'rgba(33, 150, 243, .05)'
                            },
                            transition: 'border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease'
                        }}
                    >
                        Give Feedback
                    </Button>
                </Stack>
            </Box>
            
            {/* Features Section with enhanced styling */}
            <Box sx={{ mb: 8 }}>
                <Typography 
                    variant="h4" 
                    component="h2" 
                    gutterBottom 
                    sx={{ 
                        mb: 1, 
                        textAlign: 'center',
                        fontWeight: 600,
                        color: isDarkMode ? '#90caf9' : '#1565C0',
                        transition: 'color 0.3s ease'
                    }}
                >
                    Key Features
                </Typography>
                
                {/* Decorative line under section title */}
                <Box sx={{ 
                    width: '80px', 
                    height: '3px', 
                    background: isDarkMode ? '#90caf9' : '#1565C0',
                    mx: 'auto',
                    mb: 5,
                    borderRadius: '3px',
                    transition: 'background 0.3s ease'
                }} />
                
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Paper 
                                elevation={2}
                                sx={{
                                    height: '100%',
                                    p: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease',
                                    borderTop: isDarkMode ? '3px solid #90caf9' : '3px solid #1565C0',
                                    borderRadius: '4px',
                                    backgroundColor: isDarkMode ? '#1e1e1e' : 'white',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: isDarkMode ? '0 10px 20px rgba(0, 0, 0, 0.4)' : '0 10px 20px rgba(0, 0, 0, 0.1)'
                                    }
                                }}
                            >
                                <Box sx={{ 
                                    mb: 2,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '80px',
                                    height: '80px',
                                }}>{feature.icon}</Box>
                                <Typography 
                                    variant="h6" 
                                    component="h3" 
                                    gutterBottom
                                    sx={{
                                        fontWeight: 600,
                                        color: isDarkMode ? '#90caf9' : '#1565C0',
                                        mb: 1.5,
                                        transition: 'color 0.3s ease'
                                    }}
                                >
                                    {feature.title}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color={isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary'}
                                    sx={{ 
                                        lineHeight: 1.6,
                                        transition: 'color 0.3s ease'
                                    }}
                                >
                                    {feature.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            
            {/* Documentation Section */}
            <Box sx={{ mt: 10, mb: 4 }}>
                <Typography 
                    variant="h4" 
                    component="h2" 
                    gutterBottom 
                    sx={{ 
                        mb: 1, 
                        textAlign: 'center',
                        fontWeight: 600,
                        color: isDarkMode ? '#90caf9' : '#1565C0',
                        transition: 'color 0.3s ease'
                    }}
                >
                    Documentation
                </Typography>
                
                {/* Matching decorative line under Documentation title */}
                <Box sx={{ 
                    width: '80px', 
                    height: '3px', 
                    background: isDarkMode ? '#90caf9' : '#1565C0',
                    mx: 'auto',
                    mb: 5,
                    borderRadius: '3px',
                    transition: 'background 0.3s ease'
                }} />
                
                <Grid container spacing={4} justifyContent="center">
                    {docs.map((doc, index) => (
                        <Grid item xs={12} sm={6} md={5} key={index}>
                            <Link 
                                href={doc.link} 
                                underline="none" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Paper 
                                    elevation={2}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        borderLeft: isDarkMode ? '3px solid #90caf9' : '3px solid #1565C0',
                                        backgroundColor: isDarkMode ? '#1e1e1e' : 'white',
                                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: isDarkMode ? '0 8px 16px rgba(0, 0, 0, 0.4)' : '0 8px 16px rgba(0, 0, 0, 0.1)'
                                        }
                                    }}
                                >
                                    <Box sx={{ 
                                        mr: 3,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        background: isDarkMode ? 'rgba(144, 202, 249, 0.1)' : 'rgba(21, 101, 192, 0.1)',
                                        p: 2,
                                        transition: 'background 0.3s ease'
                                    }}>{doc.icon}</Box>
                                    <Box>
                                        <Typography 
                                            variant="h6" 
                                            component="h3" 
                                            gutterBottom
                                            sx={{ 
                                                color: isDarkMode ? '#90caf9' : '#1565C0', 
                                                fontWeight: 600,
                                                transition: 'color 0.3s ease'
                                            }}
                                        >
                                            {doc.title}
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            color={isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary'}
                                            sx={{ transition: 'color 0.3s ease' }}
                                        >
                                            {doc.description}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            
            {/* Footer with improved spacing */}
            <Divider sx={{ 
                my: 6,
                borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
                transition: 'border-color 0.3s ease'
            }} />
            
            <Box sx={{ textAlign: 'center', py: 2 }}>
                <Typography 
                    variant="body1" 
                    color={isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary'} 
                    sx={{ 
                        mb: 2,
                        transition: 'color 0.3s ease'
                    }}
                >
                    Apache Kvrocks Controller is currently in active development.
                </Typography>
                <Typography 
                    variant="body2" 
                    color={isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'text.secondary'}
                    sx={{ transition: 'color 0.3s ease' }}
                >
                    © {new Date().getFullYear()} Apache Software Foundation
                </Typography>
            </Box>
        </Container>
    );
}