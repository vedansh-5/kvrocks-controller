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

export default function Home() {
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
            icon: <GitHubIcon sx={{ fontSize: 36, color: "#1565C0" }} />,
            link: "https://github.com/apache/kvrocks-controller"
        },
        {
            title: "Documentation",
            description: "Learn how to use Kvrocks Controller effectively.",
            icon: <MenuBookIcon sx={{ fontSize: 36, color: "#1565C0" }} />,
            link: "https://github.com/apache/kvrocks-controller/wiki"
        }
    ];

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {/* Hero Section with Logo */}
            <Box sx={{ 
                textAlign: 'center', 
                py: 8,
                background: 'linear-gradient(45deg, rgba(21,101,192,0.1) 0%, rgba(33,150,243,0.1) 100%)',
                borderRadius: 2,
                mb: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {/* Logo */}
                <Box sx={{ mb: 3 }}>
                    <img 
                        src="/logo.svg" 
                        alt="Apache Kvrocks Controller Logo" 
                        style={{ 
                            width: "120px",
                            height: "auto",
                            filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))"
                        }}
                    />
                </Box>
                
                <Typography 
                    variant="h2" 
                    component="h1" 
                    gutterBottom
                    sx={{ 
                        fontWeight: 700,
                        background: 'linear-gradient(45deg, #1565C0 0%, #42a5f5 100%)',
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
                    background: 'linear-gradient(90deg, transparent, #1565C0, transparent)',
                    mb: 3,
                    borderRadius: '3px'
                }} />

                <Typography variant="h5" color="text.secondary" paragraph sx={{ 
                    maxWidth: '800px', 
                    mx: 'auto', 
                    mb: 4,
                    fontWeight: 300,
                    lineHeight: 1.5
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
                            borderColor: '#1976d2',
                            color: '#1976d2',
                            fontWeight: 'medium',
                            px: 3,
                            '&:hover': {
                                borderColor: '#0d47a1',
                                color: '#0d47a1',
                                backgroundColor: 'rgba(33, 150, 243, .05)'
                            }
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
                        color: '#1565C0'
                    }}
                >
                    Key Features
                </Typography>
                
                {/* Decorative line under section title */}
                <Box sx={{ 
                    width: '80px', 
                    height: '3px', 
                    background: '#1565C0',
                    mx: 'auto',
                    mb: 5,
                    borderRadius: '3px'
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
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    borderTop: '3px solid #1565C0',
                                    borderRadius: '4px',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
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
                                        color: '#1565C0',
                                        mb: 1.5
                                    }}
                                >
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
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
                        color: '#1565C0'
                    }}
                >
                    Documentation
                </Typography>
                
                {/* Matching decorative line under Documentation title */}
                <Box sx={{ 
                    width: '80px', 
                    height: '3px', 
                    background: '#1565C0',
                    mx: 'auto',
                    mb: 5,
                    borderRadius: '3px'
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
                                        borderLeft: '3px solid #1565C0',
                                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
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
                                        background: 'rgba(21, 101, 192, 0.1)',
                                        p: 2
                                    }}>{doc.icon}</Box>
                                    <Box>
                                        <Typography 
                                            variant="h6" 
                                            component="h3" 
                                            gutterBottom
                                            sx={{ color: '#1565C0', fontWeight: 600 }}
                                        >
                                            {doc.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
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
            <Divider sx={{ my: 6 }} />
            
            <Box sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    Apache Kvrocks Controller is currently in active development.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    © {new Date().getFullYear()} Apache Software Foundation
                </Typography>
            </Box>
        </Container>
    );
}