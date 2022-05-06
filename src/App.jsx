import { Component } from 'react';
import './App.css';
import Grandparent from './components/Grandparent';
import { UserContext } from './contexts';
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
    console.log(UserContext);

    return (
      <UserContext.Provider value={this.state.user}>
        <Grandparent  />
      </UserContext.Provider>
    );
  }
}

export default App;
