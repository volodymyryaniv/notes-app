import React from 'react';
import styles from './Note.module.scss';

export default function Note({ id, done, message, until }) {
  const status = done ? styles.doneMessage : '';
  return (
    <article key={id} className={styles.messageContainer}>
      <input className={styles.checkbox} checked={done} type="checkbox" />
      <div className={`${styles.messageBody} ${status}`}>
        <p className={styles.message}>{message}</p>
        <span
          className={`${styles.untilDate} ${done ? styles.doneStatus : ''}`}
        >
          {done ? 'Done' : `Until: ${until}`}
        </span>
        <img
          className={styles.icon}
          src="icons/removecross.svg"
          alt="remove cross"
        />
      </div>
    </article>
  );
}
