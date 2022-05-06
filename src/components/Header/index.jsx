import React from 'react';
import cx from 'classnames';
import { UserContext, ThemeContext } from '../../contexts';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';

const Header = () => {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => {
        const headerClassNames = cx(styles.container, {
          [styles.darkTheme]: theme === CONSTANTS.THEMES.DARK,
          [styles.lightTheme]: theme === CONSTANTS.THEMES.LIGTH,
          [styles.nightTheme]: theme === CONSTANTS.THEMES.NIGHT,
        });
        return (
          <UserContext.Consumer>
            {(userData) => (
              <header className={headerClassNames}>
                <h1>MY SITE</h1>
                <img
                  alt="user"
                  style={{ height: '64px', width: '64px' }}
                  src={userData.pictureSrc}
                />
                <select onChange={setTheme}>
                  <option value={CONSTANTS.THEMES.LIGTH}>Light</option>
                  <option selected value={CONSTANTS.THEMES.DARK}>Dark</option>
                  <option value={CONSTANTS.THEMES.NIGHT}>Night</option>
                </select>
              </header>
            )}
          </UserContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Header;
