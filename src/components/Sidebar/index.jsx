import React from 'react';
import cx from 'classnames';
import { UserContext, ThemeContext } from '../../contexts';
import CONSTANTS from '../../constants';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <ThemeContext.Consumer>
      {([theme]) => {
        const sidebarClassNames = cx(styles.container, {
          [styles.darkTheme]: theme === CONSTANTS.THEMES.DARK,
          [styles.lightTheme]: theme === CONSTANTS.THEMES.LIGTH,
          [styles.nightTheme]: theme === CONSTANTS.THEMES.NIGHT,
        });
        return (
          <UserContext.Consumer>
            {(user) => (
              <article className={sidebarClassNames}>
                <h1>{`${user.firstName} ${user.lastName}`}</h1>
              </article>
            )}
          </UserContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Sidebar;
