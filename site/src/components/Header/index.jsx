import React, { useCallback, useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import allRoutes, { homePage } from '~routes';
import { Link, Icon } from '~atoms';
import { usePageNavigation } from '~hooks';

import { Logo } from './components';
import styles from './style.scss';

const routes = allRoutes.filter(r => r.title);

const Header = (props) => {
  const [active, setActive] = useState(false);
  const [currentPage] = usePageNavigation();

  const toggle = useCallback(() => {
    setActive(!active);
  }, [active]);

  const hide = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.logo}>
          <Logo />
        </span>
        <nav className={cn(styles.nav, { [styles[`nav${routes.length}`]]: active })}>
          <ul>
            {routes.map((route, i) => (
              <li className={cn(styles.navItem, { [styles.active]: route.path === currentPage })} key={`${route.path}${i}`} onClick={hide}>
                <Link to={route.path} noStyle>{route.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <span className={styles.menuIcon} onClick={toggle}>
          <Icon icon={active ? faTimes : faBars} />
        </span>
      </header>
    </div>
  );
};

export default Header;
