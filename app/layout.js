"use client"
import '@styles/globals.css'
import { Inter } from 'next/font/google'
import Nav from '@components/Nav';
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
import { Providers } from '@/lib/providers'
import { darkTheme, lightTheme } from "./theme/themes";
import { ThemeProvider, CssBaseline, Switch, FormControlLabel } from "@mui/material";
import { ChangeEvent, useState } from "react";
export default function RootLayout({ children }) {
  // let [useDarkTheme, setUseDarkTheme] = useState(false);
  // let [theme, setTheme] = useState(useDarkTheme ? darkTheme : lightTheme);
  // const changeThemeHandler = (target, currentValue) => {
  //   setUseDarkTheme(currentValue);
  //   setTheme(currentValue ? darkTheme : lightTheme);
  // };
  return (
    <Providers>
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      {/* <ThemeProvider theme={theme}> */}
        <CssBaseline />
        <body className={inter.className} id="__next"> 
          <CssBaseline />
          <Nav />
          {/* <FormControlLabel
            control={
              <Switch
                checked={useDarkTheme}
                inputProps={{ "aria-label": "Dark Mode" }}
                onChange={(target, value) => changeThemeHandler(target, value)}
              ></Switch>
            }
            label="Dark Mode"
            labelPlacement="start"
          /> */}
          {children}
        </body>
      {/* </ThemeProvider> */}

    </html>
    </Providers>
  )
}