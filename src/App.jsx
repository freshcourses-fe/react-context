import { Component } from 'react';
import { ThemeContext, UserContext } from './contexts';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CONSTANTS from './constants';

/*
  1. создать контекст -  React.createContext
  2. в контекст надо положить данные - Provider
  3. данные надо достать там где надо - Consumer
*/

class App extends Component {
  state = {
    user: {
      id: 5482321,
      firstName: 'Test',
      lastName: 'Testovenko',
      pictureSrc:
        'https://www.ranacanada.ca/wp-content/uploads/2021/05/user.png',
    },
    theme: CONSTANTS.THEMES.DARK,
  };

  setTheme = ({ target: { value } }) => {
    this.setState({theme: value})
  };

  render() {
    const { user, theme } = this.state;
    return (
      <ThemeContext.Provider value={[theme, this.setTheme]}>
        <UserContext.Provider value={user}>
          <Header />
          <Sidebar />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
