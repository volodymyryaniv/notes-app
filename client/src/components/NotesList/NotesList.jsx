import React from 'react';
import axios from 'axios';
import NotesItem from '../NotesItem';
import styles from './NotesList.module.scss';

export default function NotesList() {
  const [list, setList] = React.useState([]);

  return (
    <section className={styles.container}>
      {list && list.map((contact) => {
        return <NotesItem key={contact.id} {...contact} />;
      })}
    </section>
  );
}
