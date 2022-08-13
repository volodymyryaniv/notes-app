import React from 'react';
import styles from './NotesItem.module.scss';
import Note from '../Note/Note';

export default function NotesItem({ id, name, email, messages }) {
  return (
    <article className={styles.container}>
      <h3 className={styles.name}>{name} :</h3>
      <span className={styles.email}>{email}</span>
      <div className={styles.iconsContainer}>
        <img className={styles.icon} src="icons/add.svg" alt="add cross" />
        <img
          className={styles.icon}
          src="icons/removecross.svg"
          alt="remove cross"
        />
      </div>
      {messages.map((note) => {
        return <Note key={note.id} {...note} />;
      })}
    </article>
  );
}
