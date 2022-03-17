import React, { useEffect, useState, useContext } from 'react';
import cn from 'classnames';

import styles from './styles.scss';

const Context = React.createContext();

export const Dropdown = ({ children, className }) => {
  const [context, setContext] = useState({ on: true, toggle });
  const toggle = () => setContext((e) => ({ ...e,  on: !e.on }));

  useEffect(() => {
    setContext((e) => ({ ...e, toggle }));
  }, []);

  return (
    <Context.Provider value={context}>
      <div className={cn(styles.wrapper, className)}>
        {children}
      </div>
    </Context.Provider>
  );
};

Dropdown.Trigger = ({ children }) => { 
  const context = useContext(Context);

  return (<div className={styles.trigger} onClick={context.toggle}>{children}</div>);
};

Dropdown.Content = ({ children }) => {
  const context = useContext(Context);

  return (<div className={cn(styles.content, { [styles.on]: context.on })}>{children}</div>);
};

Dropdown.Closed = ({ children }) => { 
  const context = useContext(Context);

  return !context.on ? children : null;
};

Dropdown.Opened = ({ children }) => { 
  const context = useContext(Context);

  return context.on ? children : null;
};

export default Dropdown;
