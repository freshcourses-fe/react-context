import React from 'react';
import cx from 'classnames';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';
import { withTheme, withUser } from '../../HOCs';

const Header = (props) => {
  const { theme, setTheme, user } = props;
  const headerClassNames = cx(styles.container, {
    [styles.darkTheme]: theme === CONSTANTS.THEMES.DARK,
    [styles.lightTheme]: theme === CONSTANTS.THEMES.LIGTH,
    [styles.nightTheme]: theme === CONSTANTS.THEMES.NIGHT,
  });

  return (
    <header className={headerClassNames}>
      <h1>MY SITE</h1>
      <img
        alt="user"
        style={{ height: '64px', width: '64px' }}
        src={user.pictureSrc}
      />
      <select value={theme} onChange={setTheme}>
        <option value={CONSTANTS.THEMES.LIGTH}>Light</option>
        <option value={CONSTANTS.THEMES.DARK}>Dark</option>
        <option value={CONSTANTS.THEMES.NIGHT}>Night</option>
      </select>
    </header>
  );
};

const HeaderWithUser = withUser(Header);

export default withTheme(HeaderWithUser);
