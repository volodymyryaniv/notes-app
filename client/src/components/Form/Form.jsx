import React from 'react';
import styles from './Form.module.scss';

export default function Form() {
  return (
    <>
      <form className={styles.form}>
        <label className={styles.label}>
          {' '}
          Name
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your name"
          />
        </label>
        <label className={styles.label}>
          {' '}
          Email
          <input
            className={styles.input}
            type="email"
            placeholder="Enter your email"
          />
        </label>
        <label className={styles.label}>
          {' '}
          Message
          <textarea
            className={styles.input}
            rows={8}
            maxLength={400}
            placeholder="Enter your message"
          />
        </label>
        <button className={`${styles.button} ${styles.save}`} type="submit">
          Save note
        </button>
        <button className={`${styles.button} ${styles.reset}`} type="reset">
          Discard all
        </button>
      </form>
    </>
  );
}
