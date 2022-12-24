import NavigationBar from './components/NavigationBar';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { createContext } from 'react';
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme}>
        <NavigationBar toggleTheme={toggleTheme} theme={theme}></NavigationBar>
        <MainBody></MainBody>
        <Footer></Footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
