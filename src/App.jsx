import { Component } from 'react';
import { UserContext } from './contexts';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
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
  };

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <Header />
        <Sidebar />
      </UserContext.Provider>
    );
  }
}

export default App;
