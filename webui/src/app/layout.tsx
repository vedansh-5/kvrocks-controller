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

import { Inter } from "next/font/google";
import "./globals.css";
import Banner, { DarkModeProvider } from "./ui/banner";
import { Container } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

const inter = Inter({ subsets: ["latin"] });

// Note: metadata must be moved to a separate metadata.js file when using 'use client'

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Apache Kvrocks Controller</title>
            </head>
            <body className={inter.className}>
                <DarkModeProvider>
                    <CssBaseline />
                    <Banner />
                    <Container 
                        sx={{
                            marginTop: '64px', 
                            height: 'calc(100vh - 64px)',
                            transition: 'background-color 0.3s ease'
                        }} 
                        maxWidth={false} 
                        disableGutters
                    >
                        {children}
                    </Container>
                </DarkModeProvider>
            </body>
        </html>
    );
}
