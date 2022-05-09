import React from 'react';
import { ThemeContext, UserContext } from '../contexts';

export function withTheme(Component) {
  class ComponentWithTheme extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {([theme, setTheme]) => (
            <Component theme={theme} setTheme={setTheme} {...this.props} />
          )}
        </ThemeContext.Consumer>
      );
    }
  }

  return ComponentWithTheme;
}

export function withUser(Component) {
  return function ComponentWithUser(props) {
    return (
      <UserContext.Consumer>
        {(user) => <Component user={user} {...props} />}
      </UserContext.Consumer>
    );
  };
}
