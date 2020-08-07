import React, {useMemo, useState} from 'react';
import {StatusBar} from 'react-native'
import {NavigationContainer, DarkTheme as DarkThemeNavigation, DefaultTheme as DefaultThemeNavigation, DefaultTheme} from "@react-navigation/native";
import {Provider as PaperProvider, Button, DarkTheme as DarkThemePaper, DefaultTheme as DefaultThemePaper} from "react-native-paper"
import Navigation from "./src/navigation/Navigation";
import PreferencesContext from './src/context/PreferencesContext';

export default function App() {
  const [theme, setTheme] =  useState("dark");

  DefaultThemePaper.colors.primary="#ffa200"
  DarkThemePaper.colors.primary="#ffa200"
  DarkThemePaper.colors.accent="#ffa200"

  DarkThemeNavigation.colors.background="#192734"
  DarkThemeNavigation.colors.card="#15212b"

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const preference = useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme],
  );

  return (
    <PreferencesContext.Provider value={preference}>
      <PaperProvider theme={theme==="dark" ? DarkThemePaper: DefaultThemePaper}>
        <StatusBar barStyle={theme==="dark" ?"light-content" : "light-content"} />
        <NavigationContainer theme={theme==="dark" ? DarkThemeNavigation : DefaultThemeNavigation}>
          <Navigation/>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}