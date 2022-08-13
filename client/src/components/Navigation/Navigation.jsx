import React from 'react';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const link = ({ isActive }) => (isActive ? styles.active : styles.link);
  return (
    <section className={styles.container}>
      <nav className={styles.navigation}>
        <NavLink to="/" className={link} end>
          Add note
        </NavLink>
        <NavLink to="notes" className={link}>
          Note list
        </NavLink>
      </nav>
    </section>
  );
}
