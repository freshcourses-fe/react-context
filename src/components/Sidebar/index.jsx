import React from 'react';
import cx from 'classnames';
import CONSTANTS from '../../constants';
import styles from './Sidebar.module.scss';
import { withTheme, withUser } from './../../HOCs';

const Sidebar = (props) => {
  const { user, theme } = props;
  const sidebarClassNames = cx(styles.container, {
    [styles.darkTheme]: theme === CONSTANTS.THEMES.DARK,
    [styles.lightTheme]: theme === CONSTANTS.THEMES.LIGTH,
    [styles.nightTheme]: theme === CONSTANTS.THEMES.NIGHT,
  });
  return (
    <article className={sidebarClassNames}>
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
    </article>
  );
};

export default withUser(withTheme(Sidebar));
